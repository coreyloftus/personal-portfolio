import React from "react"
import BreweryBuddy from "../Assets/Brewery-Buddy.png"
import ShoeString from "../Assets/ShoeString.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#32171a]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work.</p>
        </div>
        {/* card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${ShoeString})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold text-white tracking-wider text-center">
                ShoeString
              </p>
              <p className="text-2xl text-white tracking-wider text-center">
                a Full Stack MERN app
              </p>
              <div className="pt-8 text-center">
                <a href="https://shoestring.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/coreyloftus/shoe-string-be-dev"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BreweryBuddy})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold text-white tracking-wider text-center">
                Brewery Buddy
              </p>
              <p className="text-2xl text-white tracking-wider text-center">
                made with React JS
              </p>
              <div className="pt-8 text-center">
                <a href="https://brewerybuddy.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jordbort/project-2-brewery-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
