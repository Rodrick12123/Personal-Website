import React from 'react'
import './Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function Home() {
  return (
    <div className='home'>
        <div className='home_row1'>
          <div className='home_about'>
            <div className='image_container'>
              <img src="/Me.jpg" alt="image" className='home_image'></img>
              <div className='home_about'>

                
                <h1>
                  About Me
                </h1>
                <p>
                  <p>Name: Rodrick V. Lankford</p>
                  <p>School: Carleton College</p>
                  <p>Age: 22 years</p>
                  <p>From: Dallas, Tx</p>
                  <p>Hello World, my name is Rodrick Victdeon Lankford. I am a skilled
                  programmer who enjoys the challenge of solving challenging problems. I graduated from 
                  Carleton College in June 2023 with a bachelor's degree in Computer Science. 
                  My peers know me as reliable and someone who completes assigned 
                  duties promptly. One of my biggest career motivators 
                  involves the implementation of innovative and creative software that push 
                  the capabilities of technology to a new level. That said, I desire to 
                  continue applying my skills to improve the 
                  quality of life for all.</p>
                </p>
                <p>Fun fact my favorite color is gold.</p>
                <form method="get" action="Resume For Rodrick Lankford.pdf">
                  <button type="submit" className='button'>Download Resume!</button>
                </form>
              </div>
            </div>
            
            
          </div>
        </div>

        <div className='home_row2'>
          {/* Experience */}
          <div className='home_r2elements'>
            <h1>
              Technical Experiences:
            </h1>
            <ul>
              <li><h3>SayKid SDE Internship:</h3> Assist with software testing and debugging.
              Collaborate with team members to design and implement an interactive game module that implements a greedy algorithm using JavaScript for Saykid’s toy robot.
              Participate in code reviews to ensure high-quality code.
              Research and learn new technologies such as DynamoDB, AWS, PHP, and WordPress to help develop a dynamic full-stack web page.
              Troubleshoot and resolve software issues.
              Document software specifications and user manuals.
              Assist in the deployment of software.
              </li>
              <li><h3>SayKid Game Developer Externship:</h3> Code and debug game features using Natural Language Processing and JavaScript.
              Create and maintain documentation for software development processes and procedures.
              Test and iterate game mechanics to ensure a smooth and engaging user experience.
              Use API to handle search queries to give the robot more intuitive response choices.
              Collaborate with coworkers to integrate audio assets into software.
              Participate in team meetings and provide input on strategies.
              Assist with bug tracking and troubleshooting during the game development process.
              Contribute to the overall creative and technical vision of the game.
              </li>
              <li><h3>Vex Robotics:</h3> At this competition I worked with a large team to
              develop the code and design for a rover like robot. I held a leadership role which required me to manage 
              each individual group and facilitate communication between them.</li>
              <li><h3>BEST Robotics:</h3> Led the coding group who worked on developing the code for a rover-type robot who was designed to throw and pick up tokens and tennis balls to score points.
              Worked with the marketing team whose job was to market off our robot to a panel of judges using detailed design schematics and an overview of our code.
              </li>
              <li><h3>The Avenue:</h3> Built a website using React designed to allow clients to enroll in The Avenues Talent Search program.
              Collaborate with client to understand requirements.
              Test and debug code to ensure functionality
              Apply up-to-date industry trends and technologies to solve problems.
              Made processing clients information and applications more efficient reducing the time and manpower needed for the company.
              Work independently to complete projects.
              Applied technical knowledge to offer advice on automating overly complex business processes, and improved their application process.
              Document code and processes for future reference.
              </li>
            </ul>
          </div>
          {/* Image */}
          
          {/* Skills */}
          <div className='home_r2elements'>
            <h1>
              Skills:
            </h1>
            <ol>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.JS</li>
              <li>SQL</li>
              <li>Socket.io</li>
              <li>.Net</li>
              <li>C#</li>
              <li>C++</li>
            </ol>
          </div>
        </div>

        <div className='home_row3'>
          <h1>
            Contact Me:
          </h1>
          
          <p>
            <LinkedInIcon className='icon' /> https://www.linkedin.com/in/rodrickl/
          </p>
          <p>
            <PhoneIcon className='icon' /> 972-341-7772
          </p>
          <p>
            <GitHubIcon className='icon' /> https://github.com/Rodrick12123
          </p>
          <p>
            <EmailIcon className= 'icon' /> lankfordr51@gmail.com
          </p>
          {/* contact form here */}
          <h1>Or Email Me Here:</h1>
          <form className='form' target="_blank" action="https://formsubmit.co/lankfordr51@gmail.com" method="POST">
            <div className="form_container">
              <div className="form_row">
                <div className="form_col">
                  <input type="text" name="name" className="form_control" placeholder="Full Name" required />
                </div>
                <div className="form_col">
                  <input type="email" name="email" className="form_control" placeholder="Email Address" required /> 
                </div>
              </div>
            </div>
            <div className="form_container">
              <textarea placeholder="Your Message" className="form_control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" class="button">Submit Form</button>
          </form>
        </div>
      
    </div>
  )
}

export default Home
