import resume from "../Assets/files/Corey Loftus - Software Engineer.pdf"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (aboutInView) {
      setIsVisible(true)
    }
  }, [aboutInView])
  return (
    // About Container
    <div
      name="about"
      className={`w-full min-h-screen text-gray-800 dark:text-gray-100`}
      ref={aboutRef}
    >
      <div
        className={`flex flex-col justify-center items-center w-full h-screen`}
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div
            className={`sm:text-right pb-8 pl-4 ${
              isVisible ? "slide-in-from-left" : "opacity-0"
            }`}
          >
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
        </div>
        {/* Grid Container */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Grid Item 1 */}
          <div
            className={`sm:text-right text-4xl font-bold ${
              isVisible ? "slide-in-from-left" : "opacity-0"
            }`}
          >
            <p>Hi there, I’m Corey.</p>
          </div>
          {/* Grid Item 2 */}
          <div
            className={` ${
              isVisible ? "slide-in-from-right" : "opacity-0"
            } animation-3000`}
          >
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
            <button className=" text-gray-800 dark:text-gray-100 hover:text-gray-100 rounded-sm group border-2 px-4 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
              Download Resume
              <span className="group-hover:-translate-x-2 repeat duration-500">
                {/* React icon arrow */}
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
