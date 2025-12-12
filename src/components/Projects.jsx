// src/components/Projects.jsx
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "Movie Recommendation App",
    desc: "Full-stack movie discovery platform with user authentication, personalized recommendations, watchlists, and real-time search powered by TMDB API.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "TMDB API"],
    live: "https://movie-app-seun.netlify.app",
    github: "https://github.com/yourusername/movie-recommendation-app",
  },
  {
    title: "Gas Monitoring System (IoT)",
    desc: "Real-time gas detection system using ESP32 sensors, FastAPI backend, WebSocket streaming, and a responsive React dashboard with alerts.",
    tags: ["FastAPI", "Python", "React", "WebSocket", "MQTT", "Chart.js"],
    live: "https://gas-monitor-seun.vercel.app",
    github: "https://github.com/yourusername/gas-monitoring-system",
  },
  {
    title: "TaskMaster – Productivity App",
    desc: "Feature-rich task manager with due dates, categories, recurring tasks, Pomodoro timer, analytics dashboard, and dark mode.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
    live: "https://taskmaster-seun.netlify.app",
    github: "https://github.com/yourusername/taskmaster",
  },
  {
    title: "Bookmark Organizer Extension",
    desc: "Chrome & Firefox extension to save, tag, search, and organize bookmarks efficiently. Syncs across devices with cloud backup.",
    tags: ["JavaScript", "Chrome API", "Firebase", "Manifest V3"],
    live: "https://chrome.google.com/webstore/...",
    github: "https://github.com/yourusername/bookmark-organizer",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container-projects">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <FiExternalLink size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>

              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}