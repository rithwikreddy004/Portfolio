"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";



const Projects = [
  {
    title: "Lead Manager",
    timeline: "September 2025 – September 2025 | Full Stack",
    description:
      "LeadManager App is a Next.js + TypeScript Full Stack web application for managing real estate buyer leads. It features lead creation, editing, and history tracking with Zod validation, ownership-based access, and SSR-powered listing with search, filters, and pagination. CSV import/export and Prisma + PostgreSQL with migrations make it easy to manage data.",
    tech: ["Next Js", "Typescript", "PostgreSQL", "CSS", "HTML", "Node Js", "React Js"],
    code: "https://github.com/rithwikreddy004/LeadManager",
    live: "https://lead-manager-kappa.vercel.app/",
  },
  {
    title: "Personalized-Query-System---NLP-project",
    timeline: "Nov 2023 – Feb 2024 | Full Stack",
    description:
      "A web-based NLP application that allows users to ask queries based on specific contexts derived from web links and YouTube videos.",
    tech: ["Python", "Node.js", "Express.js", "Groq API","Beautiful Soup API","Streamlit","NLP","LLM"],
    code: "https://github.com/rithwikreddy004/Personalized-Query-System---NLP-project",
    live: "https://personalized-query-system---nlp-project-mzplalkzvbg3kddyvavwm8.streamlit.app/",
  },
  {
    title: "Supervised-CNN-Chess-Model",
    timeline: "Jul 2025 – Aug 2025 | Deep Learning Model(ML)",
    description:
      "A Python-based chess move predictor using a Convolutional Neural Network (CNN) trained on millions of positions to suggest optimal moves in SAN format, enabling fast, data-driven move recommendations.",
    tech: ["Python", "Pytorch", "Pycharm", "Numpy"],
    code: "https://github.com/rithwikreddy004/Supervised-CNN-Chess-Model",
    live: null,
  },
  {
    title: "SynapseCode",
    timeline: "Sep 2025 – Sep 2025 | Fullstack",
    description:
      "Unlock your coding potential. SynapseCode is an intelligent AI assistant that instantly translates your ideas into clean, functional code. Featuring a powerful code-generation engine and a dynamic, customizable UI with dark mode, it's the future of programming, right at your fingertips.",
    tech: ["React JS", "Node JS", "Javascript", "API Integration","LLM","GEN AI"],
    code: "https://github.com/rithwikreddy004/SynapseCode-Ai-code-assistant",
    live: "https://synapse-code-ai-code-assistant-b1ij.vercel.app/",
  },
  {
    title: "Job Management Dashboard",
    timeline: "Sep 2025 – Oct 2025 | Full Stack",
    description:
      "It's a Job Management Dashboard designed to allow users to create, manage, and filter job postings in real-time. It adheres strictly to modern web standards, emphasizing functionality, robust data handling, and pixel-perfect UI/UX design.",
    tech: ["Next.js", "Nest.js", "Html","Css","PostgreSQL"],
    code: "https://github.com/rithwikreddy004/Job-management-version-2-frontend",
    live: "https://job-management-version-2-frontend.vercel.app/",
  },

  {
    title: "A-Unity-chess-engine-with-Minimax-Alpha-Beta-Pruning",
    timeline: "Dec 2024 – Feb 2025 | Desktop Application",
    description:
      "This is a Unity-based Chess Engine developed as a standalone desktop application. It features Player vs Bot mode, Game Analysis mode. The engine uses Minimax with Alpha-Beta pruning to deliver competitive gameplay and analysis.",
    tech: ["C#", "Unity"],
    code: "https://github.com/rithwikreddy004/A-Unity-chess-engine-with-Minimax-Alpha-Beta-Pruning",
    live: "https://drive.google.com/file/d/1TbdgBeaTcn0NmnbJ5QBslqNtUBC_TmtU/view",
  },

  {
    title: "Weather App",
    timeline: "Oct 2025 – Oct 2025 | WEB APP",
    description:
      "This is a sleek, responsive weather application built with React and plain CSS. It provides real-time weather data for any city in the world, fetching information from the Open-Meteo API and displaying it in a clean, dark-mode interface.",
    tech: ["React Js", "CSS","Open-Meteo API"],
    code: "https://github.com/rithwikreddy004/WeatherApp",
    live: "https://weather-app-swart-rho-95.vercel.app/",
  },


];



