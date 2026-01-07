import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNumpy, SiTensorflow, SiKeras } from "react-icons/si";
import "./About.css";

export default function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
    { name: "React", icon: <FaReact />, level: 75 },
    { name: "Git", icon: <FaGitAlt />, level: 70 },
    { name: "Python", icon: <FaPython />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, level: 70 },
    { name: "NLP", icon: <SiKeras />, level: 65 },
    { name: "DLP", icon: <SiTensorflow />, level: 60 },
    { name: "AI", icon: <SiNumpy />, level: 75 },
  ];

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="about" className="about-section fade-up">
      <h2 className="title">About Me</h2>
      <div className="about-wrapper">
        <div className="about-bio">
          <p>
            I am a passionate front-end developer and AI enthusiast. I create
            clean, responsive, and modern interfaces with React and JavaScript,
            and I love exploring AI, NLP, and DLP technologies with Python.
          </p>
          {/* <div className="about-btn">
            <a href="/cv.pdf" className="btn-outline">Download CV</a>
          </div> */}
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-circle-card">
              <svg width="120" height="120">
                <circle className="circle-bg" cx="60" cy="60" r={radius} />
                <circle
                  className="circle-fill"
                  cx="60"
                  cy="60"
                  r={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - skill.level / 100)}
                />
              </svg>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
