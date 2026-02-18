export const RESULTS = {
  SCALE_READY: {
    icon: "🚀",
    title: "Scale-Ready",
    summary:
      "You’re ready to systemize and scale profitably. Let’s build on what’s working.",
    cta: "Want to move from ‘good’ to ‘great’? Book a free consultation today",

    sections: {
      meaningTitle: "What it really means",
      meaning: [
        "Your core processes are sound (sales, delivery, finance) and you consistently hit targets.",
        "You’ve already unlocked “low-hanging fruit” — now you need repeatable systems to multiply success.",
        "The biggest risk is chaos creeping back in; your focus must shift from firefighting to proactive scaling."
      ],

      importanceTitle: "Why it matters",
      importance: [
        "With robust foundations, every additional resource (new hire, marketing spend) yields predictable ROI.",
        "Poorly systemized growth leads to cost overruns, quality dips and founder burnout."
      ],

      nextStepsTitle: "Next steps",
      nextSteps: [
        "Document & automate your 3 highest-impact workflows (e.g., lead qualification, order fulfillment, monthly close).",
        "Scale Your Team via clear role definitions, SOPs and performance scorecards.",
        "Expand Markets: test a second sales channel or new vertical, backed by standardized playbooks.",
        "Invest in Tech: add simple tools (CRM, BI dashboard) that eliminate manual bottlenecks."
      ]
    }
  },

  OPTIMIZE: {
    icon: "🛠️",
    title: "Growth Potential",
    summary:
      "You’ve got traction, but there are leaks and gaps holding you back. Time for a strategic tune-up.",
    cta:
      "Want to stop bleeding profit and scale like a pro? Book a free consultation today",

    sections: {
      meaningTitle: "What it really means",
      meaning: [
        "Revenue and operations are moving, but you’re still bleeding margin or wasting time.",
        "You’ve proven the model but inefficiencies are capping your next leap.",
        "The pain points are less about “does this work?” and more “how do we make it work better, faster, cheaper?”"
      ],

      importanceTitle: "Why it matters",
      importance: [
        "Every Shilling lost to poor pricing, untracked stock or manual tasks is profit left on the table.",
        "Unresolved gaps compound over time — what feels small today can be millions lost over a year."
      ],

      nextStepsTitle: "Next steps",
      nextSteps: [
        "Cost Leak Audit: deep-dive on COGS, procurement and recurring expenses — identify top 5 drains.",
        "Pricing Tune-Up: run a margin review on your bestselling products; reprice to hit target margins.",
        "Ops Slim-Down: map your end-to-end workflow, eliminate 3 repetitive manual steps.",
        "Metric Alignment: introduce 5–10 “headline” KPIs (e.g., Gross Margin %, stock days, % on-time delivery etc) and review weekly."
      ]
    }
  },

  CRITICAL: {
    icon: "🧨",
    title: "At Risk",
    summary:
      "High-value areas are broken or missing. You need a business rescue + clarity sprint ASAP.",
    cta:
      "Want to save your business from sinking further? Book a free consultation today",

    sections: {
      meaningTitle: "What it really means",
      meaning: [
        "Your top-value engine isn’t firing — key systems either don’t exist or are so dysfunctional they’re counterproductive.",
        "The business may be stable today, but without intervention you’re on a slow bleed that can spiral.",
        "Your business may soon crash if you don’t take action."
      ],

      importanceTitle: "Why it matters",
      importance: [
        "This is a “risk zone” where inaction quickly leads to cashflow crises, tax penalties or customer churn.",
        "A swift, targeted rescue is far cheaper (and faster) than a drawn-out turnaround."
      ],

      nextStepsTitle: "Next steps",
      nextSteps: [
        "90-Minute “Red Flag” Workshop: surface the three biggest failures (e.g., no P&L, wild inventory variance, founder daily grind).",
        "Rapid Rescue Plan: a 2-week “firefighting” sprint to patch the worst gaps; get books audit-ready, stop stock hemorrhage, automate the biggest time-sink.",
        "Clarity Roadmap: immediately follow with a 90-day structured plan with clear milestones and impact targets to rebuild the engine."
      ]
    }
  }
};

export const QUESTIONS = [

  // Section 1: Revenue Growth
  {
    section: "SECTION 1: 📈 Revenue Growth",
    questions: [
      { id: "rev1", text: "Do you have a clear sales process from lead to close?" },
      { id: "rev2", text: "Do you review pricing based on profit margins or market shifts?" },
      { id: "rev3", text: "Does your team know your monthly revenue targets?" },
      { id: "rev4", text: "Do you track sales conversion rates regularly?" },
      { id: "rev5", text: "Have you introduced any new revenue stream in the last 6 months?" }
    ]
  },

  // Section 2: Cost Efficiency
  {
    section: "SECTION 2: 💸 Cost Efficiency",
    questions: [
      { id: "cost1", text: "Do you review expenses monthly against a budget?" },
      { id: "cost2", text: "Are stock losses or shrinkage monitored and managed?" },
      { id: "cost3", text: "Do you have procurement approval and controls in place?" },
      { id: "cost4", text: "Are recurring expenses like rent, salaries, utilities optimized?" },
      { id: "cost5", text: "Are there any underperforming products or services you’ve cut?" }
    ]
  },

  // Section 3: Time & Operations
  {
    section: "SECTION 3: 🕐 Time & Operations",
    questions: [
      { id: "ops1", text: "Can your business run for 5 days without the founder?" },
      { id: "ops2", text: "Are daily operations documented or systemized (SOPs)?" },
      { id: "ops3", text: "Do you use any automation tools (e.g., POS, M-Pesa reconciliation, CRMs)?" },
      { id: "ops4", text: "Are staff roles clear, with no duplication?" },
      { id: "ops5", text: "Is performance reviewed regularly (KPIs, check-ins)?" }
    ]
  },

  // Section 4: Financial Visibility & Compliance
  {
    section: "SECTION 4: 📊 Financial Visibility & Compliance",
    questions: [
      { id: "fin1", text: "Do you receive monthly P&L and cash flow reports?" },
      { id: "fin2", text: "Are your books updated and audit-ready at any time?" },
      { id: "fin3", text: "Are your taxes (PAYE, Housing Levy, SHIF, NSSF, NITA) filed on time?" },
      { id: "fin4", text: "Can you access 3-year financial history on demand?" },
      { id: "fin5", text: "Can you use your numbers to make confident business decisions?" }
    ]
  },

  // Section 5: Leadership & Strategy
  {
    section: "SECTION 5: 🧭 Leadership & Strategy",
    questions: [
      { id: "lead1", text: "Do you have a written 1-year business growth plan?" },
      { id: "lead2", text: "Do team members know your key goals or OKRs?" },
      { id: "lead3", text: "Do you hold strategy or review sessions quarterly?" },
      { id: "lead4", text: "Is the culture strong and aligned with your values?" },
      { id: "lead5", text: "Have you actively invested in leadership or team development?" }
    ]
  }

];

export const ALL_QUESTIONS = QUESTIONS.flatMap(section =>
  section.questions.map(q => ({
    ...q,
    section: section.section
  }))
);

export const ANSWER_VALUES = {
  YES: 1,
  AT_TIMES: 0.5,
  NO: 0
};

export const OPTIONS = [
  { label: "Yes", value: 1 },
  { label: "At times", value: 0.5 },
  { label: "No", value: 0 }
];

