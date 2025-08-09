import { useState } from "react";

/**
 * PrefsBtns component displays language and theme preference buttons.
 */
const PrefsBtns: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function setDarkMode() {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  }
  return (
    <div className="prefs-btns">
      <button className="small-btn mode" onClick={setDarkMode}>
        <i className={isDarkMode ? "ri-sun-line" : "ri-moon-clear-line"}></i>
      </button>
    </div>
  );
};

export default PrefsBtns;
