import './App.css';

const About = (props) => {
    return (
        <div className="About" id="about">
            <h3 className="heading-2">About Me</h3>
            <div className="content-container">
                <div className='education-box'>
                        <h4 className='heading-3'>Education:</h4>
                        <ul>
                            <li>General Assembly Software Engineering Intensive</li>
                                <ul>
                                    <li>10/31/22 cohort</li>
                                    <li>anticipated graduation Feb 2023</li>
                                </ul>
                        </ul>
                </div>
                <div className='technology-box'>
                    <h4 className='heading-3'>Experienced in:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
export default About