import Profile from "@/component/Profile/Profile";
import s from "./page.module.css";
import Collection from "@/component/Collection/Collection";
import Container from "@/component/Container/Container";
import AboutMe from "@/component/AboutMe/AboutMe";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // use your real domain or localhost for dev
  title: {
    template: "P.Nakasen - %s",
    default: "P.Nakasen - Home",
  },
};

export default function Home() {
  return (
    <Container>
      <div className={s.wrapper}>
        <Profile />
        <div className={s.content}>
          <AboutMe />
          <Collection sectionTitle={"Projects"} />
        </div>
      </div>
    </Container>
  );
}
