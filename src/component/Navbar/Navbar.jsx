"use client";
import Link from "next/link";
import Container from "../Container/Container";
import s from "./Navbar.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { CgSun } from "react-icons/cg";
import { CgMoon } from "react-icons/cg";
// import Card from "@/component/Card/Card";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  // Sync the <html> or <body> class whenever the theme changes
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initialize from localStorage or OS preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);
  return (
    <Container>
      <div className={s.navbar}>
        <Link href={"/"} className={s.header}>
          P. Nakasen
        </Link>
        {/* <Card header="Testing card" buttonTitle="Click Me!" /> */}
        <span
          className={s.themeSwitcher}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <CgMoon /> : <CgSun />}
        </span>
      </div>
    </Container>
  );
}
