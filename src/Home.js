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
            <p>Degree: B.A. in Computer Science</p>
            <p>From: Dallas, Tx</p>
            <p>My name is Rodrick Victdeon Lankford, a motivated and versatile software engineer with deep passion for creativity and innovation. 
              I specialize in building scalable solutions using a diverse set of technologies and programming languages. I am currently residing in Dallas, Texas, 
              and you can find more about my work and skills on this website and GitHub.
              I'm also actively seeking to contribute my expertise to an organization that
              shares my commitment to excellence. My ultimate goal is to harness and improve technology to enhance
              the quality of life for all. I am looking forward to connecting and collaborating in creating a brighter future.</p>
          </p>
          <p>Philosophy: The world is governed by complex forms of computations which we as humans exploit by using
            algorithms, physics, and mathematics to gain more profound perspectives.
          </p>

          {/* <form method="get" action="Rodrick V. Lankford's Resume.pdf">
            <button type="submit" className='button'>Download Resume!</button>
          </form> */}
        </div>

      </div>

      <div className='home_row2'>
        {/* Experience */}
        <div className='home_r2elements'>
          <h1>
            Experiences:
          </h1>
          <ul>
            <li><h3>SayKid Software Developer Internship:</h3> Contributed to comprehensive program testing and debugging procedures.
              Actively collaborated with cross-functional team members to conceptualize and execute interactive software solutions.
              Engaged in rigorous code reviews, upholding the high standards of code quality.
              Pioneered independent research and acquired proficiency in advanced tools and technologies, including DynamoDB, PHP, NoSQL, and WordPress.
              Skillfully diagnosed and rectified software issues to ensure seamless functionality.
              Meticulously documented software specifications and user manuals to facilitate user understanding.
              Played a pivotal role in the seamless deployment of software applications.

            </li>
            <li><h3>SayKid Game Developer Externship:</h3> Developed and debugged game features using Natural Language Processing and JavaScript, enhancing the game's functionality and user experience.
              Produced comprehensive documentation, providing invaluable insights into the development process.
              Rigorously tested game mechanics to ensure a seamless and captivating user interaction.
              Implemented an API to refine search queries, enriching the robot's response capabilities with greater intuition.
              Collaborated seamlessly with colleagues to seamlessly integrate assets into the game.
              Actively participated in team meetings, offering strategic input to drive project success.
              Assisted in meticulous bug tracking and troubleshooting throughout the game development lifecycle.
              Played a vital role in shaping the creative and technical vision of the game, contributing to its overall success.

            </li>
            <li><h3>Vex Robotics:</h3> Led a sizable team in the development of code
              and design for a rover-like robot, overseeing group management and fostering
              effective communication.</li>
            <li><h3>BEST Robotics:</h3> Managed the coding team responsible for the development of a rover-type robot designed for token and tennis ball handling,
              with a focus on scoring points. Collaborated with the marketing team to present
              the robot to a panel of judges, showcasing design schematics and an overview of the code.
            </li>
            <li><h3>The Avenue:</h3> Developed a React-based website aimed at streamlining client enrollment in The Avenues Talent Search program.
              Engaged in client collaboration to grasp project requirements, ensuring alignment with objectives.
              Tested and debugged code to deliver optimal functionality.
              Leveraged industry technologies to tackle challenges.
              Demonstrated self-reliance in project completion and provided valuable insights on process automation and application improvement.

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
          Java, Socket.io, C++, C#, Linux,
          React.JS, Visual Studio, Asp.Net, postgresSQL.
        </p>
      </div>

      <div className='skills_container'>
        <h1>
          Activities:
        </h1>
        <div className='home_r2elements'>

          <ul>
            <li><h3>Black Student Alliance:</h3> This organization nurtures a cohesive community within the
              African-American student population on campus.
              We met regularly and held campus-based events
              to foster unity and engagement.
            </li>

            <li><h3>Men Of Color:</h3> This organization comprises accomplished individuals from
              diverse ethnic backgrounds who actively pursue excellence and foster enduring
              interpersonal connections. We convened regularly to provide mutual support,
              coordinate events, and orchestrated informative career panels.
            </li>

            <li><h3>Cultural Houses Events Manager:</h3> Facilitated events catering to the Carleton community and cultural housing organizations.
              These diverse occasions encompassed, among other activities,
              Thanksgiving gatherings, educational excursions, thought-provoking
              discussions on cultural awareness, and a range of engaging initiatives.
            </li>


          </ul>

        </div>
      </div>


      <div className='home_row3'>
        <h1>
          Contact Me:
        </h1>


        <p>
          <PhoneIcon className='icon' /> 972-341-7772
        </p>
        <p>
          <GitHubIcon className='icon' /> https://github.com/Rodrick12123
        </p>
        <p>
          <EmailIcon className='icon' /> lankfordr51@gmail.com
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
