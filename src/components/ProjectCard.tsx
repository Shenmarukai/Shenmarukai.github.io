interface ProjectCardProps {
  title: string;
  description: string;
  links: { name: string; url: string }[];
}

function ProjectCard({ title, description, links }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
