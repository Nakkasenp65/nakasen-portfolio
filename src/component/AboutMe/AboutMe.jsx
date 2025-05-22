import Container from "../Container/Container";
import s from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <>
      <div className={s.wrapper}>
        <h2 className={s.head}>About me</h2>
        <div className={s.border}>
          <p className={s.paragraph}>
            Full Stack Developer with experience in web application development
            Skilled in JavaScript, Python, and Java for building and optimizing
            website applications.
          </p>
        </div>
      </div>
    </>
  );
}
