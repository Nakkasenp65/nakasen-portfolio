import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import s from "./Profile.module.css";
import Contact from "../Contact/Contact";
import Link from "next/link";
export default function Profile() {
  return (
    <div className={s.wrapper}>
      <div className={s.profilePictureWrapper}>
        <Image
          src="/profile.webp"
          alt="My Profile Image"
          width={250}
          height={250}
          className={s.profilePicture}
          priority
        />
      </div>
      <Contact />
      <Link
        className={s.download}
        href="/Nakasen_Puttacharoen_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume <BsDownload />{" "}
      </Link>
    </div>
  );
}
