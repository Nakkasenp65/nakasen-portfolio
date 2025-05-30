import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import s from "./Footer.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.head}>Nakasen Puttacharoen</h3>
      <div className={s.item}>
        <span className={s.text}>Gmail: p.nakasen26@gmail.com</span>
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
