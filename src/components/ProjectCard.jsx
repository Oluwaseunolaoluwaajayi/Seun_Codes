export default function ProjectCard({ title, desc, tags }) {
return (
<div className="project-card">
<h3>{title}</h3>
<p>{desc}</p>
<div className="tags">
{tags.map((t, i) => <span key={i}>{t}</span>)}
</div>
</div>
);
}