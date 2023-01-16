import "./App.css"
import { HashLink as Link } from "react-router-hash-link"
const Footer = (props) => {
    return (
        <div className="Footer">
            <Link smooth to="/#">
                <p>back to top</p>
            </Link>
        </div>
    )
}
export default Footer
