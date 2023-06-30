import React from 'react'
import './Projects.css'


function Projects() {
  return (
    <div className='projects'>
      <div className='projects_container'>
        <a href="https://github.com/Rodrick12123/Comps-Project" target="_blank" className='projects_indv'>
            <img src="/picph.PNG" alt="image" />
            <p>
                Pictaphone
            </p>
        </a>

        <a href="https://github.com/Rodrick12123/amazon-clone" target="_blank" className='projects_indv'>
            <img src="/ama.PNG" alt="image" />
            <p>
                Amazon Replica
            </p>
        </a>

        <a href='https://github.com/Rodrick12123/World-Cup-Website.github.io' target="_blank" className='projects_indv'>
            <img src="/cup.PNG" alt="image" />
            <p>
                World Cup Web
            </p>
        </a>

        <div href='https://observablehq.com/d/a12e08e997d1f2aa' target="_blank" className='projects_indv'>
            <img src="/Base.PNG" alt="image" />
            <p>
                Baseball Evolution
            </p>
        </div>

      </div>
      <header>More to be added here</header>
    </div>
  )
}

export default Projects
