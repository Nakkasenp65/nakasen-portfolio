"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  IoArrowBack,
  IoArrowForward,
  IoCalendarOutline,
  IoCodeSlash,
} from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "@/utils/PROJECTS";
import { useSwipeable } from "react-swipeable";
import Container from "@/component/Container/Container";
import styles from "./Project.module.css";

export default function Project() {
  const { name } = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by ID
  const project = PROJECTS.find((p) => p.id === name);

  // If project not found, show error
  if (!project) {
    return (
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.errorContainer}>
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push("/")}
              className={styles.backButton}
            >
              <IoArrowBack />
              Back to Home
            </button>
          </div>
        </div>
      </Container>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.imageLink.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.imageLink.length - 1 ? 0 : prev + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true, // allows desktop dragging too
  });

  return (
    <Container>
      <div className={styles.wrapper}>
        {/* Back Button */}
        <button onClick={() => router.back()} className={styles.backButton}>
          <IoArrowBack />
          Back
        </button>

        {/* Project Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <div className={styles.dateContainer}>
            <IoCalendarOutline />
            <span>{project.date}</span>
          </div>
        </header>

        {/* Image Gallery */}
        <section className={styles.imageSection}>
          {project.imageLink[0] && (
            <div className={styles.imageContainer} {...handlers}>
              <Image
                src={`/projects/${project.imageLink[currentImageIndex]}.webp`}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                fill
                className={styles.projectImage}
              />

              {project.imageLink.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className={`${styles.imageNav} ${styles.prevButton}`}
                    aria-label="Previous image"
                  >
                    <IoArrowBack />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className={`${styles.imageNav} ${styles.nextButton}`}
                    aria-label="Next image"
                  >
                    <IoArrowForward />
                  </button>
                </>
              )}
            </div>
          )}

          {/* Image Indicators */}
          {project.imageLink.length > 1 && (
            <div className={styles.indicators}>
              {project.imageLink.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`${styles.indicator} ${
                    index === currentImageIndex ? styles.active : ""
                  }`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Project Description */}
        <section className={styles.descriptionSection}>
          <h2>About This Project</h2>
          <p className={styles.description}>{project.description}</p>
        </section>

        {/* Tech Stack */}
        <section className={styles.techSection}>
          <h2>
            <IoCodeSlash />
            Technologies Used
          </h2>
          <div className={styles.techStack}>
            {project.techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {(project.projectDemoLink || project.sourceCode) && (
          <section className={styles.demoLink}>
            <h2>Visit the Project</h2>

            <div className={styles.demoLinks}>
              {project.projectDemoLink && (
                <a
                  href={project.projectDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectDemoLink}
                >
                  Try Demo <FiExternalLink />
                </a>
              )}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectDemoLink}
                >
                  Source Code <FaGithub />
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </Container>
  );
}
