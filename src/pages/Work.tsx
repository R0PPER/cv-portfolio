import { useState, useRef } from "react";
import { projectsData, type Project } from "../projectsData";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { handleImageLoad } from "../handleImageLoad";

export const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (project: Project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    // Καθάρισε το background color όταν δεν υπάρχει hovered project
    if (imageContainerRef.current) {
      imageContainerRef.current.style.backgroundColor = "";
    }
  };

  return (
    <div className="work">
      <div className="work-images" ref={imageContainerRef}>
        {hoveredProject && (
          <img
            key={hoveredProject.id}
            className={hoveredProject.fit}
            src={hoveredProject.image}
            alt={hoveredProject.title}
            onLoad={handleImageLoad}
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
