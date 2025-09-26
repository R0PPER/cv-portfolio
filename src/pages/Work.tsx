import { useState } from "react";
import { projectsData, type Project } from "../projectsData";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

export const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [previousProject, setPreviousProject] = useState<Project | null>(null);

  const handleMouseEnter = (project: Project) => {
    if (hoveredProject && hoveredProject.id !== project.id) {
      // Αν αλλάζουμε project, κράτα το προηγούμενο για smooth transition
      setPreviousProject(hoveredProject);
    }
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setPreviousProject(hoveredProject);
    setHoveredProject(null);
  };

  return (
    <div className="work">
      <div className="work-images">
        {/* Previous image - για smooth transition */}
        {previousProject && previousProject.id !== hoveredProject?.id && (
          <img
            key={`prev-${previousProject.id}`}
            className={`${previousProject.fit} image-exit`}
            src={previousProject.image}
            alt={previousProject.title}
            onTransitionEnd={() => setPreviousProject(null)}
          />
        )}

        {/* Current image */}
        {hoveredProject && (
          <img
            key={`current-${hoveredProject.id}`}
            className={`${hoveredProject.fit} image-enter`}
            src={hoveredProject.image}
            alt={hoveredProject.title}
          />
        )}
      </div>

      <div className="work-text">
        <h2>work</h2>
        <div className="work-titles">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
            >
              <h4>
                <ArrowRightIcon className="arrow-svg" />
                {project.title}
              </h4>
              <p>{project.languages.join(", ")}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