const Education = [
  {
    school: "CVR COLLEGE OF ENGINEERING",
    degree: "Bachelor of Technology in Computer Science",
    timeline: "June 2021 – May 2025",
    result: "CGPA: 8.01/10",
    icon: "🎓",
  },
  {
    school: "Narayana Junior College",
    degree: "Class 12th TSBIE",
    timeline: "March 2019 – June 2021",
    result: "93.2%",
    icon: "🏫",
  },
  {
    school: "Narayana High School",
    degree: "Class 10th SSC",
    timeline: "June 2018 – March 2019",
    result: "95%",
    icon: "🏫",
  },
];

const WorkExperience = [
  
  {
    role: "Backend Developer Intern",
    company: "rewise ai",
    timeline: "July 2025 – September 2025",
    description:
      "Contributed to creating backend api end points and developing RAG for generating flash cards and integrating with Gen Ai tools",
    tech: ["Next.js", "Firebase", "RAG", "LLM","Gen Ai"],
  },
];



// --- Data for Tech Stack Section (UPDATED with new skills) ---
const TechSkills = [
    {
        category: "Languages",
        title_class: "lang-title",
        skills: [
            { name: "HTML5", icon_key: "html5" },
            { name: "CSS3", icon_key: "css3" },
            { name: "JavaScript", icon_key: "js" },
            { name: "Python", icon_key: "python" },
            { name: "Java", icon_key: "java" }
            
        ],
    },
    {
        category: "Frameworks & Libraries",
        title_class: "framework-title",
        skills: [
            { name: "React JS", icon_key: "react" },
            { name: "Node JS", icon_key: "node" },
            { name: "Express JS", icon_key: "express" },
            { name: "Next.js", icon_key: "nextjs" },
            { name: "Tailwind CSS", icon_key: "tailwind" },
            { name: "PyTorch", icon_key: "pytorch" },
            
        ],
    },
    {
        category: "Tools & Platforms",
        title_class: "tool-title",
        skills: [
            { name: "Git & GitHub", icon_key: "git" },
            { name: "VS Code", icon_key: "vscode" },
            { name: "Figma", icon_key: "figma" },
            { name: "MongoDB", icon_key: "mongo" },
            { name: "PostgreSQL", icon_key: "postgres" }, 
            { name: "SQL", icon_key: "sql" },
        ],
    },
];
// --- End Data for Tech Stack Section ---


// Custom Hook to handle the typewriter effect logic (NO CHANGES)
const useTypingEffect = (texts, speed = 100, pause = 1500) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);

      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);

      if (charIndex === currentText.length) {
        clearTimeout(timer);
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
};

// Component for the animated text (NO CHANGES)
const TypingText = ({ roles }) => {
  const animatedText = useTypingEffect(roles, 100, 2000);
  return (
    <span className="typing-text">
      {animatedText}
      <span className="cursor">|</span>
    </span>
  );
};


// CORRECTED TECH ICON COMPONENT - USES NEXT/IMAGE CLEANLY
const TechIcon = ({ icon_key, name }) => {
    // Using PNG now, as confirmed by the user.
    const imagePath = `/icons/tech/${icon_key}.png`;
    
    return (
        <div className={`skill-icon icon-${icon_key}`}>
            <Image
                src={imagePath}
                alt={`${name} logo`}
                width={45} 
                height={45}
                className="tech-logo"
            />
        </div>
    );
};


