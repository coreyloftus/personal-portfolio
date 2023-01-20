import React from "react"

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#32171a] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-red-500">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi there, I’m Corey.</p>
                    </div>
                    <div>
                        I’m a Full-Stack Developer. As a seasoned start-up founder, I’m adept at combining people skills and technical expertise with business smarts to identify and solve problems. I thrive in dynamic environments, learn quickly, and
                        am a confident and experienced leader. My past careers in: 🏢 real estate technology, 🧘‍♂️ group fitness, 🛍️ retail, and 🎭 theater give me a broad range of points of view to help me understand any challenge. Sometimes I play
                        guitar (love my Baby Martin) and video games (currently Metroid Dread). I love peanut butter.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
