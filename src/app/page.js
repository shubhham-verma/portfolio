"use client"

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('experience');
  const [mobileExpExpanded, setMobileExpExpanded] = useState(false);
  const [mobileProjExpanded, setMobileProjExpanded] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      name: "Tether Read AI",
      tech: "Next.js, React, Firebase, Cloudflare R2, MongoDB",
      link: "https://tether-read.vercel.app/",
      description: [
        "Built a cross-platform EPUB reader with Next.js and epub.js, supporting seamless book rendering and navigation",
        "Reduced initial load time by 40% through caching strategies and pre-signed URL optimization",
        "Designed a backend service with MongoDB integration to persist reading progress across devices",
        "Built an AI recommendation system powered by Mistral Small 3.2, seamlessly integrated into the user's digital bookshelf"
      ]
    },
    {
      name: "Color Commits",
      tech: "Next.js, React, TailwindCSS, GitHub REST API",
      link: "https://color-commits.netlify.app/",
      description: [
        "Built a GitHub repository visualizer in Next.js that fetches and displays directory structures with real-time file metadata",
        "Implemented a color-coded age analysis system to classify files by last commit date, improving repo scan clarity by 60%",
        "Added tooltip-based relative time indicators with dynamic hydration-safe logic",
        "Introduced client-side caching layers using useRef, reducing redundant API calls by over 70%"
      ]
    },
    {
      name: "News Room 24/7",
      tech: "React, NewsAPI",
      link: "https://newsroom-24-7.netlify.app/",
      description: [
        "Built a news aggregator app using React and NewsAPI to display real-time news from 30+ sources",
        "Reduced data load time by 20% via lazy loading and optimized API fetching",
        "Modularized components for reusability, reducing code duplication by 25%"
      ]
    }
  ];

  const experience = [
    {
      company: "Rupyy (Cardekho)",
      role: "Quality Analyst",
      period: "July 2024 - July 2025",
      location: "Remote",
      points: [
        "Oversaw quality for loan management systems, increasing code coverage by 35% through detailed analysis of backend logic, control flow, and conditional branches",
        "Contributed to debugging efforts using RockMongo and Chrome DevTools, reducing defect resolution time by 25%"
      ]
    },
    {
      company: "Cogmac Technologies",
      role: "Full Stack Developer",
      period: "June 2023 - August 2023",
      location: "In-Office",
      points: [
        "Leveraged React and other cutting-edge technologies to design and build an efficient software to scan RFID cards",
        "Engineered a user-friendly web portal that enabled a 50% boost in user registrations",
        "Achieved a 20% reduction in registration time by optimizing portal performance",
        "Achieved the milestone of allowing user to register 1 new card in under 1 second"
      ]
    },
    {
      company: "Cogmac Technologies",
      role: "Android Developer",
      period: "June 2023 - August 2023",
      location: "In-Office",
      points: [
        "Developed a lightweight RFID card scanning app using React Native, optimized for performance on low-end devices",
        "Implemented real-time database interactions to register new RFID cards in under 1 second",
        "Optimized app build and asset sizes, resulting in a compact and efficient deployment under 10MB",
        "Collaborated with backend team to ensure seamless API integration and accurate data syncing with MongoDB"
      ]
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 2000px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm border-b z-50`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Shubham Verma</h1>
          
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>About</button>
              <button onClick={() => scrollToSection('work')} className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>Work</button>
              <button onClick={() => scrollToSection('contact')} className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
            <div className="flex flex-col gap-4 px-6 py-4">
              <button onClick={() => scrollToSection('about')} className={`text-left ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>About</button>
              <button onClick={() => scrollToSection('work')} className={`text-left ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Work</button>
              <button onClick={() => scrollToSection('contact')} className={`text-left ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm Shubham
          </h2>
          <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
            Software Engineer with a proven track record in full-stack development and comprehensive testing. 
            I build high-quality, scalable software that makes a difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/shubhham-verma" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center gap-2 px-4 py-2 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} rounded-lg transition-colors`}>
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/shubham-verma-376414220" target="_blank" rel="noopener noreferrer"
               className={`flex items-center gap-2 px-4 py-2 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} rounded-lg transition-colors`}>
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:verma.shubham1607@gmail.com"
               className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors`}>
              <Mail size={20} />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="prose prose-lg max-w-none">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
              I'm a software engineer passionate about creating efficient, user-centered applications. 
              My experience spans full-stack development with the MERN stack, quality assurance, and mobile development.
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I graduated from Maharaja Agrasen Institute of Technology with a B.Tech in Computer Science in 2024. 
              Since then, I've worked on projects ranging from EPUB readers with AI recommendations to GitHub repository 
              visualizers, always focusing on performance and user experience.
            </p>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4">Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium mb-2">Languages</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>C++, Java, JavaScript, SQL, HTML/CSS</p>
              </div>
              <div>
                <p className="font-medium mb-2">Frameworks & Libraries</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>React.js, Node.js, Express, Next.js, React Native, Tailwind CSS</p>
              </div>
              <div>
                <p className="font-medium mb-2">Tools & Platforms</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Git, GitHub, Cloudflare R2, Firebase, MySQL, MongoDB, Postman</p>
              </div>
              <div>
                <p className="font-medium mb-2">Development & Testing</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Full-Stack Development, REST APIs, Android, Manual & API Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Desktop: Tabs, Mobile: Dropdowns */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Work</h3>
          
          {/* Desktop View - Tabs */}
          <div className="hidden md:block">
            <div className="flex gap-4 mb-8 border-b border-gray-700">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'experience'
                    ? `${darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600'}`
                    : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'projects'
                    ? `${darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600'}`
                    : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                Projects
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'experience' && (
              <div className="space-y-12">
                {experience.map((job, idx) => (
                  <div 
                    key={idx} 
                    className={`relative pl-8 border-l-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} opacity-0 translate-x-[-20px]`}
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${idx * 0.15}s forwards`
                    }}
                  >
                    <div className={`absolute w-4 h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full -left-[9px] top-0`}></div>
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold">{job.role}</h4>
                      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{job.company} • {job.location}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{job.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid gap-8">
                {projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} p-8 rounded-lg border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg opacity-0 translate-y-[20px]`}
                    style={{
                      animation: `slideInUp 0.6s ease-out ${idx * 0.15}s forwards`
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">{project.name}</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{project.tech}</p>
                      </div>
                      <a href={project.link} className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-transform hover:scale-110`}>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <ul className="space-y-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>• {desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile View - Dropdowns */}
          <div className="md:hidden space-y-6">
            {/* Experience Dropdown */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-lg`}>
              <button
                onClick={() => setMobileExpExpanded(!mobileExpExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-lg"
              >
                <span>Experience</span>
                {mobileExpExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {mobileExpExpanded && (
                <div className="px-6 pb-6 space-y-8 animate-slideDown">
                  {experience.map((job, idx) => (
                    <div 
                      key={idx} 
                      className={`relative pl-8 border-l-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'} opacity-0`}
                      style={{
                        animation: `fadeInScale 0.5s ease-out ${idx * 0.1}s forwards`
                      }}
                    >
                      <div className={`absolute w-4 h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full -left-[9px] top-0`}></div>
                      <div className="mb-2">
                        <h4 className="text-lg font-semibold">{job.role}</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.company} • {job.location}</p>
                        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{job.period}</p>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {job.points.map((point, i) => (
                          <li key={i} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-lg`}>
              <button
                onClick={() => setMobileProjExpanded(!mobileProjExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-lg"
              >
                <span>Projects</span>
                {mobileProjExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {mobileProjExpanded && (
                <div className="px-6 pb-6 space-y-6 animate-slideDown">
                  {projects.map((project, idx) => (
                    <div 
                      key={idx} 
                      className={`${darkMode ? 'bg-gray-900 border-gray-600' : 'bg-white border-gray-300'} p-6 rounded-lg border opacity-0`}
                      style={{
                        animation: `fadeInScale 0.5s ease-out ${idx * 0.1}s forwards`
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{project.name}</h4>
                          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{project.tech}</p>
                        </div>
                        <a href={project.link} className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-transform hover:scale-110`}>
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      <ul className="space-y-2">
                        {project.description.map((desc, i) => (
                          <li key={i} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:verma.shubham1607@gmail.com"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={20} />
              verma.shubham1607@gmail.com
            </a>
            <a href="tel:+919873720431"
               className={`flex items-center gap-2 px-6 py-3 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} rounded-lg transition-colors`}>
              <Phone size={20} />
              +91 9873720431
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className={`max-w-4xl mx-auto text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© 2025 Shubham Verma. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}