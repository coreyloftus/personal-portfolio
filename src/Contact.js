import './App.css';
const Contact = (props) => {
    return (
        <div className="Contact" id="Contact">
                <div>
                    <h4 className="heading-2">Connect with me here:</h4>
                    <div className='social-links'>
                                <a
                                className="link"
                                href="https://github.com/coreyloftus" target="_blank" rel="noopener noreferrer">
                                💻 on Github
                                </a>
                                <a
                                className="link"
                                href="https://www.linkedin.com/in/corey-loftus/" target="_blank" rel="noopener noreferrer">
                                💼 on LinkedIn
                                </a>
                                <a
                                className="link"
                                href="https://www.hackerrank.com/coreyloftus" target="_blank" rel="noopener noreferrer">
                                👨🏻‍💻 on hackerrank
                                </a>
                    </div>
                </div>
        </div>
    )
}
export default Contact