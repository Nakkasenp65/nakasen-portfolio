import s from "./Project.module.css";
import { BiLogoFlask, BiLogoMongodb } from "react-icons/bi";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { SiPython, SiHeroku, SiNetlify, SiOpencv } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";
import { FaLine } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  projectId = "project-0",
  date = "0-0-0000",
  name = "Prject",
  image = [],
  description = "test",
  techStack = ["test", "tast"],
  projectDemoLink = "",
}) {
  const techIconMap = {
    "Next.js (React)": RiNextjsFill,
    Python: SiPython,
    "Flask (REST API & Model)": BiLogoFlask,
    Heroku: SiHeroku,
    Netlify: SiNetlify,
    LIFF: FaLine,
    MongoDB: BiLogoMongodb,
    OpenCV: SiOpencv,
    React: FaReact,
  };

  return (
    <div className={s.wrapper}>
      <span className={s.date}>{date}</span>
      <div className={s.imageContainer}>
        {image[0] ? (
          <Image
            className={s.projectImage}
            key={image[0]}
            alt={"project " + image[0]}
            src={"/projects/" + image[0] + ".webp"}
            width={1000}
            height={300}
          />
        ) : (
          <div className={s.projectEmpty}>Project has no demo</div>
        )}
      </div>
      <h3>{name}</h3>
      <p className={s.description}>{description}</p>
      <span className={s.techStack}>
        {techStack.map((tech, index) => {
          const IconComponent = techIconMap[tech] || null; // Default icon
          if (IconComponent !== null) {
            return <IconComponent className={s.techIcon} key={index} />;
          }
        })}
      </span>
      <div className={s.wrapperMore}>
        {projectDemoLink !== "" && (
          <a
            href={projectDemoLink}
            className={s.readMore}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Demo</p>
            <FiExternalLink className={s.rightArrowIcon} />
          </a>
        )}
        <Link href={`/project/${projectId}`} className={s.readMore}>
          <p>Read more</p>
          <IoArrowForward className={s.rightArrowIcon} />
        </Link>
      </div>
    </div>
  );
}
