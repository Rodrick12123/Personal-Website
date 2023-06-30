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
            <h1>
              About Me
            </h1>
            <p>
              Hello, my name is Rodrick Victdeon Lankford. I am a skilled
               software developer who enjoys the challenge of solving complex 
               software development and design problems. I graduated from 
               Carleton College in June 2023 with a bachelor's degree in Computer Science. 
               My peers know me as reliable and someone who correctly completes assigned 
               duties earlier rather than later. One of my biggest career motivators 
               involves the inquiries of innovative and creative software that push 
               the capabilities of technology to a new level. That said, I desire to 
               continue applying my skills to web development, software 
               development/engineering, and game development to improve the 
               quality of life for all. 
            </p>
            <p>Fun fact my favorite color is gold.</p>
          </div>
        </div>

        <div className='home_row2'>
          {/* Experience */}
          <div className='home_r2elements'>
            <h1>
              Experience:
            </h1>
            <ul>
              <li><h4>SayKid SDE Internship</h4> where I successfully worked with 
              a team to develop a game for which SayKid's toy robot could interactively play against
              a user. Also I worked with a partner to help develop their webpage futher.</li>
              <li><h4>SayKid SDE Externship</h4> is where I spent my winter break developing several
               games for SayKid's toy robot.</li>
              <li><h4>Vex Robotics</h4> which was a robotics competition where I worked with a large team to
              program the code for a rover like robot.</li>
              <li><h4>BEST Robotics</h4> was much like Vex Robotics except with the caveat that my team
               required to build all of the robots parts from scratch and needed to meet differn't specifications.</li>
            </ul>
          </div>
          {/* Image */}
          <p className='home_elements home_image'>Image Here</p>
          {/* Skills */}
          <div className='home_elements'>
            <h1>
              Skills:
            </h1>
            <ol>
              <li>Python3</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Socket.io</li>
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
          
          
        </div>
      
    </div>
  )
}

export default Home
