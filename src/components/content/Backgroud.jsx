import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Background() {
  const [openImg1, setOpenImg1] = useState(false);
  const [openImg2, setOpenImg2] = useState(false);
  const [openImg3, setOpenImg3] = useState(false);
  const [openImg4, setOpenImg4] = useState(false);

  return (
    <div className="container">
      <h1 className="section-title">Background</h1>

      {/* Education */}
      <div className="section">
        <h2 className="sub-title">Education</h2>
        <p>
          <strong>Xiamen University Malaysia</strong> — Sept 2022 - Sept 2026
        </p>
        <p>Bachelor of Engineering in Software Engineering (Honours)</p>
      </div>

      {/* Collapsible row 1 */}
      <div className="collapsible-row">
        <button
          className="collapsible-toggle"
          onClick={() => setOpenImg1(!openImg1)}
        >
          Certificate
          {openImg1 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openImg1 && (
          <div className="collapsible-content">
            <p className="note">
              (I haven't finished my degree yet :3)
            </p>
            <img
              src="-"
              alt="xmum-cert"
              className="cv-image"
            />
          </div>
        )}
      </div>

      {/* Collapsible row 2 */}
      <div className="collapsible-row">
        <button
          className="collapsible-toggle"
          onClick={() => setOpenImg2(!openImg2)}
        >
          April 2025 Recognition of Academic Excellence Certificate
          {openImg2 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openImg2 && (
          <div className="collapsible-content">
            <p className="note">
              (Coming very soon :3)
            </p>
            <img
              src="-"
              alt="april2025-xmum-cert"
              className="cv-image"
            />
          </div>
        )}
      </div>

      {/* Achievements */}
      <div className="section">
        <h2 className="sub-title">Achievements</h2>
        <p>CodeCraft — 10 June 2023 (1st place winner)</p>

        {/* Collapsible row 1 */}
        <div className="collapsible-row">
          <button
            className="collapsible-toggle"
            onClick={() => setOpenImg3(!openImg3)}
          >
            Winner Group Photo
            {openImg3 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openImg3 && (
            <div className="collapsible-content">
              <div className="section-left">
                <p>Basically XMUM SCDSC held a competitive programming competition for XMUM student. This was the best timing it could've been for me, as in my 1st year I was still actively doing competitive programming problems for my self-learning. Competitive programming with C++ was my first intro to programming in general and it felt natural for me... Didn't expect to win at first cuz I don't know how good the other competitors were but won it either way and I kindof carried. We answered 3 out of the 6 questions and I answered 2 of them fully on my own while I helped with solving the 3rd problem and getting the output answer correct.</p>
              </div>
              <p className="note">
                (I'm the 2nd left guy with the Adidas sports shirt)
              </p>
              <img
                src="/assets/codecraft-image.png"
                alt="codecraft-winner-image"
                className="cv-image"
              />
            </div>
          )}
        </div>

        {/* Collapsible row 2 */}
        <div className="collapsible-row">
          <button
            className="collapsible-toggle"
            onClick={() => setOpenImg4(!openImg4)}
          >
            Certificate
            {openImg4 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openImg4 && (
            <div className="collapsible-content">
              <img
                src="/assets/codecraft-winner.jpg"
                alt="codecraft-winner-cert"
                className="cv-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Background;
