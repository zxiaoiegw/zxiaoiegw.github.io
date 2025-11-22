import React from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40">
      <div className="w-full items-center justify-between pt-16 pb-4 px-4 md:px-12">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-5xl font-bold text-blue-500 cursor-pointer "
          >
            Zhen Xiao
          </a>

          <div className="flex items-center gap-10">
            <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
              <li className="cursor-pointer hover:text-blue-500">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <a
                  href="/Zhen_Xiao_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="cursor-pointer"
                >
                  Resume
                </a>
              </li>
            </ul>
            <button onClick={toggleTheme} className="p-2">
              {darkMode ? (
                <FiSun size={24} color={"#facc15"} />
              ) : (
                <MdOutlineNightlight size={24} color={"gray"} />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className=""
              aria-controls=",onile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-gray-300`}
              />

              <AiOutlineClose
                size={26}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-400`}
              />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a href="#about" onClick={toggleMenu} className="cursor-pointer">
              About
            </a>
            <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
              Projects
            </a>
            <a
              href="/Zhen_Xiao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;