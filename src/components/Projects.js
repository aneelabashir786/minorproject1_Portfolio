import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    { 
      title: "Project One", 
      desc: "Dictionary Management System", 
      tech: "C++",
      live: "#",
      github: "#",
      iconType: "book"
    },
    { 
      title: "Project Two", 
      desc: "Transport Management System", 
      tech: "C++",
      live: "#",
      github: "#",
      iconType: "truck"
    },
    { 
      title: "Project Three", 
      desc: "Bibliotopia_Online Book Store", 
      tech: "HTML, SASS, CSS",
      live: "#",
      github: "#",
      iconType: "store"
    },
    { 
      title: "Project Four", 
      desc: "Urdu to Roman Translator", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "translate"
    },
    { 
      title: "Project Five", 
      desc: "Text Summarizer", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "document"
    },
    { 
      title: "Project Six", 
      desc: "Sentimental Analyzer", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "chart"
    },
    { 
      title: "Project Seven", 
      desc: "Pseudocode to C++ Generator", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "code"
    },
    { 
      title: "Project Eight", 
      desc: "Urdu Chatbot", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "chat"
    },
    { 
      title: "Project Nine", 
      desc: "RAG", 
      tech: "Python, NLP, Streamlit",
      live: "#",
      github: "#",
      iconType: "brain"
    },
  ];

  const getIcon = (type) => {
    const icons = {
      book: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      truck: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 3h15v13H1z"></path>
          <path d="M16 8h3l3 3v5h-6V8z"></path>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      store: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      translate: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 8h14M9 2v6M12 8v13M16 8v8a3 3 0 0 0 3 3h2"></path>
          <path d="m17 20 3-3-3-3"></path>
        </svg>
      ),
      document: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      chart: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
          <circle cx="7" cy="13" r="1"></circle>
          <circle cx="11" cy="9" r="1"></circle>
          <circle cx="14" cy="14" r="1"></circle>
          <circle cx="19" cy="9" r="1"></circle>
        </svg>
      ),
      code: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      chat: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="10" x2="15" y2="10"></line>
          <line x1="9" y1="14" x2="13" y2="14"></line>
        </svg>
      ),
      brain: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
        </svg>
      ),
    };
    return icons[type] || icons.code;
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="title">Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            {/* SVG Icon placeholder */}
            <div className="project-placeholder">
              <div className="placeholder-content">
                <div className="project-svg-icon">
                  {getIcon(p.iconType)}
                </div>
                <span className="project-number">#{i + 1}</span>
              </div>
            </div>
            
            {/* Uncomment below when you have actual images
            <img src={`/project${i+1}.png`} alt={p.title} />
            */}
            
            <div className="project-overlay">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>Tech: {p.tech}</small>
              <div className="project-links">
                {/* Only show Live button if live link exists */}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-outline">
                    Live
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}