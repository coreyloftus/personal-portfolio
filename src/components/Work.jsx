import React from "react"
import images from "../Assets/images/images"

const workData = [
  {
    title: "CSS Clips",
    subtitle: "Discover and create vanilla HTML/CSS animations",
    techstack: "Django / Python / Bulma",
    image: images.cssclips,
    repo: "https://github.com/coreyloftus/css-clips",
    deploy: "http://css-clips.herokuapp.com",
  },
  {
    title: "ShoeString",
    subtitle: "A guest book for the world",
    techstack: "React / Express / TailwindCSS",
    image: images.shoestring,
    frontend: "https://github.com/Calathea-Z/ShoeString",
    backend: "https://github.com/coreyloftus/shoe-string-be-dev",
    deploy: "https://shoestring.netlify.app",
  },
  {
    title: "Brewery Buddy",
    subtitle: "Find local brews via the OpenBrewery API",
    techstack: "React / Sass",
    image: images.brewerybuddy,
    frontend: "https://github.com/jordbort/project-2-brewery-app",
    deploy: "https://brewerybuddy.netlify.app",
  },
  {
    title: "Simon by Corey",
    subtitle: "the classic game in vanilla JS",
    techstack: "HTML / CSS / JS",
    image: images.simonbycorey,
    frontend: "https://github.com/coreyloftus/simon-by-corey",
    deploy: "https://simon-by-corey.netlify.app/",
  },
]

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-auto md:h-screen text-gray-300 bg-[#32171a] pt-[40vh] pb-[150vh]"
    >
      <div className="max-w-[1000px] md:h-screen h-full mx-auto p-4 flex flex-col justify-center items-center">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work.</p>
        </div>
        {/* grid parent container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 pb-8">
          {/* each work item in the grid */}
          {workData.map((work) => {
            const list = (
              <div className="hover:scale-105 duration-500 shadow-md shadow-[#32171a90] hover:shadow-[#32171a10]">
                <div className="">
                  <p className="text-2xl font-bold text-center py-2">
                    {work.title}
                  </p>
                  <div className="rounded flex flex-wrap justify-center items-center mx-auto">
                    <div className="w-96">
                      <img
                        src={work.image}
                        className="shadow-lg rounded max-w-full align-middle h-auto border-none object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="text-lg text-white tracking-wider text-center px-2">
                      {work.subtitle}
                    </p>
                    <p className="text-lg text-white tracking-wider text-center">
                      Coded in:{" "}
                      <span className="font-bold">{work.techstack}</span>
                    </p>
                    <div className="pt-8 text-center">
                      <a href={work.deploy} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 ">
                          Live site
                        </button>
                      </a>
                      {work.repo ? (
                        <a
                          href={work.frontend}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                            Code
                          </button>
                        </a>
                      ) : null}
                      {work.frontend ? (
                        <a
                          href={work.frontend}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                            Frontend
                          </button>
                        </a>
                      ) : null}
                      {work.backend ? (
                        <a href={work.backend} target="_blank" rel="noreferrer">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500">
                            Backend
                          </button>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            )
            return list
          })}
        </div>
      </div>
    </div>
  )
}

export default Work
