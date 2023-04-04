import React, { useState } from "react"
import Logo from "../Assets/images/icons8-cardinal-64.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import resume from "../Assets/files/Corey Loftus - Software Engineer.pdf"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="box-border top-0 w-screen p-2 px-4 text-gray-100">
      <div className="flex items-center justify-between relative">
        {/* logo image */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setNav(false)}
          className="cursor-pointer"
        >
          <div className="text-left">
            <img src={Logo} alt="Logo" style={{ width: "50px" }} />
          </div>
        </Link>

        {/* menu */}
        <ul className="hidden md:flex">
          <Link to="home" smooth={true} duration={500}>
            <div className="border-b-2 border-transparent hover:border-gray-100 p-2">
              <li>Home</li>
            </div>
          </Link>
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
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              <li className="py-2 text-xl">Home</li>
            </Link>
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
      <div className="hidden lg:flex fixed top-[10%] right-0 shadow-xl shadow-black drop-shadow-xl">
        <div className="hover:mr-[0] duration-300 mr-[-100px]">
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 bg-blue-600">
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
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 bg-[#333333]">
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
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 bg-[#6fc2e0]">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:coreyloftus@gmail.com"
            >
              <HiOutlineMail size={30} />
              <span>Email</span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href={resume}
              download
            >
              <BsFillPersonLinesFill size={30} />
              <span>Resume</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
