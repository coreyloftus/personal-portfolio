import "./App.css"

const Projects = () => {
    return (
        <div className="Projects" id="projects">
            <h3 className="heading-2">Projects</h3>
            <div className="content-container">
                <div className="project-box">
                    <div className="project-card">
                        <ul>
                            <h4 className="heading-3">Shoe String</h4>
                            <li>Created January 2023</li>
                            <li>A full CRUD app using the MERN stack</li>
                            <li>Back End: Express, Mongoose, Node</li>
                            <li>Front End: HTML/CSS, JavaScript, React</li>
                            <li>
                                <a href="https://shoe-string.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Live deployment
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/coreyloftus/ShoeString-Backend" target="_blank" rel="noopener noreferrer">
                                    Back End Github Repo
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Calathea-Z/ShoeString-Frontend" target="_blank" rel="noopener noreferrer">
                                    Front End Github Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <ul>
                            <h4 className="heading-3">Brewery Buddy</h4>
                            <li>Created December 2022</li>
                            <li>Displays data from the OpenBrewery DB API</li>
                            <li>HTML/CSS, JavaScript, React</li>
                            <li>
                                <a href="https://brewerybuddy.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Live deployment
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jordbort/project-2-brewery-app" target="_blank" rel="noopener noreferrer">
                                    Github Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="project-card">
                        <ul>
                            <h4 className="heading-3">Simon by Corey</h4>
                            <li>Created November 2022</li>
                            <li>A game, based on Simon by Milton Bradley</li>
                            <li>HTML/CSS, JavaScript</li>
                            <li>
                                <a href="https://coreyloftus.github.io/simon-by-corey/" target="_blank" rel="noopener noreferrer">
                                    Live deployment
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/coreyloftus/simon-by-corey" target="_blank" rel="noopener noreferrer">
                                    Github Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
