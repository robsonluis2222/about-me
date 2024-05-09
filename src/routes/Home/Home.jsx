import React from 'react'
import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  return (
    <div className='Home'>
      <img className="profile-img" src="https://media.licdn.com/dms/image/D4E03AQGIM6SywZhUIw/profile-displayphoto-shrink_800_800/0/1712938486008?e=1720656000&v=beta&t=2Zo2pFSuAcE1o6TQF7FZ_ptgwII5COVBg7RiBVrKh70" alt="prof" />
      <div className='me'>
        <span className='my-name'>Robson L. Leite Jr.</span>
        <span className='am'>Web Front-End Developer</span>
      </div>
      <div className='skills-div'>
        <span className='titles-span'>Main Skills</span>
        <div className='skills'>
          <div className='skill'>
            <i class="bi bi-tv"></i>
            <span className='skill-name'>Responsive<br />Applications</span>
          </div>
          <div className='skill'>
            <i class="bi bi-file-plus"></i>
            <span className='skill-name'>Landing Pages</span>
          </div>
          <div className='skill'>
            <i class="bi bi-database-check"></i>
            <span className='skill-name'>API Consumption</span>
          </div>
        </div>
      </div>

      <div className='links'>
        <span className='titles-span'>My Links</span>
        <div class='btns-link'>
          <a href="https://github.com/robsonluis2222/" target="_blank">
          <button className='github'>
              <span className='link-span'>git hub</span>
          </button></a>
          <a href="https://www.linkedin.com/in/robson-luis-95a039303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
          <button className='linkedin'>
              <span className='link-span'>Linkedin</span>
          </button></a>
          <a href="https://wa.me/5547996579387" target="_blank">
          <button className='whatsapp'>
              <span className='link-span'>whatsapp</span>
          </button></a>
        </div>
      </div>
      <div className='techs-div'>
        <span className='titles-span'>Technologies</span>
        <div className='techs'>
          <div className='glass-tech'>
            <img style={{marginRight:'10px'}} src="https://cdn-icons-png.flaticon.com/256/10832/10832132.png" alt="react" />
            <span className='skill-name'>ReactJS</span>
          </div>
          <div className='glass-tech'>
            <img src="https://cdn-icons-png.flaticon.com/256/136/136446.png" alt="react" />
            <span className='skill-name'>HTML</span>
          </div>
          <div className='glass-tech'>
            <img src="https://cdn-icons-png.flaticon.com/256/29/29600.png" alt="react" />
            <span className='skill-name'>CSS</span>
          </div>
          <div className='glass-tech'>
            <img src="https://cdn-icons-png.flaticon.com/256/5968/5968509.png" alt="react" />
            <span className='skill-name'>JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home