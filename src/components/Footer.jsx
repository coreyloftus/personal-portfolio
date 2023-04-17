import React from "react"
import { Link } from "react-scroll"
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiArrowUp } from "react-icons/hi"

const Footer = () => {
  return (
    <div
      name="footer"
      className="text-center w-full h-[10%]] dark:text-gray-100 justify-center items-center py-8"
    >
      <Link
        to="top"
        smooth={true}
        className="cursor-pointer hover:text-gray-400"
      >
        <div className="flex justify-center group">
          <span className="group-hover:-translate-y-2 duration-500">
            <HiArrowUp size={20} />
          </span>
          <p className="pl-4">Back to top</p>
        </div>
      </Link>
      <div className="flex p-4 justify-evenly">
        <div className="grid grid-cols-3 place-items-center gap-4 md:gap-10">
          <a
            href="https://www.linkedin.com/in/corey-loftus/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-gray-400">
              <FaLinkedin size={40} />
            </span>
          </a>
          <a
            href="https://github.com/coreyloftus"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-gray-400">
              <FaGithub size={40} />
            </span>
          </a>
          <a href="mailto:coreyloftus@gmail.com">
            <span className="hover:text-gray-400">
              <AiOutlineMail size={40} />
            </span>
          </a>
        </div>
        <div>
          <ul className="text-lg">
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer hover:text-gray-400"
            >
              <li>About</li>
            </Link>
            <Link
              to="skills"
              smooth={true}
              className="cursor-pointer hover:text-gray-400"
            >
              <li>Skills</li>
            </Link>
            <Link
              to="work"
              smooth={true}
              className="cursor-pointer hover:text-gray-400"
            >
              <li>Work</li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="pt-4">© Copyright Corey Loftus 2023</p>
    </div>
  )
}

export default Footer
