"use client";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleToggle = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");
  return (
    <button onClick={handleToggle} className="h-full w-10 ">
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}

export default ThemeToggle;
