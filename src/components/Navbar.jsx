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
    <div className="box-border relative top-0 w-screen px-4 bg-[#32171a] text-gray-100">
      <div className="flex items-center justify-between">
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
        <div className="mt-2">
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
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/corey-loftus/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/coreyloftus"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2e0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:coreyloftus@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
