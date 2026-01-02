import './App.css'

function App() {
  return (
    <div className="wikipedia-container">
      <div className="wiki-header">
        <div className="wiki-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#competitions">Competitions</a>
          <a href="#organizations">Organizations</a>
        </div>
        <h1 className="wiki-title">Bertrand Christopher</h1>
        <div className="wiki-social-links">
          <a href="https://www.linkedin.com/in/christopher-bertrand-092a95309/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">-</span>
          <a href="https://github.com/Zentoboo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="separator">-</span>
          <a href="https://www.instagram.com/bertrand.zentoboo/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span className="separator">-</span>
          <a href="mailto:c.bertrandtjo@gmail.com">Email</a>
          <span className="separator">-</span>
          <a href="tel:+60176761864">Phone</a>
        </div>
        <div className="wiki-subtitle">Gonna make it more in the future interactive bear with me :D</div>
      </div>

      <div className="wiki-content">
        <div className="wiki-main">
          {/* Infobox */}
          <div className="infobox">
            <div className="infobox-header">Bertrand Christopher</div>
            <div className="infobox-image">
              <img
                src="./assets/profile-picture.jpg"
                alt="Bertrand Christopher"
              />
            </div>
            <div className="infobox-caption">Software Engineering Student</div>
            <div className="infobox-content">
              <div className="infobox-row">
                <div className="infobox-label">Age</div>
                <div className="infobox-data">21 years old</div>
              </div>
              <div className="infobox-row">
                <div className="infobox-label">Nationality</div>
                <div className="infobox-data">Indonesian</div>
              </div>
              <div className="infobox-row">
                <div className="infobox-label">Education</div>
                <div className="infobox-data">
                  <a href="https://www.xmu.edu.my/">Xiamen University Malaysia</a><br />
                  4th Year Student (3.76 CGPA)<br/>
                  <a href="https://xinzhong.sch.id/">Xin Zhong School</a><br />
                  Average Grade 10-12 (knowledge, practical): 93.81, 94.61
                </div>
              </div>
              <div className="infobox-row">
                <div className="infobox-label">Languages</div>
                <div className="infobox-data">
                  English (IELTS 8.0)<br />
                  Indonesian (Native)
                </div>
              </div>
              <div className="infobox-row">
                <div className="infobox-label">Known for</div>
                <div className="infobox-data">
                  Desktop Development<br />
                  Web Development<br />
                  Competitive Programming
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <p>
            <strong>Bertrand Christopher</strong> (born 2004) is an Indonesian software engineering student
            currently pursuing his degree at Xiamen University Malaysia (XMUM). In the XMUM Indonesian community, he is best known for developing <a href="https://github.com/Zentoboo/gadpa-debate">gadpa.live</a> debate web application for GADPA 2025 Congress, winning
            first place in the XMUM CodeCraft 2023 competitive programming competition, and being a strong futsal goalkeeper.
          </p>

          <p>
            Christopher began his programming journey with C++, which led to his victory in the XMUM held competitive
            programming competition (CodeCraft 2023). He has since shifted his focus and diversified his skillset across various domains including
            desktop development, web development, mobile applications, IoT and data mining. He is currently
            seeking internship opportunities to further develop his professional experience.
          </p>

          {/* Experience Section */}
          <div id="experience" className="wiki-section">
            <h2>Experience</h2>
            <h3>Academic Background</h3>
            <p>
              Christopher is currently completing his fourth year at Xiamen University Malaysia with
              a CGPA of 3.76. His academic focus spans software engineering principles, web development,
              mobile applications, and data science.
            </p>

            <h3>Technical Expertise</h3>
            <p>
              His first programming language was C++, learned through competitive programming, which led him to win first place in the
              XMUM CodeCraft 2023 competitive programming competition. Since then, he has expanded
              his knowledge to other fields dabbling in various programming languages and frameworks:
            </p>
            <ul>
              <li><strong>Web Development:</strong> .NET Core, React.js, PHP, with experience deploying to Azure and AWS</li>
              <li><strong>Desktop Development:</strong> Electron with TypeScript and React</li>
              <li><strong>Mobile Development:</strong> Android development with Kotlin</li>
              <li><strong>Data Science:</strong> Python, PySpark, machine learning applications</li>
              <li><strong>Cloud Infrastructure:</strong> Azure (SQL Database, App Services) and AWS (EC2, S3, RDS)</li>
              <li><strong>Internet of Things:</strong> Arduino, ESP32, and C++</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div id="projects" className="wiki-section">
            <h2>Notable Projects</h2>
            <p>
              Christopher has developed various projects across different domains, demonstrating proficiency
              in multiple programming languages and frameworks. The following table lists his most presentable
              projects available on GitHub:
            </p>

            <table className="wiki-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Technologies</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/Zentoboo.github.io">personal website</a>
                  </td>
                  <td>Web Development</td>
                  <td>Vite, React</td>
                  <td>Wikipedia styled personal portfolio website</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/dck">dck</a>
                  </td>
                  <td>Desktop Development, FYP</td>
                  <td>Electron, Vite, TypeScript, React</td>
                  <td>AI-enhanced desktop flashcard application for spaced repetition learning</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/gadpa-debate">gadpa-debate</a> <sup>[deprecated]</sup>
                  </td>
                  <td>Web Development</td>
                  <td>.NET, Vite, React.js, MSSQL, Azure, Grok AI API</td>
                  <td>Debate management platform with real-time features (formerly deployed at gadpa.live)</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/Syncro">Syncro</a>
                  </td>
                  <td>Web Development (Group)</td>
                  <td>.NET, React.js, Azure SQL Database</td>
                  <td>Course project demonstrating full-stack development capabilities</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/SWE309-BriteShop">BriteShop</a>
                  </td>
                  <td>Web Development</td>
                  <td>PHP, MySQL, AWS (EC2, S3, RDS), Linux Ubuntu</td>
                  <td>E-commerce platform deployed on AWS infrastructure</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/MainlandUS-MaizeLandSuitability">Mainland US Maize Land Suitability</a>
                  </td>
                  <td>Data Mining (Group)</td>
                  <td>Python, PySpark, PRISM Climate Data</td>
                  <td>Agricultural land suitability analysis using machine learning</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/SWE401-HomeTutorMobileApp">HomeTutor Mobile App</a>
                  </td>
                  <td>Mobile Development</td>
                  <td>Kotlin, Android Studio</td>
                  <td>Android application for tutoring services</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/Zentoboo/BetterDino">BetterDino</a>
                  </td>
                  <td>Game Development (Group)</td>
                  <td>Python, PyGame</td>
                  <td>Enhanced version of the classic dinosaur game</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Competitions Section */}
          <div id="competitions" className="wiki-section">
            <h2>Competitions & Awards</h2>
            <h3>XMUM CodeCraft 2023</h3>
            <p>
              Christopher won <strong>first place</strong> in the XMUM CodeCraft 2023 competitive programming
              competition with his group of friends, demonstrating strong algorithmic problem-solving skills using C++.
            </p>
            <h3>Dean's List 2025/04</h3>
            <p>
              Christopher received recognition on the Dean's List for his outstanding academic performance in the 2025/04 semester.
            </p>
          </div>

          {/* Organizations */}
          <div id="organizations" className="wiki-section">
            <h2>Organizational Experience</h2>
            <h3>Central Data & Information Bureau Member of Persatuan Pelajar Indonesia Malaysia (PPIM)</h3>
            <p>
              Christopher designed and implemented a MySQL database schema with integrated PHP backend and frontend for
              PPIM-Portal (an admin portal for PPIM members), supporting structured documentation and management of Indonesian students in Malaysia.
            </p>
            <h3>Garuda Dwi Pantara (GADPA) - Indonesian Student Association of XMUM</h3>
            <p>
              Christopher held multiple leadership positions in GADPA.
            </p>
            <p>
              in 2023-2024, he became the head of Event Planning (2023-2024), where he led a team to organize various 100+ participant events such as Chrisanta, GADPA Election 24/25, Makrab, and more.
            </p>
            <p>
              in 2024-2025, he held two positions. First as a Supervisory Board Member for Event Planning, acting as a mentor for the new event planning team, providing guidance regarding how to properly plan events and how to ensure better member engagement and doing their allocated tasks.
              Second as Head of Secretary, where he managed documentation, communication within and outside the organization, and sometimes utilise his software engineering skills such as auto mail, data analysis, and even building a debate website for GADPA 2025 Congress.
            </p>
          </div>

          {/* Future Plans Section */}
          <div className="wiki-section">
            <h2>Future Plans in IT</h2>
            <p>
              After his very last examination period, Christopher plans to focus on web development, particularly
              with .NET and React, while continue exploring cloud infrastructure services including Azure and AWS.
              He is considering expanding his backend knowledge to include Node.js and exploring NoSQL databases
              such as Redis.
            </p>
            <p>
              He aims to gain practical experience with system design and distributed systems in future projects.
              Christopher is actively seeking internship opportunities and is willing to adapt his focus based on
              industry requirements, with additional interest in IoT development.
            </p>
            <p>
              However, he remains open to explore other areas of software development as this initial internship may shape his future career path.
            </p>
          </div>

          {/* Footer */}
          <div className="wiki-section" style={{ marginTop: '3em', paddingTop: '1em', borderTop: '1px solid #a2a9b1' }}>
            <p style={{ fontSize: '0.85em', color: '#54595d' }}>
              Heavily inspired by <a href="https://wikipedia.org">Wikipedia</a>'s visual styling and adopts its third-person narrative.
            </p>
            <p style={{ fontSize: '0.85em', color: '#54595d' }}>
              This page was last edited on 2 January 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App