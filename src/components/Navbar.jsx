import React, { useState, useEffect } from "react"
import Logo from "../Assets/images/icons8-cardinal-64.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import resume from "../Assets/files/Corey Loftus - Software Engineer.pdf"
import { Link } from "react-scroll"
import { DarkMode } from "./DarkMode"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  // const [darkMode, setDarkMode] = useState(false)
  // const handleDarkMode = () => setDarkMode(!darkMode)

  // useEffect(() => {
  //   document.body.classList.toggle("dark", darkMode)
  // }, [darkMode])

  return (
    <div className="box-border top-0 w-screen p-2 font-bold text-gray-800 dark:text-gray-100 dark:bg-[#020202]">
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
            <span className="px-2 text-xl font-bold text-red-600 dark:text-red-500">
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
        {/* dark mode button */}

        <DarkMode />

        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? (
            <FaBars size={40} className="dark:text-gray-100" />
          ) : (
            <FaTimes size={40} className="dark:text-gray-100" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {nav && (
        <div className="mt-2 bg-gray-200 dark:bg-red-900/40 z-30 relative">
          <ul className={!nav ? "hidden" : "w-full mt-2 p-2 text-center"}>
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              <li className="py-2 text-xl hover:bg-gray-300 dark:hover:bg-red-700 border-b-2 border-red-800/50">
                About
              </li>
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="py-2 text-xl hover:bg-gray-300 dark:hover:bg-red-700 border-b-2 border-red-800/50">
                Skills
              </li>
            </Link>
            <Link to="work" smooth={true} duration={500} onClick={handleClick}>
              <li className="py-2 text-xl hover:bg-gray-300 dark:hover:bg-red-700 border-b-2 border-red-800/50">
                Work
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="py-2 text-xl hover:bg-gray-300 dark:hover:bg-red-700">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
      {/* Social Icons */}
      <div className="hidden fixed lg:flex flex-col top-[10%] right-0 text-gray-100">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-sm translate-x-[100px] hover:translate-x-[0px] duration-300 bg-blue-600">
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
          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-sm translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#333333]">
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

          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-sm translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#6fc2e0]">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:coreyloftus@gmail.com"
            >
              <HiOutlineMail size={30} />
              <span>Email</span>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-sm translate-x-[100px] hover:translate-x-[0px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full"
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
