import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
// import {Link as RouterLink} from 'react-router-dom'
const Home = () => {
  return (
    <div name="home" className="h-[90vh] flex items-center">
      {/* container */}
      <div className="max-w-[1000px] px-8 flex flex-col justify-center">
        <p className="dark:text-red-600">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-red-600 dark:text-[#f1e2e2]">
          Corey Loftus
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-[#f29e9e] text-gray-600">
          I'm a Full Stack Developer.
        </h2>
        <p className="dark:text-[#f29e9e] text-gray-700 font-bold py-4 max-w-700">
          Nice to meet you.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="dark:text-gray-100 hover:text-gray-100 rounded-sm group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              See what I'm about
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
