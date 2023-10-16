import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
// import {Link as RouterLink} from 'react-router-dom'
const Home = () => {
  return (
    <div name="home" className="h-[90vh] flex items-center">
      {/* container */}
      <div className="max-w-[1000px] px-8 flex flex-col justify-center">
        <p className="text-theater-text-primary">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-theater-text-callout">
          Corey Loftus
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-theater-text-secondary">
          I love to perform.
        </h2>
        <p className="text-theater-text-secondary font-bold py-4 max-w-700">
          Nice to meet you.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-theater-text-primary hover:text-gray-100 rounded-sm group border-2 px-6 py-3 my-2 flex items-center hover:bg-theater-bg-teal hover:border-yellow-500">
              See what I'm about
              <span className="group-hover:rotate-90 duration-300 group-hover:text-yellow-500">
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
