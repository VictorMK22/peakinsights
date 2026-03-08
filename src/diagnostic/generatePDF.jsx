import jsPDF from "jspdf";
import { renderToStaticMarkup } from "react-dom/server";
import { BarChart2, Rocket, Wrench, TriangleAlert } from "lucide-react";

/**
 * Maps each RESULTS category title to its Lucide icon.
 * Mirrors the emoji in RESULTS: 🚀 → Rocket, 🛠️ → Wrench, 🧨 → TriangleAlert
 */
const CATEGORY_ICON_MAP = {
  "Scale-Ready":      Rocket,
  "Growth Potential": Wrench,
  "At Risk":          TriangleAlert,
};

/**
 * Renders a Lucide React icon to a base64 PNG data URL via an off-screen canvas.
 *
 * @param {React.ElementType} IconComponent  - Lucide icon component
 * @param {number}            size           - canvas size in px (icon is drawn at this size)
 * @param {number[]}          color          - RGB array e.g. [79, 70, 229]
 * @returns {Promise<string>}                - base64 PNG data URL
 */
async function lucideToBase64(IconComponent, size = 32, color = [79, 70, 229]) {
  const [r, g, b] = color;
  const colorHex  = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  // 1. Render the icon to an SVG string
  const svgString = renderToStaticMarkup(
    <IconComponent
      size={size}
      color={colorHex}
      strokeWidth={2}
    />
  );

  // 2. Convert SVG string → Blob → Object URL → Image → Canvas → PNG
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url     = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    const img    = new Image();
    img.onload   = () => {
      const canvas    = document.createElement("canvas");
      canvas.width    = size;
      canvas.height   = size;
      const ctx       = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror  = reject;
    img.src      = url;
  });
}

/**
 * Generates a PeakInsights Advisory Report PDF that mirrors Results.jsx styling.
 * Uses Lucide icons (BarChart2 for score, Tag for category) embedded as PNG images.
 *
 * @param {object} result  - Parsed peak_result from localStorage
 * @param {string} name    - Founder name
 * @param {string} score   - Score string e.g. "72"
 * @returns {Promise<string>} - data URI string for download / base64 for email
 */
