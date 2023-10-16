import React from "react"
import { Link } from "react-scroll"
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"
import { HiArrowUp } from "react-icons/hi"

const Footer = () => {
  return (
    <div
      name="footer"
      className="text-center w-full h-[10%]] dark:text-gray-100 justify-center items-center pb-8"
    >
      <Link
        to="top"
        smooth={true}
        className="cursor-pointer hover:text-gray-400"
      >
        <div className="flex justify-center group pb-10">
          <span className="group-hover:-translate-y-2 duration-500 dark:group-hover:text-red-500">
            <HiArrowUp size={20} />
          </span>
          <p className="px-4 dark:group-hover:text-red-500">Back to top</p>
          <span className="group-hover:-translate-y-2 duration-500 dark:group-hover:text-red-500">
            <HiArrowUp size={20} />
          </span>
        </div>
      </Link>
      <div className="md:flex p-2 md:justify-evenly">
        <div className="grid grid-cols-4 place-items-center gap-4 md:gap-8">
          <a
            href="https://www.linkedin.com/in/corey-loftus/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-gray-400 dark:hover:text-red-500">
              <FaLinkedin size={40} />
            </span>
          </a>
          <a
            href="https://github.com/coreyloftus"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-gray-400 dark:hover:text-red-500">
              <FaGithub size={40} />
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCZnh34FiIcv3fPBicYBdpTQ"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-gray-400 dark:hover:text-red-500">
              <FaYoutube size={40} />
            </span>
          </a>
          <a href="mailto:coreyloftus@gmail.com">
            <span className="hover:text-gray-400 dark:hover:text-red-500">
              <AiOutlineMail size={40} />
            </span>
          </a>
        </div>
        <div className="pt-8 md:pt-0">
          <ul className="text-lg">
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-red-500"
            >
              <li>About</li>
            </Link>
            <Link
              to="skills"
              smooth={true}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-red-500"
            >
              <li>Skills</li>
            </Link>
            <Link
              to="work"
              smooth={true}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-red-500"
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
