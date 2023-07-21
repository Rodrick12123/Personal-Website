import React from 'react'
import './Projects.css'


function Projects() {
  return (
    <div className='projects'>
      <div className='projects_container'>
        <a href="https://github.com/Rodrick12123/Comps-Project" target="_blank" className='projects_indv'>
            <img src="/picph.PNG" alt="image" />
            <p>
                <div className='project_title'>
                    Pictaphone
                    <div className='description'>
                        This project is a game developed as a website in which players can 
                        choose to play on a pc or remotely on a mobile device. Much like the game pictonary
                        users are given a prompt and asked to draw said prompt to their best ability.
                    </div>
                </div>
            </p>
            <div className='languages'>
                <div className='language'>
                    HTML
                </div>
                <div className='language'>
                    JavaScript
                </div>
                <div className='language'>
                    Socket.io
                </div>
            </div>
            
            
        </a>

        <a href="https://clone-311b0.web.app" target="_blank" className='projects_indv'>
            <img src="/ama.PNG" alt="image" />
            <p>
                
                <div className='project_title'>
                    Amazon Replica
                    <div className='description'>
                        I built this website mainly to develop my skills with creating websites. I used Amazon's
                        old website as inpiration, and replicated as much as I could to the best 
                        of my ability at the time.
                    </div>
                </div>
            </p>
            <div className='languages'>
                <div className='language'>
                    HTML
                </div>
                <div className='language'>
                    JavaScript
                </div>
                <div className='language'>
                    React.js
                </div>
                <div className='language'>
                    Firebase
                </div>
            </div>
            
        </a>

        <a href='https://github.com/Rodrick12123/World-Cup-Website.github.io' target="_blank" className='projects_indv'>
            <img src="/cup.PNG" alt="image" />
            <p>
                <div className='project_title'>
                    World Cup Data
                    <div className='description'>
                        Another website designed to allow its users to filter specific data and stats 
                        to get a better understanding of factors that played big roles in targeted World Cup Statistics.
                    </div>
                </div>
            </p>
            <div className='languages'>
                <div className='language'>
                    HTML
                </div>
                <div className='language'>
                    Python3
                </div>
                <div className='language'>
                    SQL
                </div>
            </div>
            
        </a>

        <a href='https://observablehq.com/d/a12e08e997d1f2aa' target="_blank" className='projects_indv'>
            <img src="/Base.PNG" alt="image" />
            <p>
               
                <div className='project_title'>
                    Baseball Evolution
                    <div className='description'>
                        Encodes MLB data from all years up to 2023 as differn't visualizations that
                        allows users to get a better idea of how the league and individual teams have 
                        changed over the years.
                    </div>
                </div>
            </p>
            <div className='languages'>
                <div className='language'>
                    HTML
                </div>
                <div className='language'>
                    Plot
                </div>
                <div className='language'>
                    JavaScript
                </div>
            </div>
            
        </a>

        <a href='https://github.com/Rodrick12123/Personal-Website' target="_blank" className='projects_indv'>
            <img src="/PW.PNG" alt="image" />
            <p>
                This Website
            </p>
            <div className='languages'>
                <div className='language'>
                    HTML
                </div>
                <div className='language'>
                    React
                </div>
                <div className='language'>
                    JavaScript
                </div>
            </div>
        </a>

      </div>
      <header>More projects from GitHub to be added here</header>
    </div>
  )
}

export default Projects