export async function generateAdvisoryPDF(result, name, score) {
  const WHITE      = [255, 255, 255];
  const SLATE_50   = [248, 250, 252];
  const GRAY_600   = [75, 85, 99];
  const GRAY_700   = [55, 65, 81];
  const GRAY_800   = [31, 41, 55];
  const GRAY_400   = [156, 163, 175];
  const INDIGO_600 = [79, 70, 229];
  const INDIGO_50  = [238, 242, 255];
  const BORDER     = [229, 231, 235];

  const MARGIN        = 56;
  const CARD_TOP      = 36;
  const CARD_PADDING  = 40;
  const MAX_CONTENT_H = 680;

  // Resolve the correct category icon dynamically from result.title
  const CategoryIcon = CATEGORY_ICON_MAP[result.title] ?? TriangleAlert;

  // Pre-render Lucide icons to PNG base64 at 2× for sharpness
  const ICON_SIZE = 13; // pt — matches font-size 13 for score/category lines
  const [scoreIconPng, categoryIconPng] = await Promise.all([
    lucideToBase64(BarChart2,    26, INDIGO_600),
    lucideToBase64(CategoryIcon, 26, INDIGO_600),
  ]);

  // ── PASS 1: measure y positions without drawing ───────────────
  function measurePageEnds() {
    const doc       = new jsPDF({ unit: "pt", format: "a4" });
    const PAGE_W    = doc.internal.pageSize.getWidth();
    const CONTENT_W = PAGE_W - MARGIN * 2;

    let y      = CARD_TOP + CARD_PADDING;
    let pageNum = 1;
    const ends  = [];

    const split = (text, maxW) => doc.splitTextToSize(String(text), maxW);

    const nextPage = () => {
      ends.push({ page: pageNum, finalY: y + CARD_PADDING });
      pageNum++;
      y = CARD_TOP + CARD_PADDING;
    };

    const checkBreak = (neededH) => {
      if (y + neededH > CARD_TOP + CARD_PADDING + MAX_CONTENT_H) nextPage();
    };

    // Header
    doc.setFont("helvetica", "normal"); doc.setFontSize(16);
    y += 24;
    doc.setFontSize(11);
    const subLines = split("Thanks for completing the PeakInsights Business Diagnostic test.", CONTENT_W);
    y += subLines.length * 16 + 20;
    doc.setFont("helvetica", "bold"); doc.setFontSize(13);
    y += 20; // score line (icon + text, same height as font)
    y += 20; // category line
    y += 24; // extra gap before divider
    y += 32; // divider + mt-10

    const measureSection = (items, highlight) => {
      const itemMaxW      = CONTENT_W - (highlight ? 32 : 16);
      const itemLinesList = items.map((item) => split(item, itemMaxW));
      const totalItemH    = itemLinesList.reduce((acc, lines) => acc + lines.length * 14 + 10, 0);
      const sectionH      = 32 + totalItemH + (highlight ? 20 : 0);
      checkBreak(sectionH);
      y += 32;
      itemLinesList.forEach((lines) => {
        checkBreak(lines.length * 16 + 10);
        y += lines.length * 14 + 10;
      });
      y += 28;
    };

    measureSection(result.sections.meaning,    false);
    measureSection(result.sections.importance, false);
    measureSection(result.sections.nextSteps,  true);

    ends.push({ page: pageNum, finalY: y + CARD_PADDING });
    return ends;
  }

  const pageEnds = measurePageEnds();

  // ── PASS 2: draw ──────────────────────────────────────────────
  const doc       = new jsPDF({ unit: "pt", format: "a4" });
  const PAGE_W    = doc.internal.pageSize.getWidth();
  const PAGE_H    = doc.internal.pageSize.getHeight();
  const CONTENT_W = PAGE_W - MARGIN * 2;
  const CARD_X    = MARGIN - 16;
  const CARD_W    = PAGE_W - (MARGIN - 16) * 2;

  let y      = CARD_TOP + CARD_PADDING;
  let pageNum = 1;

  const split = (text, maxW) => doc.splitTextToSize(String(text), maxW);
  const tw    = (t) => doc.getTextWidth(String(t));

  const setupPage = (pNum) => {
    const info   = pageEnds.find((p) => p.page === pNum);
    const finalY = info ? info.finalY : CARD_TOP + CARD_PADDING + MAX_CONTENT_H;
    const cardH  = finalY - CARD_TOP;

    doc.setFillColor(...SLATE_50);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");

    doc.setFillColor(220, 220, 230);
    doc.roundedRect(CARD_X + 3, CARD_TOP + 3, CARD_W, cardH, 12, 12, "F");

    doc.setFillColor(...WHITE);
    doc.roundedRect(CARD_X, CARD_TOP, CARD_W, cardH, 12, 12, "F");
  };

  const nextPage = () => {
    pageNum++;
    doc.addPage();
    setupPage(pageNum);
    y = CARD_TOP + CARD_PADDING;
  };

  const checkBreak = (neededH) => {
    if (y + neededH > CARD_TOP + CARD_PADDING + MAX_CONTENT_H) nextPage();
  };

  setupPage(1);

  // ── HEADER ────────────────────────────────────────────────────

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.setTextColor(...GRAY_600);
  doc.text(`Hi ${name},`, PAGE_W / 2, y, { align: "center" });
  y += 24;

  doc.setFontSize(11);
  const subLines = split(
    "Thanks for completing the PeakInsights Business Diagnostic test.",
    CONTENT_W
  );
  doc.text(subLines, PAGE_W / 2, y, { align: "center" });
  y += subLines.length * 16 + 20;

  // ── Score line: [icon] "Your Business Score: " [value in indigo] ──
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);

  const scoreLabel = "Your Business Score: ";
  const scoreValue = `${score}%`;
  const scoreTotalW = ICON_SIZE + 5 + tw(scoreLabel + scoreValue);
  let sx = (PAGE_W - scoreTotalW) / 2;

  // Icon image (rendered at 26×26, displayed at ICON_SIZE×ICON_SIZE pt)
  doc.addImage(scoreIconPng, "PNG", sx, y - ICON_SIZE + 1, ICON_SIZE, ICON_SIZE);
  sx += ICON_SIZE + 5;

  doc.setTextColor(...GRAY_800);
  doc.text(scoreLabel, sx, y);
  sx += tw(scoreLabel);
  doc.setTextColor(...INDIGO_600);
  doc.text(scoreValue, sx, y);
  y += 20;

  // ── Category line: [icon] "Category: " [value in indigo] ──────
  const catLabel = "Category: ";
  const catValue = result.title;
  const catTotalW = ICON_SIZE + 5 + tw(catLabel + catValue);
  let cx = (PAGE_W - catTotalW) / 2;

  doc.addImage(categoryIconPng, "PNG", cx, y - ICON_SIZE + 1, ICON_SIZE, ICON_SIZE);
  cx += ICON_SIZE + 5;

  doc.setTextColor(...GRAY_800);
  doc.text(catLabel, cx, y);
  cx += tw(catLabel);
  doc.setTextColor(...INDIGO_600);
  doc.text(catValue, cx, y);
  y += 24;

  // border-b divider
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(0.75);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  y += 32;

  // ── SECTIONS ──────────────────────────────────────────────────

  const renderSection = (title, items, highlight = false) => {
    const itemMaxW      = CONTENT_W - (highlight ? 32 : 16);
    const itemLinesList = items.map((item) => split(item, itemMaxW));
    const totalItemH    = itemLinesList.reduce((acc, lines) => acc + lines.length * 14 + 10, 0);
    const sectionH      = 32 + totalItemH + (highlight ? 20 : 0);

    checkBreak(sectionH);

    const sectionX = MARGIN;
    const sectionW = CONTENT_W;

    if (highlight) {
      doc.setFillColor(...INDIGO_50);
      doc.roundedRect(sectionX - 4, y - 8, sectionW + 8, sectionH + 12, 8, 8, "F");
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(...GRAY_800);
    doc.text(title, sectionX, y + 14);
    y += 32;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...GRAY_700);

    itemLinesList.forEach((lines) => {
      checkBreak(lines.length * 16 + 10);
      doc.setFillColor(...GRAY_700);
      doc.circle(sectionX + 5, y + 3.5, 2.2, "F");
      doc.text(lines, sectionX + 16, y + 8);
      y += lines.length * 14 + 10;
    });

    y += 35;
  };

  renderSection(result.sections.meaningTitle,    result.sections.meaning);
  renderSection(result.sections.importanceTitle, result.sections.importance);
  renderSection(result.sections.nextStepsTitle,  result.sections.nextSteps, true);

  // ── Page numbers ──────────────────────────────────────────────
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    const info  = pageEnds.find((pe) => pe.page === p);
    const noteY = (info?.finalY ?? y + CARD_PADDING) + 14;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...GRAY_400);
    doc.text(
      `Page ${p} of ${totalPages}  |  PeakInsights Confidential`,
      PAGE_W / 2,
      noteY,
      { align: "center" }
    );
  }

  return doc.output("datauristring");
}