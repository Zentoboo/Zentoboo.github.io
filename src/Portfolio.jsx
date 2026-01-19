import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Youtube, ChevronLeft, ChevronRight, Play, Pause, Loader2 } from 'lucide-react';

// Custom hook for interval management
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// ImageGallery Component
function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-scroll with pause on hover
  useInterval(() => {
    if (isAutoPlaying && !isPaused && images.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, isAutoPlaying && !isPaused ? 4000 : null);

  const goToImage = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 200);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToImage(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToImage(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setIsPaused(false);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAutoPlaying]);

  if (images.length === 0) return null;

  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div 
        className="relative bg-gray-100 dark:bg-zinc-900 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-900">
              <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: isLoading ? 0.7 : 1 }}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}


        </div>
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 pb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                currentIndex === index 
                  ? 'bg-gray-900 dark:bg-white w-8' 
                  : 'bg-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play Toggle */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleAutoPlay}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('club');

  const clubExperience = [
    {
      company: 'Persatuan Pelajar Indonesia Malaysia (PPIM)',
      role: 'Central Data & Information Bureau Member',
      period: 'Feb 2025 - Present',
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
      period: 'Oct 2023 - Oct 2025',
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
      period: 'Sept 2022 - Present',
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
      period: 'Jul 2019 - Jul 2022',
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
      images: ['./assets/gadpa-live-use1.jpg', './assets/gadpa-live-img1.png', './assets/gadpa-live-img2.png']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="max-w-4xl px-12 mx-auto py-16">
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
              21yo software engineering student from Indonesia 🇮🇩 <br />
              looking for intern in Malaysia 🇲🇾
            </p>
            <p className="text-gray-700 dark:text-zinc-300 mb-8 leading-relaxed">
              C++ in competition, full-stack by passion. I build and deploy the lot.
              Currently seeking internship opportunities to expand my professional experience.
            </p>

            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/in/christopher-bertrand-092a95309/" target="_blank" className="hover:text-gray-600 dark:hover:text-zinc-400 transition" rel="noopener noreferrer"><Linkedin size={18} /></a>
              <a href="https://github.com/Zentoboo" target="_blank" className="hover:text-gray-600 dark:hover:text-zinc-400 transition" rel="noopener noreferrer"><Github size={18} /></a>
              <a href="mailto:c.bertrandtjo@gmail.com" className="hover:text-gray-600 dark:hover:text-zinc-400 transition" rel="noopener noreferrer"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tabs */}
      <section className="max-w-4xl px-12 mx-auto py-8">
        <div className="border border-gray-200 dark:border-zinc-800 mb-8 bg-white dark:bg-zinc-900">
          <div className="flex justify-around mt-4">
            <button
              onClick={() => setActiveTab('club')}
              className={`pb-4 px-2 text-sm font-medium transition ${activeTab === 'club' ? 'border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'text-gray-500'
                }`}
            >
              Club
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`pb-4 px-2 text-sm font-medium transition ${activeTab === 'education' ? 'border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'text-gray-500'
                }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="space-y-8 border border-gray-200 dark:border-zinc-800 rounded-lg px-8 py-4 bg-white dark:bg-zinc-900">
          {(activeTab === 'club' ? clubExperience : education).map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 bg-white dark:bg-zinc-200 border border-gray-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={item.logo} alt="logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.company || item.school}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400 dark:text-zinc-400">{item.role || item.degree}</div>
                  <div className="text-sm text-gray-400">{item.period}</div>
                </div>
                <p className="text-gray-700 dark:text-zinc-300 mb-2">{item.description || item.gpa}</p>
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
      <section id="projects" className="max-w-4xl px-12 mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8">featured projects</h2>
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
              <ImageGallery images={project.images} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && <a href={project.github} className="text-sm hover:text-blue-500 flex items-center gap-1" rel="noopener noreferrer"><Github size={16} /> Source</a>}
                  {project.youtubelocaldemo && <a href={project.youtubelocaldemo} className="text-sm hover:text-red-500 flex items-center gap-1" rel="noopener noreferrer"><Youtube size={16} /> Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}