export default function HomePage() {
  const router = useRouter();
  const rolesToAnimate = [
    "Full Stack Developer",
    "Backend Developer",
    "Gen AI Engineer",
    "Coding Enthusiast",
  ];

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
};


  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Rithwiik_Resume.pdf';
    link.download = 'Rithwiik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <main>
      {/* HERO SECTION (NO CHANGES) */}
      <section className="hero full-width-hero" id="hero">
        <div className="hero-content centered-content">
          <p className="greeting-line">
            Hi, my name is
          </p>
          <h1 className="hero-name-title">
            Rithwiik Reddy.
          </h1>
          <p className="role-starter">
            I am a <TypingText roles={rolesToAnimate} />
          </p>
          
          <p className="hero-bio-summary">
            Full-Stack Developer and AI Integrator specializing in Python and Next.js. A Computer Science graduate skilled in designing scalable full-stack web applications and AI-integrated tools. Passionate about leveraging the MERN stack and deep learning models to build efficient, real-world solutions.

          </p>

          <div className="hero-buttons">
            <button onClick={handleProjectsClick} className="btn primary">
              View My Projects
            </button>
            <button onClick={handleDownloadCV} className="btn secondary download-btn">
              ⬇ Download CV
            </button>
          </div>
          
          <div className="social-icon-links">
             <a href="https://www.linkedin.com/in/rithwiik-reddy-guduru-13a850292/" target="_blank" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href="https://github.com/rithwikreddy004" target="_blank" aria-label="GitHub">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3 4.95 4.95 0 0 0 17 4.54a12.18 12.18 0 0 0-3.37-.5c-.95 0-1.9.08-2.83.24C9.55 4.14 8.7 3.84 8 3.5c-.71-.34-1.45-.66-2.2-.95C4.9 2.5 4.2 2.18 3.5 2C2.8 1.8 2.1 1.7 1.4 1.7 1.4 1.7 1 1.7 1 2c-.1.3-.2.6-.3.9C.5 3.5 0 4.2 0 5s.4 1.3.8 1.9c.4.6.8 1.1 1.2 1.6C2.4 8.6 3.1 9.3 4 10a1.8 1.8 0 0 0 1.7.3c-.02.48-.03.96-.03 1.44 0 1.28.1 2.56.3 3.84a5.55 5.55 0 0 0 1.2 2.88c.84 1.28 2.2 2 3.6 2.16 1.4.16 2.8.08 4.2-.24.71-.16 1.42-.4 2.13-.72a1.8 1.8 0 0 0 1.7-.3c.12-.1.24-.2.36-.3a4.9 4.9 0 0 0 2.2-3.14c.2-.72.3-1.44.3-2.16 0-1.12-.1-2.24-.3-3.36a1.8 1.8 0 0 0-.5-1.5c-.32-.36-.72-.64-1.2-1a4.9 4.9 0 0 0-2-1.1c-.8-.2-1.6-.3-2.4-.3-.8 0-1.6.1-2.4.3-.8.2-1.6.5-2.4 1 0 0-4.5 3.5-4.5 3.5s-.5 1-1.5 1.5-2.5 1-3.5 1"></path></svg>
             </a>
             <a href="mailto:rithwikreddy004@gmail.com" aria-label="Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             </a>
          </div>
          
          <a href="#about" className="scroll-down-arrow" aria-label="Scroll Down">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
          
        </div>
      </section>

      {/* ABOUT SECTION (NO CHANGES) */}
      <section className="about" id="about">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm Rithwiik, a Full-Stack Developer and AI Integrator with a Computer Science degree, specializing in Python and Next.js. I am skilled in designing scalable web applications and AI-integrated tools, utilizing proficiency with the MERN stack and modern frameworks. My focus is on leveraging deep learning models and web technologies to create efficient, real-world solutions that bridge the gap between AI innovation and practical application.

        </p>
      </section>

      {/* ========== TECH STACK SECTION (Modern UI & Image Fix) ========== */}
      <section className="tech">
        <h2 className="tech-arsenal-title">My Skills</h2>
        
        {TechSkills.map((categoryData, index) => (
            <div key={index} className="tech-category">
                <h3 className={`category-title ${categoryData.title_class}`}>
                    {categoryData.category}
                </h3>
                <div className="skill-grid">
                    {categoryData.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-card">
                            <TechIcon icon_key={skill.icon_key} name={skill.name} />
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        
      </section>

      {/* ================= PROJECTS (CLONED "My Creations") ================= */}
      <section className="projects-section" id="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {Projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-name">{proj.title}</h3>
              <p className="project-timeline">{proj.timeline}</p>
              <p className="project-desc">{proj.description}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {proj.code && (
                  <a href={proj.code} target="_blank" className="proj-link">
                    <span>💻 Code</span>
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" className="proj-link">
                    <span>🔗 Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-grid">
          {WorkExperience.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <h3 className="exp-role">{exp.role} @ {exp.company}</h3>
              <p className="exp-timeline">{exp.timeline}</p>
              <p className="exp-desc">{exp.description}</p>

              <div className="tech-stack">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="education-section" id="education">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
          {Education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <h3 className="edu-school">
                <span className="edu-icon">{edu.icon}</span> {edu.school}
              </h3>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-timeline">{edu.timeline}</p>
              <p className="edu-result">{edu.result}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          I’m currently looking for <strong>internships</strong> or{" "}
          <strong>full-time roles</strong>.  
          Whether you have a question, a project, or just want to say hi — my inbox is always open.
        </p>
        
        <a href="mailto:youremail@example.com" className="btn contact-btn">
          📩 Say Hello
        </a>

        <div className="contact-socials">
          <a href="https://github.com/rithwikreddy004" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/rithwiik-reddy-guduru-13a850292/" target="_blank">LinkedIn</a>
          <a href="mailto:rithwikreddy004@gmail.com">Email</a>
        </div>
      </section>

      {/* Global styles must come first if separate */}
      <style jsx global>{`
        /* Global scroll behavior for the anchor links */
        html {
            scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Local styles - All wrapped in one block to fix the error */}
      <style jsx>{`
        :root {
          /* Updated color for the clone theme */
          --accent-color: #0070f3; /* Bright green/cyan #5effc4 */
          --background-color: #0b0c10;
          --text-color: #ffffff;
          --muted-color: #8892b0;
          --light-text: #e6f1ff;
          /* About section color */
          --about-bg: #14171e; 
          /* Tech Card Colors */
          --card-bg: #1c2331; 
          --card-border: #2c364c;
          --lang-title-color: #d19a66;
          --framework-title-color: #0070f3; 
          --tool-title-color: #98c379;
        }

        main {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          padding: 0 2rem;
          max-width: 1200px;
          margin: auto;

          margin-top:100px;
          
        }
        
        /* HERO - CLONED STYLE */
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh; 
          padding: 0;
          text-align: center;
          background: transparent;
        }
        
        /* Aditi Arya Clone Text Styles */
        .greeting-line { color: var(--accent-color); font-family: monospace; font-size: 1rem; margin-bottom: -1rem; }
        .hero-name-title { font-size: 4rem; font-weight: 700; color: var(--light-text); margin: 0; }
        .role-starter { font-size: 2.5rem; font-weight: 700; color: var(--muted-color); margin-bottom: 2rem; min-height: 3rem; }
        .typing-text { color: var(--light-text); font-weight: 700; }
        .cursor { display: inline-block; animation: blink 0.7s infinite; opacity: 1; }
        .hero-bio-summary { font-size: 1.1rem; line-height: 1.6; color: var(--muted-color); margin-bottom: 3rem; max-width: 650px; }
        .hero-buttons { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 3rem; }
        .btn { padding: 0.85rem 1.7rem; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-size: 1rem; border: none; text-transform: uppercase; }
        .btn.primary { background: var(--accent-color); color: black; box-shadow: 0 0 10px rgba(94, 255, 196, 0.4); }
        .btn.secondary.download-btn { background: transparent; color: var(--accent-color); border: 1px solid var(--accent-color); }
        .social-icon-links { display: flex; gap: 2rem; margin-bottom: 3rem; }
        .scroll-down-arrow { color: var(--accent-color); transition: transform 0.3s ease; animation: bounce 2s infinite; }
        .hero-content.centered-content {
          z-index: 2;
          display: flex;
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
          gap: 1.5rem;
          max-width: 800px;
          width: 100%;
          text-align: center;
        }
        
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        .profile-wrapper, .profile-social-group { display: none !important; }

        /* ========== ABOUT SECTION STYLES (CLONED) ========== */
        .about {
            padding: 4rem 1rem; 
            background-color: var(--about-bg); 
            text-align: center;
        }

        .about-title {
            color: var(--accent-color); 
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 2rem; 
        }
        
        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--muted-color);
            
            max-width: 750px;
            margin: 0 auto;
        }
        
        .about-text strong {
            color: var(--light-text);
            font-weight: 600;
        }

        /* ========== TECH STACK SECTION STYLES (MODERN UI & FIXES) ========== */
        .tech {
            padding: 2rem 1rem;
            text-align: center;
            background-color: var(--background-color); 
        }

        .tech-arsenal-title {
            color: var(--accent-color);  /* Blue title color from image */
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 3rem; 
        }

        .tech-category {
            margin-bottom: 4rem;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }

        .category-title {
            font-size: 1.25rem;
            font-weight: 500;
            margin-bottom: 2rem; 
            color: var(--light-text); 
        }
        
        /* Color coding the category titles based on the image's aesthetic */
        .lang-title { color: #0070f3;  }
        .framework-title { color: #0070f3;  }
        .tool-title { color: #0070f3;  }

        .skill-grid {
            display: grid;
            /* Using a fixed number of columns for max screen size to match image (6 columns) */
            grid-template-columns: repeat(6, 1fr); 
            gap: 1.5rem 0.5rem; 
            justify-items: center; 
            align-items: center; /* Center vertically */
            margin-bottom: 1rem;
        }

        /* Modern UI Style for the individual card */
        .skill-card {
            background-color: #12151e; /* Darker than background for separation */
            border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle light border */
            border-radius: 8px;
            padding: 10px 0 15px; /* Vertical padding */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between; /* Space out icon and name */
            width: 100%; 
            height: 100%; /* Ensure uniform size */
            min-height: 100px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        
        .skill-card:hover {
            transform: translateY(-5px); /* Lift effect */
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5); 
            border-color: var(--accent-color); /* Highlight border on hover */
        }
        
        .skill-icon {
            width: 50px; 
            height: 50px;
            border-radius: 6px;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden; 
            position: relative;
        }
        
        /* FIX: Ensure Image scales correctly inside the container */
        .skill-icon .tech-logo {
            object-fit: contain;
            width: 100% !important; 
            height: 100% !important;
            padding: 5px; /* Added padding to give room around the logo */
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5)); 
        }

        /* FIX: Contrast for dark logos (Express, Next.js) */
        .icon-express { 
             /* Override background to white/light grey for contrast */
            background-color: #12151e;
        }
        .icon-nextjs { 
            background-color: #12151e; /* Override background to white/light grey for contrast */
        }
        /* ADDED: A white box for the black logos inside the icon container */
        .icon-express .tech-logo, .icon-nextjs .tech-logo {
            /* This is a common trick for dark logos on dark backgrounds. 
               We'll make the parent container bright white */
            background-color: #fff;
            padding: 0; /* No padding if the logo itself is black/white */
        }
        .icon-express, .icon-nextjs {
            background-color: #fff; /* Make the container white */
        }
        /* Next.js has a specific dark background in the example, let's match the look */
        .icon-nextjs {
             background-color: transparent; /* Assuming the PNG has a dark background itself */
        }
        /* Let's try the subtle glow effect on the icons instead of a colored box,
           as the image uses full-color icons without a solid background box. */
        
        /* We remove all individual background colors and rely on the card background for all icons */
        .skill-icon {
            background: transparent;
        }

        /* Re-adding the Next.js specific fix for contrast */
        .icon-express, .icon-nextjs { 
             /* This will apply a subtle white halo around the black logo on the dark card background */
             border: 1px solid rgba(255, 255, 255, 0.2); 
             border-radius: 50%; /* Make the border circle for the dark logos */
             box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }

        .skill-name {
            color: var(--light-text); 
            font-size: 0.95rem;
            margin: 0;
            font-weight: 400;
            font-family: monospace; 
        }
        
        /* Responsive adjustments for skill grid */
        @media (max-width: 900px) {
            .skill-grid {
                grid-template-columns: repeat(5, 1fr); 
            }
        }
        @media (max-width: 768px) {
            .skill-grid {
                grid-template-columns: repeat(4, 1fr); 
                gap: 1rem 0.5rem;
            }
            .skill-card { min-height: 90px; }
        }
        @media (max-width: 550px) {
            .skill-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem 0.25rem;
            }
            .skill-card { min-height: 80px; }
        }
        
        /* --- REST OF SECTIONS (Generic Styles) --- */

        h2 {
            color: var(--light-text);
            font-size: 2rem;
            margin-bottom: 1.5rem;
            text-align: center;
        }
        
        section {
            padding: 2rem 0;
            text-align: center;
        }

        .projects-section {
          padding: 2rem 1rem;
          
          text-align: center;
        }
        .projects-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0070f3; 
          margin-bottom: 3rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: #1c2331;
          padding: 2rem;
          border-radius: 12px;
          text-align: left;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(94, 255, 196, 0.4);
        }
        .project-name {
          font-size: 1.5rem;
          color: #0070f3; 
          margin-bottom: 0.5rem;
        }
        .project-timeline {
          font-size: 0.9rem;
          color: #8892b0;
          margin-bottom: 1rem;
        }
        .project-desc {
          font-size: 1rem;
          color: #cfd6e1;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-pill {
          background: #0b0c10;
          color: #0070f3; 
          font-size: 0.85rem;
          font-family: monospace;
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(94, 255, 196, 0.4);
        }
        .project-links {
          display: flex;
          gap: 1.5rem;
        }
        .proj-link {
          font-size: 0.95rem;
          color: #8892b0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.3s ease;
        }
        .proj-link:hover {
          color: #0070f3; 
        }

        .experience-section {
          padding: 2rem 1rem;
          background: var(--about-bg);
          text-align: center;
        }

        .experience-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 3rem;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .experience-card {
          background-color: #12151e;
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 1.5rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          border-color: var(--accent-color);
        }

        .exp-role {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--light-text);
          margin-bottom: 0.5rem;
        }

        .exp-timeline {
          font-size: 0.95rem;
          color: var(--muted-color);
          margin-bottom: 1rem;
        }

        .exp-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--muted-color);
          margin-bottom: 1rem;
        }

        

        .education-section {
          padding: 2rem 1rem;
          text-align: center;
        }

        .education-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0070f3; 
          margin-bottom: 3rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .education-card {
          background: #1c2331;
          padding: 2rem;
          border-radius: 12px;
          text-align: left;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(94, 255, 196, 0.4);
        }

        .edu-school {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0070f3; 
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .edu-degree {
          font-size: 1rem;
          color: #cfd6e1;
          margin-bottom: 0.5rem;
        }

        .edu-timeline {
          font-size: 0.9rem;
          color: #8892b0;
          margin-bottom: 1rem;
        }

        .edu-result {
          font-size: 1rem;
          font-weight: 600;
          color: #0070f3; 
        }

        
        /* CONTACT */
        .contact {
          text-align: center;
          padding: 3rem 1rem;
          border-top: 2px solid var(--accent-color);
        }
        .contact h2 { font-size: 2rem; margin-bottom: 1rem; }
        .contact-subtitle { font-size: 1.1rem; max-width: 600px; margin: 0 auto 2rem auto; color: var(--muted-color); }
        .contact-btn {
          display: inline-block;
          background: var(--accent-color);
          color: black;
          font-size: 1.1rem;
          padding: 0.9rem 2rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.3s ease;
        }
        .contact-btn:hover { transform: scale(1.05); opacity: 0.9; }
        .contact-socials { margin-top: 2rem; display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; color: var(--muted-color); }
        .contact-socials a { color: var(--text-color); text-decoration: none; font-weight: 500; border-bottom: 1px dashed transparent; transition: border 0.3s; }
        .contact-socials a:hover { border-bottom: 1px dashed var(--accent-color); }

      `}</style>
    </main>
  );
}