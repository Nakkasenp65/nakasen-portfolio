import s from "./Contact.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <span className={s.text}>@p.nakasen26@gmail.com</span>
      </div>

      <div className={s.links}>
        <a
          href="https://github.com/Nakkasenp65"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <IoLogoGithub className={s.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/nakasen-puttacharoen-9a234b268"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <AiOutlineLinkedin className={s.icon} />
        </a>

        <a
          href="https://www.instagram.com/imrong.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <IoLogoInstagram className={s.icon} />
        </a>
      </div>
    </div>
  );
}
