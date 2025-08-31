import React, { useState } from "react";
import CollapsibleGroup from "../extra/CollapsibleGroup";

function Background() {
  const [view, setView] = useState("chronologically");

  // Collapsible items for Education
  const educationItems = [
    {
      title: "Certificate",
      text: "(I haven't finished my degree yet :3)",
      image: "-" // replace with real certificate path
    },
    {
      title: "April 2025 Recognition of Academic Excellence Certificate",
      text: "(Coming very soon :3)",
      image: "-" // replace with real certificate path
    }
  ];

  // Collapsible items for Achievements
  const achievementItems = [
    {
      title: "Winner Group Photo",
      text: `Basically XMUM SCDSC held a competitive programming competition for XMUM students. 
This was the best timing it could've been for me, as in my 1st year I was still actively doing competitive programming problems for self-learning. 
Competitive programming with C++ was my first intro to programming in general and it felt natural for me. 
Didn't expect to win at first cuz I didn't know how good the other competitors were but I won anyway and I kind of carried. 
We answered 3 out of the 6 questions: I solved 2 fully on my own, and contributed to the 3rd.`,
      note: "(I'm the 2nd left guy with the Adidas sports shirt)",
      image: "/assets/codecraft-image.png"
    },
    {
      title: "Certificate",
      image: "/assets/codecraft-winner.jpg"
    }
  ];

  return (
    <div className="container">
      {/* Title + View Toggle */}
      <div className="section-title">
        <h1>Background</h1>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${view === "chronologically" ? "active" : ""}`}
            onClick={() => setView("chronologically")}
          >
            Chronologically
          </button>
          /
          <button
            className={`toggle-btn ${view === "categorically" ? "active" : ""}`}
            onClick={() => setView("categorically")}
          >
            Categorically
          </button>
        </div>
      </div>

      {/* Education */}
      <div className="section">
        <h2 className="sub-title">Education</h2>
        <p>
          <strong>Xiamen University Malaysia</strong> — Sept 2022 - Sept 2026
        </p>
        <p>Bachelor of Engineering in Software Engineering (Honours)</p>

        {/* CollapsibleGroup instead of manual rows */}
        <CollapsibleGroup items={educationItems} />
      </div>

      {/* Achievements */}
      <div className="section">
        <h2 className="sub-title">Achievements</h2>
        <p>CodeCraft — 10 June 2023 (1st place winner)</p>

        {/* CollapsibleGroup instead of manual rows */}
        <CollapsibleGroup items={achievementItems} />
      </div>
    </div>
  );
}

export default Background;
