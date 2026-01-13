import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Youtube, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('club');
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark'; 
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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
        "Dean's List 2025/04",
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
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-xxs z-50 dark:bg-zinc-950/90 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Bertrand Christopher</div>
            
            <div className="flex items-center gap-6">
              <div className="text-xs font-bold text-gray-400 hidden lg:block">
                under construction... gonna continue after exam T.T
              </div>
              <div className="flex gap-4 md:gap-6 text-sm">
                <a href="#home" className="hover:text-gray-600 dark:hover:text-zinc-400 transition">home</a>
                <a href="#projects" className="hover:text-gray-600 dark:hover:text-zinc-400 transition">projects</a>
                
                {/* TOGGLE BUTTON */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              src="./assets/profile-picture.jpg"
              alt="Bertrand Christopher"
              className="w-full aspect-square object-cover rounded-lg shadow-lg border-2 border-transparent dark:border-zinc-800"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">hi bertrand here. 👋</h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 mb-6 font-medium">
              21yo software engineering student from Indonesia 🇮🇩
            </p>
            <p className="text-gray-700 dark:text-zinc-300 mb-8 leading-relaxed">
              C++ by competition, full-stack by passion. I build and deploy the lot.
              Currently seeking internship opportunities to expand my professional experience.
            </p>

            <div className="flex gap-4 mb-8">
              <a href="https://linkedin.com/..." target="_blank" className="hover:text-gray-600 dark:hover:text-zinc-400 transition"><Linkedin size={18} /></a>
              <a href="https://github.com/..." target="_blank" className="hover:text-gray-600 dark:hover:text-zinc-400 transition"><Github size={18} /></a>
              <a href="mailto:..." className="hover:text-gray-600 dark:hover:text-zinc-400 transition"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tabs */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border-b border-gray-200 dark:border-zinc-800 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('club')}
              className={`pb-4 px-2 text-sm font-medium transition ${
                activeTab === 'club' ? 'border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              Club
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`pb-4 px-2 text-sm font-medium transition ${
                activeTab === 'education' ? 'border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'text-gray-500'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {(activeTab === 'club' ? clubExperience : education).map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="w-12 h-12 bg-white dark:bg-zinc-200 border border-gray-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={item.logo} alt="logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.company || item.school}</h3>
                <div className="text-sm text-gray-600 dark:text-zinc-400 mb-1">{item.role || item.degree}</div>
                <div className="text-sm text-gray-400 mb-3">{item.period}</div>
                <p className="text-gray-700 dark:text-zinc-300 mb-3">{item.description || item.gpa}</p>
                <ul className="space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-zinc-400 flex gap-2">
                      <span className="text-gray-400">+</span> {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">featured projects</h2>
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
              <div className="flex overflow-x-auto snap-x scrollbar-hide bg-gray-100 dark:bg-zinc-900">
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt="project" className="w-full h-auto flex-shrink-0 snap-center" />
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && <a href={project.github} className="text-sm hover:text-blue-500 flex items-center gap-1"><Github size={16}/> Source</a>}
                  {project.youtubelocaldemo && <a href={project.youtubelocaldemo} className="text-sm hover:text-red-500 flex items-center gap-1"><Youtube size={16}/> Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-800 mt-16 py-8">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-500 flex justify-between">
          <div>2026 Bertrand Christopher</div>
        </div>
      </footer>
    </div>
  );
}