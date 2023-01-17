const About = (props) => {
  return (
    <div className="About" id="about">
      <h3 className="heading-2">Experience</h3>
      <div className="about-container">
        <div className="work-box">
          <h4 className="heading-3">Work Experience:</h4>
          <div className="color-box">
            <p>General Assembly</p>
            <p>Software Engineering Intensive</p>
            <p>10/31/22 cohort (graduation Feb 2023)</p>
          </div>
        </div>
        <div className="education-box">
          <h4 className="heading-3">Education:</h4>
          <div className="color-box">
            <p>General Assembly</p>
            <p>Software Engineering Intensive</p>
            <p>10/31/22 cohort (graduation Feb 2023)</p>
          </div>
          <div className="color-box">
            <p>Elon University</p>
            <p>BFA Music Theater (cum laude)</p>
          </div>
        </div>
        <div className="technology-box">
          <h4 className="heading-3">Experienced in:</h4>
          <div className="color-box">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
