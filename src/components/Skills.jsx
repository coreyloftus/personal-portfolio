import React from "react"
import { skillsImages } from "../Assets/images/images"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (skillsInView) {
      setIsVisible(true)
    }
  }, [skillsInView])

  return (
    <>
      <div
        className="w-full min-h-screen text-gray-800 dark:text-gray-100"
        ref={skillsRef}
      >
        {/* container */}
        <div
          name="skills"
          className="max-w-[1000px] h-full md:h-screen mx-auto p-4 flex flex-col justify-center items-center"
        >
          <div
            className={`${isVisible ? `fade-up duration-500` : `opacity-0`}`}
          >
            <p
              className={`text-4xl font-bold inline border-b-4 border-red-500`}
            >
              Experience
            </p>
            <p className="py-4">
              {"// These are the technologies I've worked with: "}
            </p>
          </div>
          <div
            className={`w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-6 ${
              isVisible ? `fade-up` : `opacity-0`
            }`}
          >
            {skillsImages.map((item) => (
              <div
                className="shadow-lg rounded-md shadow-[#160a0b] dark:hover:bg-red-900 hover:scale-105 duration-500 p-2"
                key={item.name}
              >
                <img
                  className="w-20 mx-auto pb-2"
                  src={item.image}
                  alt={`${item.name} icon`}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
