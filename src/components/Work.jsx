import React, { useState, useEffect } from "react"
import { workImages } from "../Assets/images/images"
import { useInView } from "react-intersection-observer"

const getImageByName = (name) => {
  const imageObj = workImages.find((image) => image.name === name)
  return imageObj ? imageObj.image : null
}

const workData = [
  {
    title: "CryoLabz Website",
    subtitle: "A website for a cryotherapy clinic",
    techstack: "Next.js, TailwindCSS",
    image: getImageByName("Cryolabz"),
    frontend: "https://github.com/coreyloftus/CryoLabz",
    deploy: "https://www.cryolabz.net",
    tags: ["nextjs", "tailwindcss"],
  },
  {
    title: "CSS Clips",
    subtitle: "Discover and create vanilla HTML/CSS animations",
    techstack: "Django, Python, Bulma",
    image: getImageByName("CSSClips"),
    repo: "https://github.com/coreyloftus/css-clips",
    deploy: "http://css-clips.herokuapp.com",
    tags: ["django", "python", "bulma"],
  },
  {
    title: "ShoeString",
    subtitle: "A guest book for the world",
    techstack: "React, Express, MongoDB, TailwindCSS",
    image: getImageByName("ShoeString"),
    frontend: "https://github.com/Calathea-Z/ShoeString",
    backend: "https://github.com/coreyloftus/shoe-string-be-dev",
    deploy: "https://shoestring.netlify.app",
    tags: ["react", "express", "tailwindcss", "mongodb", "firebase"],
  },
  {
    title: "Brewery Buddy",
    subtitle: "Find local brews via the OpenBrewery API",
    techstack: "React, Sass",
    image: getImageByName("BreweryBuddy"),
    frontend: "https://github.com/jordbort/project-2-brewery-app",
    deploy: "https://brewerybuddy.netlify.app",
    tags: ["react", "sass"],
  },
  {
    title: "Simon by Corey",
    subtitle: "the classic game in vanilla JS",
    techstack: "HTML, CSS, JS",
    image: getImageByName("SimonByCorey"),
    frontend: "https://github.com/coreyloftus/simon-by-corey",
    deploy: "https://simon-by-corey.netlify.app/",
    tags: ["html", "css", "js"],
  },
]

const Work = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref: workRef, inView: workInView } = useInView({ threshold: 0.1 })
  useEffect(() => {
    if (workInView) {
      setIsVisible(true)
    }
  }, [workInView])
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-800 dark:text-gray-100"
      ref={workRef}
    >
      <div
        className={`max-w-[1000px] h-full mx-auto p-4 flex flex-col justify-center items-center`}
      >
        <div
          className={`pb-2 ${isVisible ? `fade-up duration-500` : `opacity-0`}`}
        >
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Work
          </p>
          <p className="py-6">{"// Check out some of my recent work."}</p>
        </div>
        {/* grid parent container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-4">
          {/* each work item in the grid */}
          {workData.map((work) => {
            const list = (
              <div
                className={`shadow-lg rounded-md dark:shadow-[#160a0b] hover:shadow-2xl dark:hover:bg-red-900 hover:scale-105 duration-500 ${
                  isVisible ? `fade-up duration-500` : `opacity-0`
                }`}
                key={work.title}
              >
                <div className="">
                  <p className="text-2xl font-bold text-center py-2">
                    {work.title}
                  </p>
                  <div className="rounded flex flex-wrap justify-center items-center mx-auto">
                    <div className="w-96 p-2">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="shadow-lg rounded max-w-full align-middle h-auto border-none object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="text-lg dark:text-gray-100 tracking-wider text-center px-2">
                      {work.subtitle}
                    </p>
                    <p className="text-lg dark:text-gray-100 tracking-wider text-center">
                      <span className="font-bold">
                        {work.tags.map((tag) => {
                          return (
                            <span key={tag} className="px-1">
                              #{tag}{" "}
                            </span>
                          )
                        })}
                      </span>
                    </p>
                    <div className="pt-8 text-center">
                      <a href={work.deploy} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-sm px-4 py-3 m-2 bg-gray-50 text-gray-700 font-bold text-lg hover:bg-red-500 hover:text-gray-100">
                          Live site
                        </button>
                      </a>
                      {work.repo ? (
                        <a href={work.repo} target="_blank" rel="noreferrer">
                          <button className="text-center rounded-sm px-4 py-3 m-2 bg-gray-50 text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500 hover:text-gray-100">
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
                          <button className="text-center rounded-sm px-4 py-3 m-2 bg-gray-50 text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500 hover:text-gray-100">
                            Frontend
                          </button>
                        </a>
                      ) : null}
                      {work.backend ? (
                        <a href={work.backend} target="_blank" rel="noreferrer">
                          <button className="text-center rounded-sm px-4 py-3 m-2 bg-gray-50 text-gray-700 font-bold text-lg hover:bg-red-500 hover:border-red-500 hover:text-gray-100">
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
