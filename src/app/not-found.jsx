import Container from "@/component/Container/Container";
import s from "./NotFound.module.css";
import { TbError404 } from "react-icons/tb";

export async function generateMetadata() {
  return {
    title: "Not Found",
  };
}
export default function NotFound() {
  return (
    <Container>
      <div className={s.wrapper}>
        <h2 className={s.header}>
          Page Not Found
          <TbError404 className={s.miniIcon} />
        </h2>
        <p className={s.description}>
          The page you are looking for, does not exist.
        </p>
      </div>
    </Container>
  );
}
