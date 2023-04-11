import React, { useState, useEffect } from "react"
import Logo from "../Assets/images/icons8-cardinal-64.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import resume from "../Assets/files/Corey Loftus - Software Engineer.pdf"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className="box-border top-0 w-screen p-2 px-4 text-gray-100 dark:text-gray-100 dark:bg-[#020202]">
      <div className="flex items-center justify-between relative p-2 dark:bg-gray-800 rounded-lg">
        {/* logo image */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setNav(false)}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <img src={Logo} alt="Logo" style={{ width: "50px" }} />
            <span className="px-2 text-xl font-bold dark:text-red-500">
              Corey Loftus
            </span>
          </div>
        </Link>

        {/* menu */}
        <ul className="hidden md:flex">
          <Link to="about" smooth={true} duration={500}>
            <div className="border-b-2 border-transparent hover:border-gray-100 p-2">
              <li>About</li>
            </div>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <div className="border-b-2 border-transparent hover:border-gray-100 p-2">
              <li>Skills</li>
            </div>
          </Link>
          <Link to="work" smooth={true} duration={500}>
            <div className="border-b-2 border-transparent hover:border-gray-100 p-2">
              <li>Work</li>
            </div>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <div className="border-b-2 border-transparent hover:border-gray-100 p-2">
              <li>Contact</li>
            </div>
          </Link>
        </ul>
        <button
          className="bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2 mt-2"
          onClick={handleDarkMode}
        >
          {darkMode ? (
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5"
              fill="#F2F2F2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? (
            <FaBars size={40} className="text-gray-100" />
          ) : (
            <FaTimes size={40} className="text-gray-100" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {nav && (
        <div className="mt-2 bg-[#32171a] z-30 relative">
          <ul className={!nav ? "hidden" : "w-full mt-2"}>
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              <li className="py-2 text-xl">About</li>
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="py-2 text-xl">Skills</li>
            </Link>
            <Link to="work" smooth={true} duration={500} onClick={handleClick}>
              <li className="py-2 text-xl">Work</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="py-2 text-xl">Contact</li>
            </Link>
          </ul>
        </div>
      )}
      {/* Social Icons */}
      <div className="hidden fixed lg:flex flex-col top-[10%] right-0 shadow-xl">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center translate-x-[100px] hover:translate-x-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/corey-loftus/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
              <span>Linkedin </span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/coreyloftus"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
              <span>Github</span>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#6fc2e0]">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:coreyloftus@gmail.com"
            >
              <HiOutlineMail size={30} />
              <span>Email</span>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href={resume}
              download
            >
              <BsFillPersonLinesFill size={30} />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
