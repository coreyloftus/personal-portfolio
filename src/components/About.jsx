import resume from "../Assets/files/Corey Loftus - Software Engineer.pdf"
import { HiArrowNarrowLeft } from "react-icons/hi"

const About = () => {
  return (
    // About Container
    <div name="about" className="w-full h-screen bg-[#32171a] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        {/* Grid Container */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Grid Item 1 */}
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi there, I’m Corey.</p>
          </div>
          {/* Grid Item 2 */}
          <div>
            <div className="py-2">
              I’m a Full-Stack Developer. As a seasoned start-up founder, I’m
              adept at combining people skills and technical expertise with
              business smarts to identify and solve problems. I thrive in
              dynamic environments, learn quickly, and am a confident and
              experienced leader.
            </div>
            <div className="py-2">
              My past careers in: 🏢 real estate technology, 🧘‍♂️ group fitness,
              🛍️ retail, and 🎭 theater give me a broad range of points of view
              to help me understand any challenge. Sometimes I play guitar (love
              my Baby Martin) and video games (currently Metroid Dread). I love
              peanut butter.
            </div>
          </div>
        </div>
        {/* Resume Button */}
        <div className="py-4">
          <a href={resume} download>
            <button className="text-white rounded-sm group border-2 px-4 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              Download Resume
              <span className="group-hover:-translate-x-2 repeat duration-500">
                <HiArrowNarrowLeft className="ml-4" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
