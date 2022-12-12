import './App.css';

const Projects = () => {
    return (
        <div className="Projects">
            <h3>Projects</h3>
            <div className="content-container">
                <div className='project-box'>
                    <h4>Simon by Corey</h4>
                    <ul>
                        <li>Created November 2022</li>
                        <li>A game, based on Simon by Milton Bradley</li>
                        <li>HTML/CSS, JavaScript</li>
                        <li><a href="https://coreyloftus.github.io/simon-by-corey/" target="_blank" rel="noopener noreferrer">Live deployment</a></li>
                        <li><a href="https://github.com/coreyloftus/simon-by-corey" target="_blank" rel="noopener noreferrer">Github Repo</a></li>
                    </ul>
                    <h4>Brewery Buddy</h4>
                    <ul>
                        <li>Created December 2022</li>
                        <li>Displays data from the OpenBrewery DB API</li>
                        <li>HTML/CSS, JavaScript, React</li>
                        <li><a href="https://dreamy-bienenstitch-fd35ba.netlify.app" target="_blank" rel="noopener noreferrer">Live deployment</a></li>
                        <li><a href="https://github.com/jordbort/project-2-brewery-app" target="_blank" rel="noopener noreferrer">Github Repo</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects