import Headshot from "../assets/images/corey-work-headshot-squared.jpg"
const Hero = (props) => {
  return (
    <div className="Hero">
      <div className="half name-container">
        <p className="heading-3">Hi there, I'm</p>
        <p className="heading">Corey Loftus</p>
        <p className="heading-2">Software Developer</p>
      </div>
      <div className="half headshot-container">
        <img src={Headshot} alt="Corey Headshot" />
      </div>
    </div>
  )
}
export default Hero
