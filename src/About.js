import './App.css';

const About = (props) => {
    return (
        <div className="About" id="About">
            <h3>About Corey</h3>
            <div className="content-container">
                <div className='education-box'>
                        <h4>Education:</h4>
                        <ul>
                            <li>General Assembly Software Engineering Intensive</li>
                                <ul>
                                    <li>10/31/22 cohort</li>
                                    <li>anticipated graduation Feb 2023</li>
                                </ul>
                        </ul>
                </div>
                <div className='technology-box'>
                    <h4>Experienced in:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
export default About