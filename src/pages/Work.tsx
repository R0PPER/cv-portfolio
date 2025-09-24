import { useState } from "react";
import { projectsData, type Project } from "../projectsData";

export const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="work">
      {/* Left side: Image preview */}
      <div className="work-images">
        {hoveredProject && (
          <img
            className={hoveredProject.fit}
            src={hoveredProject.image}
            alt={hoveredProject.title}
          />
        )}
      </div>

      {/* Right side: Project list */}
      <div className="work-text">
        <h2>work</h2>
        <div className="work-titles">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h4>{project.title}</h4>
              <p>{project.languages.join(", ")}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
