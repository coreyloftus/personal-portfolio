import React from "react"
import skillsImages from "../Assets/images/images"

const skillsData = [
  {
    name: "HTML",
    image: skillsImages.html,
  },
  {
    name: "CSS",
    image: skillsImages.css,
  },
  {
    name: "JavaScript",
    image: skillsImages.javascript,
  },
  {
    name: "React",
    image: skillsImages.react,
  },
  {
    name: "Python",
    image: skillsImages.python,
  },
  {
    name: "Express",
    image: skillsImages.express,
  },
  {
    name: "MongoDB",
    image: skillsImages.mongo,
  },
  {
    name: "PostGres",
    image: skillsImages.postgres,
  },
]

const Skills = () => {
  return (
    <>
      <div name="skills" className="w-full h-screen bg-[#32171a] text-gray-100">
        {/* container */}
        <div className="max-w-[1000px] h-full md:h-screen mx-auto p-4 flex flex-col justify-center items-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              Experience
            </p>
            <p className="py-4">
              // These are the technologies I've worked with:{" "}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-6">
            {skillsData.map((item) => (
              <div className="shadow-lg rounded-md shadow-[#160a0b] hover:bg-red-900 hover:scale-105 duration-500 p-2">
                <img
                  className="w-20 mx-auto pb-2"
                  src={item.image}
                  alt="{skill.name} icon"
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
