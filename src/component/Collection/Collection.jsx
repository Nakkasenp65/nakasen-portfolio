"use client";
import { PROJECTS } from "@/utils/PROJECTS";
import Project from "../Project/Project";

import s from "./Collection.module.css";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

export default function Collection() {
  let tags = [
    "Coursework",
    "Full Stack",
    "Front End",
    "Back End",
    "Application",
  ];

  const [activeTag, setActiveTag] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  function projectSorting() {}

  function handleTag(currentTag) {
    if (activeTag === currentTag) setActiveTag("");
    else setActiveTag(currentTag);
  }

  function parseDateString(dateStr) {
    const [monthStr, yearStr] = dateStr.split(" ");
    const month = new Date(`${monthStr} 1, 2000`).getMonth(); // Normalize month string
    const year = parseInt(yearStr, 10);
    return new Date(year, month); // Construct a Date object
  }

  function sortProjects(projects, order) {
    return [...projects].sort((a, b) => {
      const dateA = parseDateString(a.date);
      const dateB = parseDateString(b.date);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  }

  const filteredAndSortedProjects = sortProjects(
    PROJECTS.filter((project) =>
      activeTag
        ? project.techStack.some((tech) => tech.includes(activeTag))
        : true
    ),
    sortOrder
  );

  return (
    <div className={s.wrapper}>
      <h2>Projects</h2>
      <div className={s.filter}>
        <div className={s.sorter}>
          <Dropdown setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
        <div className={s.tags}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${s.tag} ${activeTag === tag ? s.active : null}`}
              onClick={() => handleTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={s.container}>
        {filteredAndSortedProjects.map((project) => (
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
