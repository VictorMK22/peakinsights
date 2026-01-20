import { useState } from "react";
import LeaderCard from "../components/ui/LeaderCard";

import nixon from "../assets/leadership/nixon.jpg";
import lewis from "../assets/leadership/lewis.jpg";
import placeholder from "../assets/leadership/placeholder.jpeg";

export default function Leadership() {
  const [openLeader, setOpenLeader] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6">
          Our Leadership Team
        </h1>
        <p className="text-slate">
          PeakInsights is led by advisors who combine deep technical
          expertise with real-world execution experience.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Nixon */}
        <LeaderCard
          id="nixon"
          isOpen={openLeader === "nixon"}
          onToggle={() =>
            setOpenLeader(openLeader === "nixon" ? null : "nixon")
          }
          name="Nixon Yebei"
          role="Founder & CEO"
          image={nixon || placeholder}
          shortBio="Transformation consultant and founder of PeakInsights Advisory, working with businesses, boards and institutions to fix what truly limits growth."
          fullBio={[
            "Nixon Yebei is a transformation consultant and founder/CEO of PeakInsights Advisory, where he works with businesses, boards and institutions to fix what truly limits growth; strategy, structure, governance and financial clarity.",

            "Nixon provides overall strategic leadership at PeakInsights, guiding the firm’s vision, growth and execution. He is a finance and management professional with deep expertise in strategy consulting, financial leadership and institutional strengthening and over 14 years of experience advising and working with local and global organizations.",

            "Nixon is known for cutting through noise, challenging complacency and driving practical, results-focused transformation. His work focuses on turning organizations from surviving to scaling and from busy to profitable. His edge is brutal clarity, structured thinking and execution that actually moves the needle.",

            "Nixon holds a Master’s degree in Business from Strathmore University, a Bachelor’s degree in Business from Moi University and an Advanced Professional Certificate in Innovation and Entrepreneurship from Stanford University."
          ]}
        />

        {/* Lewis */}
        <LeaderCard
          id="lewis"
          isOpen={openLeader === "lewis"}
          onToggle={() =>
            setOpenLeader(openLeader === "lewis" ? null : "lewis")
          }
          name="Lewis Githaiga"
          role="Growth & Transformation Consultant"
          image={lewis || placeholder}
          shortBio="Consultant working with growth-oriented enterprises to remove the real constraints to scale."
          fullBio={[
            "Lewis Githaiga is a Growth & Transformation Consultant at PeakInsights, working with growth-oriented enterprises to remove the real constraints to scale; unclear finances, weak execution discipline and fragile operating structures.",

            "At PeakInsights, Lewis supports high-impact financial and management consulting engagements helping businesses move from reactive decision-making to disciplined execution.",

            "With over seven years of experience working with and advising both local and global organizations, he has built a strong reputation for delivering practical, results-driven solutions that improve performance, strengthen financial systems and enable sustainable growth for organizations.",

            "Lewis holds a Bachelor’s degree in Economics & Finance from Kenyatta University, with CPA qualifications. He is driven by a deep commitment to continuous learning, professional excellence and applying global best practices to build stronger enterprises."
          ]}
        />
      </div>
    </main>
  );
}
