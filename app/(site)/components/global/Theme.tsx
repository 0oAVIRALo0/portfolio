"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";

export default function Theme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  const currentTheme = hasMounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";

  function toggleTheme() {
    setTheme(currentTheme === "light" ? "dark" : "light");
  }

  if (!hasMounted)
    return (
      <span className="animate-pulse flex items-center justify-center min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300">
        <SunIcon />
      </span>
    );

  const ThemeIcon = currentTheme === "light" ? SunIcon : MoonIcon;

  return (
    <button
      onClick={toggleTheme}
      className={`dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform transform ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      <ThemeIcon />
    </button>
  );
}
