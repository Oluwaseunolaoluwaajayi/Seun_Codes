// src/components/Projects.jsx
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "Book CRUD API",
    desc: "Production-ready RESTful API built with FastAPI. Features full CRUD operations, Pydantic validation, automatic OpenAPI/Swagger docs, and proper HTTP error handling.",
    tags: ["FastAPI", "Python", "Pydantic", "REST API", "Swagger UI"],
    live: "https://book-crud-api-1lqb.onrender.com", // ← Update this when Render finishes
    github: "https://github.com/Oluwaseunolaoluwaajayi/book-crud-api",
  },
  {
    title: "Movie Recommendation App",
    desc: "Full-stack movie discovery platform with user authentication, personalized recommendations, watchlists, and real-time search powered by TMDB API.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://movie-app-seun.netlify.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/movie-recommendation-app",
  },
  {
    title: "Gas Monitoring System (IoT)",
    desc: "Real-time gas detection dashboard using ESP32 sensors, FastAPI backend, WebSocket streaming, and live charts with alerts.",
    tags: ["FastAPI", "Python", "React", "WebSocket", "MQTT", "Chart.js"],
    live: "https://gas-monitor-seun.vercel.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/gas-monitoring-system",
  },
  {
    title: "TaskMaster – Productivity App",
    desc: "Advanced task manager with recurring tasks, Pomodoro timer, analytics, categories, and dark mode support.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
    live: "https://taskmaster-seun.netlify.app",
    github: "https://github.com/Oluwaseunolaoluwaajayi/taskmaster-app",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
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