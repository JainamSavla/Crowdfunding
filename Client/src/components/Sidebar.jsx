import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, logout } from "../assets";
import { navlinks } from "../constants";
import { useDisconnect } from "@thirdweb-dev/react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const disconnect = useDisconnect();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name ? "bg-[#2c2f32]" : ""
      } flex justify-center items-center ${
        !disabled ? "cursor-pointer" : ""
      } ${styles}`}
      onClick={handleClick}
    >
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`}
      />
    </div>
  );

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          name="dashboard"
          imgUrl={logo}
          isActive={isActive}
        />
      </Link>

      <div className="flex flex-col gap-4">
        {/* Theme Toggle Button */}
        <div
          className="w-[48px] h-[48px] rounded-[10px] bg-[#1c1c24] flex justify-center items-center cursor-pointer shadow-secondary"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>

        {/* Logout Button */}
        <Icon
          styles="bg-[#1c1c24] shadow-secondary"
          imgUrl={logout}
          handleClick={() => {
            disconnect();
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
