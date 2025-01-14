const themeColors = ["warning", "danger", "success", "info", "primary", "secondary", "dark", "light"];

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const { changeColor, theme, changeTheme } = useContext(ThemeContext);
  function toggleTheme() {
    changeTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <i className={`bi bi-moon-stars${theme === "light" ? "-fill" : ""}`} onClick={toggleTheme} />
      </div>
      <div className="theme-links">
        {themeColors.map((color) => (
          <span key={color} className={`bg-${color}`} onClick={() => changeColor(color)}></span>
        ))}
      </div>
    </div>
  );
}
