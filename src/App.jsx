import React, { useState } from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('club');

  const clubExperience = [
    {
      company: 'Persatuan Pelajar Indonesia Malaysia (PPIM)',
      role: 'Central Data & Information Bureau Member',
      period: '2025 - 2026',
      link: 'https://www.instagram.com/ppimalaysia/',
      logo: './assets/ppim.png',
      description: 'Managed data systems for the national union of Indonesian students in Malaysia.',
      achievements: [
        'Designed and implemented a MySQL database schema with PHP backend for PPIM-Portal.',
        'Supported structured documentation and management for the Indonesian student community across Malaysia.'
      ]
    },
    {
      company: 'Garuda Dwi Pantara (GADPA)',
      role: 'Head of Secretary / Supervisory Board / Head of Event Planning',
      period: '2023 - 2025',
      link: 'https://www.instagram.com/gadpa.xmum/',
      logo: './assets/gadpa.png',
      description: 'Led organizational strategy and technical implementation for the XMUM Indonesian Student Association.',
      achievements: [
        '2024-2025 (Head of Secretary): Built gadpa.live debate platform and automated internal documentation systems.',
        '2024-2025 (Supervisory Board): Mentored the event planning team on member engagement and strategic execution.',
        '2023-2024 (Head of Event Planning): Led a team to organize 100+ participant events like Chrisanta and GADPA Election.'
      ]
    }
  ];

  const education = [
    {
      school: 'Xiamen University Malaysia',
      degree: 'Software Engineering',
      period: '2022 - 2026',
      link: 'https://www.xmu.edu.my/',
      logo: './assets/Xiamen_University_logo.svg',
      gpa: '3.76 CGPA',
      achievements: [
        'Dean\'s List 2025/04',
        'First Place - XMUM CodeCraft 2023'
      ]
    },
    {
      school: 'Xin Zhong School',
      degree: 'High School',
      period: '2019 - 2022',
      link: 'https://xinzhong.sch.id/',
      logo: './assets/xinzhongschool.png',
      gpa: 'Average Grade: 93.81 (Knowledge), 94.61 (Practical)',
      achievements: [
        'Silver medal Southeast Asian Mathematical Olympiad 2020',
        '2nd place Canadian Team Mathematics Contest 2021',
        'IELTS 8.0']
    }
  ];

  const projects = [
    {
      title: 'dck - AI Flashcard App',
      description: 'AI-enhanced desktop flashcard application for spaced repetition learning',
      tech: ['Electron', 'TypeScript', 'React', 'Grok AI API'],
      github: 'https://github.com/Zentoboo/dck',
      youtubelocaldemo: 'https://youtu.be/8vpD2yrPBEQ',
      images: ['./assets/dck-img1.png', './assets/dck-img2.png']
    },
    {
      title: 'gadpa.live',
      description: 'Debate management platform with real-time features for GADPA 2025 Congress',
      tech: ['.NET', 'React.js', 'MSSQL', 'Azure'],
      github: 'https://github.com/Zentoboo/gadpa-debate',
      youtubelocaldemo: 'https://youtu.be/L7we37LRnig',
      images: ['./assets/gadpa-live-use1.jpg','./assets/gadpa-live-img1.png', './assets/gadpa-live-img2.png',]
    },
    // {
    //   title: 'BriteShop',
    //   description: 'E-commerce platform deployed on AWS infrastructure',
    //   tech: ['PHP', 'MySQL', 'AWS EC2', 'S3', 'RDS'],
    //   github: 'https://github.com/Zentoboo/SWE309-BriteShop',
    //   images: ['https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop']
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Bertrand Christopher</div>
            <div className="text-m font-bold text-gray-400">under construction... gonna continue after exam T.T</div>
            <div className="flex gap-6 text-sm">
              <a href="#home" className="hover:text-gray-600 transition">home</a>
              <a href="#projects" className="hover:text-gray-600 transition">projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Photo */}
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src="./assets/profile-picture.jpg"
              alt="Bertrand Christopher"
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Hero Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">hi bertrand here. 👋</h1>
            <p className="text-xl text-gray-600 mb-6">
              21yo software engineering student from Indonesia 🇮🇩
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              C++ by competition, full-stack by passion. I build and deploy the lot.
              Currently seeking internship opportunities to expand my professional experience.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="https://linkedin.com/in/christopher-bertrand-092a95309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Zentoboo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:c.bertrandtjo@gmail.com"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Club/Education Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('club')}
              className={`pb-4 px-2 text-sm font-medium transition ${
                activeTab === 'club'
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Club
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`pb-4 px-2 text-sm font-medium transition ${
                activeTab === 'education'
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {activeTab === 'club' && (
          <div className="space-y-8">
            {clubExperience.map((exp, idx) => (
              <div key={idx} className="flex gap-6">
                <a 
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 hover:border-gray-400 transition"
                >
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain p-1"
                  />
                </a>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <div className="text-sm text-gray-600 mb-2">{exp.role}</div>
                  <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                  <p className="text-gray-700 mb-3">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-gray-400">+</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="flex gap-6">
                <a 
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 hover:border-gray-400 transition"
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain p-1"
                  />
                </a>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.school}</h3>
                  <div className="text-sm text-gray-600 mb-2">{edu.degree}</div>
                  <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                  <div className="text-sm font-medium text-gray-700 mb-3">{edu.gpa}</div>
                  {edu.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          + {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">featured projects</h2>
        </div>
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              
              {/* Image Carousel Container */}
              <div className="relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-auto bg-gray-100">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto object-cover flex-shrink-0 snap-center"
                    />
                  ))}
                </div>
                
                {/* Visual Indicator for multiple images */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                    Scroll to view {project.images.length} images →
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                  {project.youtubelocaldemo && (
                    <a
                      href={project.youtubelocaldemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      <Youtube size={16} /> Local Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/christopher-bertrand-092a95309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Zentoboo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:c.bertrandtjo@gmail.com"
                className="inline-flex items-center gap-2 text-sm hover:text-gray-600 transition"
              >
                <Mail size={18} />
              </a>
            </div>
            <div>2026 Bertrand Christopher</div>
          </div>
        </div>
      </footer>
    </div>
  );
}