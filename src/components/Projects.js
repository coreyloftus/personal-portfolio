const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <h3 className="heading-2">Projects</h3>
      <div className="all-projects-box">
        <div className="project-card">
          <section className="project-desc">
            <h4 className="heading-3">Shoe String</h4>
            <p>Created January 2023</p>
            <p>A full CRUD app using the MERN stack</p>
            <p>Back End: Express, Mongoose, Node</p>
            <p>Front End: HTML/CSS, JavaScript, React</p>
            <p>
              <a
                href="https://shoe-string.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live deployment
              </a>
            </p>
            <p>
              <a
                href="https://github.com/coreyloftus/ShoeString-Backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back End Github Repo
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Calathea-Z/ShoeString-Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front End Github Repo
              </a>
            </p>
          </section>
        </div>
        <div className="project-card">
          <section className="project-desc">
            <h4 className="heading-3">Brewery Buddy</h4>
            <p>Created December 2022</p>
            <p>Displays data from the OpenBrewery DB API</p>
            <p>HTML/CSS, JavaScript, React</p>
            <p>
              <a
                href="https://brewerybuddy.netpfy.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live deployment
              </a>
            </p>
            <p>
              <a
                href="https://github.com/jordbort/project-2-brewery-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </p>
          </section>
        </div>
        <div className="project-card">
          <section className="project-desc">
            <h4 className="heading-3">Simon by Corey</h4>
            <p>Created November 2022</p>
            <p>A game, based on Simon by Milton Bradley</p>
            <p>HTML/CSS, JavaScript</p>
            <p>
              <a
                href="https://coreyloftus.github.io/simon-by-corey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live deployment
              </a>
            </p>
            <p>
              <a
                href="https://github.com/coreyloftus/simon-by-corey"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects
