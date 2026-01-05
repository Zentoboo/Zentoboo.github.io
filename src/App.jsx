import { useState } from 'react'
import './App.css'

function App() {
  // State to manage column visibility
  const [columnVisibility, setColumnVisibility] = useState({
    category: true,
    technologies: true,
    description: true,
    actions: true
  });

  // Toggle column visibility
  const toggleColumn = (columnName) => {
    setColumnVisibility(prev => ({
      ...prev,
      [columnName]: !prev[columnName]
    }));
  };

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
          <a href="mailto:c.bertrandtjo@gmail.com">c.bertrandtjo@gmail.com</a>
        </div>
        <div className="wiki-subtitle">Gonna make pages to better explain specific projects :D<br/>
        Gonna add more "evidence" in the form of images, videos, etc.</div>
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

            {/* Column Visibility Controls */}
            <div className="column-controls">
              <span className="column-controls-label">Show columns:</span>
              <label className="column-checkbox">
                <input
                  type="checkbox"
                  checked={columnVisibility.category}
                  onChange={() => toggleColumn('category')}
                />
                Category
              </label>
              <label className="column-checkbox">
                <input
                  type="checkbox"
                  checked={columnVisibility.technologies}
                  onChange={() => toggleColumn('technologies')}
                />
                Technologies
              </label>
              <label className="column-checkbox">
                <input
                  type="checkbox"
                  checked={columnVisibility.description}
                  onChange={() => toggleColumn('description')}
                />
                Description
              </label>
              <label className="column-checkbox">
                <input
                  type="checkbox"
                  checked={columnVisibility.actions}
                  onChange={() => toggleColumn('actions')}
                />
                Actions
              </label>
            </div>

            <table className="wiki-table">
              <thead>
                <tr>
                  <th>Title</th>
                  {columnVisibility.category && <th>Category</th>}
                  {columnVisibility.technologies && <th>Technologies</th>}
                  {columnVisibility.description && <th>Description</th>}
                  {columnVisibility.actions && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>personal website</td>
                  {columnVisibility.category && <td>Web Development</td>}
                  {columnVisibility.technologies && <td>Vite, React</td>}
                  {columnVisibility.description && <td>Wikipedia styled personal portfolio website</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/Zentoboo.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>dck</td>
                  {columnVisibility.category && <td>Desktop Development, FYP</td>}
                  {columnVisibility.technologies && <td>Electron, Vite, TypeScript, React, Grok AI API</td>}
                  {columnVisibility.description && <td>AI-enhanced desktop flashcard application for spaced repetition learning</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/dck" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>gadpa-debate <sup>[deprecated]</sup></td>
                  {columnVisibility.category && <td>Web Development</td>}
                  {columnVisibility.technologies && <td>.NET, Vite, React.js, MSSQL, Azure</td>}
                  {columnVisibility.description && <td>Debate management platform with real-time features (formerly deployed at gadpa.live)</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/gadpa-debate" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <br/>
                      <a href="https://youtu.be/L7we37LRnig" target="_blank" rel="noopener noreferrer">DemoVid</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>Syncro</td>
                  {columnVisibility.category && <td>Web Development (Group)</td>}
                  {columnVisibility.technologies && <td>.NET, React.js, Azure SQL Database</td>}
                  {columnVisibility.description && <td>Course project demonstrating full-stack development capabilities</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/Syncro" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>BriteShop</td>
                  {columnVisibility.category && <td>Web Development</td>}
                  {columnVisibility.technologies && <td>PHP, MySQL, AWS (EC2, S3, RDS), Linux Ubuntu</td>}
                  {columnVisibility.description && <td>E-commerce platform deployed on AWS infrastructure</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/SWE309-BriteShop" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>Mainland US Maize Land Suitability</td>
                  {columnVisibility.category && <td>Data Mining (Group)</td>}
                  {columnVisibility.technologies && <td>Python, PySpark, PRISM Climate Data</td>}
                  {columnVisibility.description && <td>Agricultural land suitability analysis using machine learning</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/MainlandUS-MaizeLandSuitability" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>HomeTutor Mobile App</td>
                  {columnVisibility.category && <td>Mobile Development</td>}
                  {columnVisibility.technologies && <td>Kotlin, Android Studio</td>}
                  {columnVisibility.description && <td>Android application for tutoring services</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/SWE401-HomeTutorMobileApp" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td>BetterDino</td>
                  {columnVisibility.category && <td>Game Development (Group)</td>}
                  {columnVisibility.technologies && <td>Python, PyGame</td>}
                  {columnVisibility.description && <td>Enhanced version of the classic dinosaur game</td>}
                  {columnVisibility.actions && (
                    <td>
                      <a href="https://github.com/Zentoboo/BetterDino" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>

            {/* Project Screenshots
            <div className="project-gallery">
              <h3>personal website</h3>
              <div className="project-images">
                <div className="project-image-slot">
                  <img src="./assets/projects/personal-website-1.png" alt="Personal Website Screenshot 1" />
                </div>
                <div className="project-image-slot">
                  <img src="./assets/projects/personal-website-2.png" alt="Personal Website Screenshot 2" />
                </div>
                <div className="project-image-slot">
                  <img src="./assets/projects/personal-website-3.png" alt="Personal Website Screenshot 3" />
                </div>
                <div className="project-image-slot">
                  <img src="./assets/projects/personal-website-4.png" alt="Personal Website Screenshot 4" />
                </div>
              </div>
            </div> */}
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
            
            {/* Awards Gallery - Side by Side */}
            <div className="awards-gallery">
              <div className="award-image-container">
                <img 
                  src="./assets/codecraft-2023.png" 
                  alt="XMUM CodeCraft 2023 Certificate"
                />
                <div className="award-image-caption">
                  XMUM CodeCraft 2023 First Place Certificate
                </div>
              </div>
              <div className="award-image-container">
                <img 
                  src="./assets/deans-list-2025.jpeg" 
                  alt="Dean's List 2025/04 Certificate"
                />
                <div className="award-image-caption">
                  Dean's List Recognition 2025/04
                </div>
              </div>
            </div>
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
              This page was last edited on 5 January 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App