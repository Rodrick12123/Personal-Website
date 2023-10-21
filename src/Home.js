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
          <div className='image_container'>
            <img src="/profme.PNG" alt="image" className='home_image'></img>
          </div>
          
          <div className='home_about'>
            <h1>
              About Me
            </h1>
            <p>
              <p>Name: Rodrick V. Lankford</p>
              <p>School: Carleton College</p>
              <p>B.A. in Computer Science</p>
              <p>Age: 22 years</p>
              <p>From: Dallas, Tx</p>
              <p>Hello World, my name is Rodrick Victdeon Lankford. I am a skilled
              programmer who enjoys solving challenging problems. I graduated from 
              Carleton College in June 2023 with a bachelor's degree in Computer Science. 
              One of my biggest career motivators involves developing innovative and creative software that pushes 
              the capabilities of technology to a new level. I am currently looking for an opportunity
              to grow and apply my programming skills within an excellence-focused company. 
              That said, I strive to pursue paths where my endeavors improve the quality of life for all.</p>
            </p>
            <p>Fun fact my favorite color is gold.</p>
            <form method="get" action="Resume For Rodrick Lankford.pdf">
              <button type="submit" className='button'>Download Resume!</button>
            </form>
          </div>

        </div>

        <div className='home_row2'>
          {/* Experience */}
          <div className='home_r2elements'>
            <h1>
              Technical Experiences:
            </h1>
            <ul>
              <li><h3>SayKid Software Developer Internship:</h3> Assisted with software testing and debugging.
              Collaborated with team members to design and implement an interactive program.
              Participated in code reviews to ensure high-quality code.
              Researched and learned new tools and skills such as DynamoDB, PHP, NoSQL, and WordPress.
              Troubleshot and resolved software issues.
              Documented software specifications and user manuals.
              Assisted in the deployment of software.
              </li>
              <li><h3>SayKid Game Developer Externship:</h3> Programmed and debuged game features using Natural Language Processing and JavaScript.
              Created documentation for development processes.
              Tested game mechanics to ensure a smooth and engaging user experience.
              Used an API to handle search queries to give the robot more intuitive response choices.
              Collaborated with coworkers to integrate audio assets into software.
              Participated in team meetings and provide input on strategies.
              Assistd with bug tracking and troubleshooting during the game development process.
              Contributed to the overall creative and technical vision of the game.
              </li>
              <li><h3>Vex Robotics:</h3> Competed with a large team to
              develop the code and design for a rover like robot. Held a leadership role which required managing 
              each individual group and facilitate communication between them.</li>
              <li><h3>BEST Robotics:</h3> Led the coding group who worked on developing the code for a rover-type robot who was designed to throw and pick up tokens and tennis balls to score points.
              Worked with the marketing team whose job was to market off our robot to a panel of judges using detailed design schematics and an overview of our code.
              </li>
              <li><h3>The Avenue:</h3> Built a website using React designed to allow clients to enroll in The Avenues Talent Search program.
              Collaborated with client to understand requirements.
              Tested and debug code to ensure functionality
              Applied up-to-date industry technologies to solve problems.
              Made processing clients information and applications more efficient reducing the time and manpower needed for the company.
              Worked independently to complete projects.
              Applied technical knowledge to offer advice on automating overly complex business processes, and improved their application process.
              Documented code and processes for future reference.
              </li>
            </ul>
          </div>
        </div>
        <div className='skills_container'>
            <h1>
              Skills:
            </h1>
            <p>
              JavaScript, HTML, CSS, Python, REST api, 
              Java, Socket.io, C++, C#, Linux, Ubuntu, 
              React.JS, Visual Studio, Asp.Net, SQL.
            </p>
        </div>

        <div className='skills_container'>
          <h1>
            Activities:
          </h1>
          <div className='home_r2elements'>
              
            <ul>
              <li><h3>Black Student Alliance:</h3> This organization cultivates a 
              sense of community within the African-American student body on campus. We met frequently and 
              hosted events on campus.
              </li>

              <li><h3>Men Of Color:</h3> This is a group of intellectual men of different ethnic backgrounds 
              who pursue excellence and lifelong relationships. We met regularly to check in on each other
              and to plan events and career panels.
              </li>

              <li><h3>Cultural Houses Events Manager:</h3> Hosted events for the Carleton community and cultural 
              housing groups. These various events included but were not limited to Thanksgiving
              meals, field trips, cultural awareness talks, and more.
              </li>


            </ul>

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
