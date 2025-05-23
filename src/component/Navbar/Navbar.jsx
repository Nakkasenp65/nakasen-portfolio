"use client";
import Link from "next/link";
import Container from "../Container/Container";
import s from "./Navbar.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { CgSun, CgMoon } from "react-icons/cg";

export default function Navbar() {
  const [theme, setTheme] = useState(null); // Start with null to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount (client-side only)
  useEffect(() => {
    const initializeTheme = () => {
      const stored = localStorage.getItem("theme");
      if (stored) {
        setTheme(stored);
        return stored;
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const systemTheme = prefersDark ? "dark" : "light";
        setTheme(systemTheme);
        return systemTheme;
      }
    };

    const initialTheme = initializeTheme();

    // Apply theme to body immediately
    document.body.classList.remove("dark", "light");
    document.body.classList.add(initialTheme);

    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme && mounted) {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <Container>
        <div className={s.navbar}>
          <Link href={"/"} className={s.header}>
            P. Nakasen
          </Link>
          <span className={s.themeSwitcher}>
            <CgSun style={{ opacity: 0 }} />
          </span>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={s.navbar}>
        <Link href={"/"} className={s.header}>
          P. Nakasen
        </Link>
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
