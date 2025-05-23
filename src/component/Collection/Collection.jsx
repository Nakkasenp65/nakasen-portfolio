import { PROJECTS } from "@/utils/PROJECTS";
import Project from "../Project/Project";

import s from "./Collection.module.css";
export default function Collection() {
  return (
    <div className={s.wrapper}>
      <h2>Projects</h2>
      <div className={s.container}>
        {PROJECTS.map((project) => (
          <Project
            projectId={project.id}
            key={project.id}
            image={project.imageLink}
            date={project.date}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            projectDemoLink={project.projectDemoLink}
          />
        ))}
      </div>
    </div>
  );
}
