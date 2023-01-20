import React from "react"
import HTML from "../Assets/html.png"
import CSS from "../Assets/css.png"
import JavaScript from "../Assets/javascript.png"
import ReactImg from "../Assets/react.png"
import Mongo from "../Assets/mongo.png"
import Postgres from "../Assets/postgres.png"
import Python from "../Assets/python.png"
import Express from "../Assets/express.png"
const Skills = () => {
    return (
        <>
            <div name="skills" className="bg-[#32171a] text-gray-300">
                {/* container */}
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-red-500">Experience</p>
                        <p className="py-4">// These are the technologies I've worked with: </p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                            <p>HTML</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                            <p>CSS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
                            <p>React</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Express} alt="Express icon" />
                            <p>Express</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
                            <p>MongoDB</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
                            <p>Python</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Postgres} alt="Postgres icon" />
                            <p>PostGres</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
