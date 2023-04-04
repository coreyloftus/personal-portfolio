import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
const Home = () => {
  return (
    <div name="home" className="h-screen relative">
      {/* container */}
      <div className="max-w-[1000px] h-full px-8 flex flex-col justify-center">
        <p className="text-red-500">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f1e2e2]">
          Corey Loftus
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#f29e9e]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#f29e9e] py-4 max-w-700">Nice to meet you.</p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-gray-100 rounded-sm group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
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
