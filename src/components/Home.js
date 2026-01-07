import React from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Aneela from "../asset/intro.jfif";

export default function Home() {
    return (
        <section id="home" className="home-section">
            <div className="hero-text">
                <h1 className="fade-in">
                    Hello, I'm <span>Aneela Bashir</span>
                </h1>

                <h2 className="fade-in delay-1">Frontend Developer</h2>

                <p className="fade-in delay-2">
                    I create clean and modern user interfaces with React.
                </p>

                {/* Buttons without any functionality */}
                <div className="btn-group fade-in delay-3">
                    <button className="btn-outline">View CV</button>
                    <button className="btn-outline">Download CV</button>
                </div>

                <div className="social-icons fade-in delay-4">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a href="mailto:aneela.bashir.se@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="hero-img-wrapper fade-in delay-2">
                <img src={Aneela} className="hero-img" alt="profile" />
            </div>
        </section>
    );
}
