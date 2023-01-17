import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Contact = (props) => {
  return (
    <div className="Contact" id="contact">
      <h4 className="heading-2">Connect with me:</h4>
      <span className="social-link">
        <a
          className="link"
          href="https://github.com/coreyloftus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" /> on Github
        </a>
      </span>
      <span className="social-link">
        <a
          className="link"
          href="https://www.linkedin.com/in/corey-loftus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" /> on LinkedIn
        </a>
      </span>
    </div>
  )
}
export default Contact
