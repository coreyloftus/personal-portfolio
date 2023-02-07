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
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#32171a] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li>Work</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#32171a] flex flex-col justify-center items-center"
        }
      >
        <Link to="home" smooth={true} duration={500} onClick={handleClick}>
          <li className="py-6 text-4xl">Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={handleClick}>
          <li className="py-6 text-4xl">About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
          <li className="py-6 text-4xl">Skills</li>
        </Link>
        <Link to="work" smooth={true} duration={500} onClick={handleClick}>
          <li className="py-6 text-4xl">Work</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
          <li className="py-6 text-4xl">Contact</li>
        </Link>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/corey-loftus/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/coreyloftus"
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
