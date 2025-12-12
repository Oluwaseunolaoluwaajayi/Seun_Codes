// src/components/Projects.jsx
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "Book CRUD API",
    desc: "Production-ready RESTful API built with FastAPI. Features full CRUD operations, Pydantic validation, automatic OpenAPI/Swagger docs, and proper HTTP error handling.",
    tags: ["FastAPI", "Python", "Pydantic", "REST API", "Swagger UI"],
    live: "https://book-crud-api-1lqb.onrender.com/docs",
    github: "https://github.com/Oluwaseunolaoluwaajayi/book-crud-api",
  },
  {
    title: "Movie Recommendation App",
    desc: "Full-stack movie discovery platform with user authentication, personalized recommendations, watchlists, and real-time search powered by TMDB API.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "TMDB API"],
    live: "https://movie-app-seun.netlify.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/movie-recommendation-app",
  },
  {
    title: "Gas Monitoring System (IoT)",
    desc: "Real-time gas detection dashboard using ESP32 sensors, FastAPI backend, WebSocket streaming, and live charts with email/SMS alerts.",
    tags: ["FastAPI", "Python", "React", "WebSocket", "MQTT", "Chart.js"],
    live: "https://gas-monitor-seun.vercel.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/gas-monitoring-system",
  },
  {
    title: "TaskMaster – Productivity App",
    desc: "Advanced task manager with recurring tasks, Pomodoro timer, analytics dashboard, categories, and dark mode.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    live: "https://taskmaster-seun.netlify.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/taskmaster-app",
  },
  {
    title: "Bookmark Organizer Extension",
    desc: "Chrome & Firefox extension to save, tag, search, and organize bookmarks. Syncs across devices with cloud backup.",
    tags: ["JavaScript", "Chrome API", "Firebase", "Manifest V3"],
    live: "https://chrome.google.com/webstore/detail/bookmark-organizer/...",
    github: "https://github.com/Oluwaseunolaoluwaajayi/bookmark-organizer",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container_projects">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={22} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={22} />
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