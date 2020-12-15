import React from 'react'
import { Link } from 'react-router-dom'

import About_Screen from '../images/About_Screen.png'

import '../styles/AboutScreen.css'

const AboutScreen = () => {
  return (
    <div className='about-screen'>
      <div className='about-screen__title'>
        <p>BIOGRAPHY</p>
        <h1>ABOUT ME</h1>
      </div>
      <div className='left-right__wrapper'>
        <div className='about-screen__left'>
          <img src={About_Screen} alt='USER' loading='lazy' />
        </div>

        <div className='about-screen__right'>
          <h1>
            <span>S</span>
            <span>U</span>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span> B</span>
            <span>A</span>
            <span>N</span>
            <span>S</span>
            <span>A</span>
            <span>L</span>
          </h1>
          <p>
            Hi! My name is <span>SUHEL BANSAL</span>. I'm from Rajasthan. I'm a
            full stack Web Developer, and I'm very passionate and dedicated to
            my work. I have acquired the skills and knowledge neccessary to
            develop web application on my own.
          </p>
          <div className='about-screen__details'>
            <ul>
              <li>
                <i className='fas fa-gift'></i>
                <span>
                  <label>Birthday: </label>
                  01.01.2000
                </span>
              </li>
              <li>
                <i className='fas fa-calendar-alt'></i>
                <span>
                  <label>Age: </label>
                  20
                </span>
              </li>
              <li>
                <i className='fas fa-map-marker-alt'></i>
                <span>
                  <label>Location: </label>
                  <a
                    href='https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh/@28.498288,77.3759101,11z/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Greater Noida
                  </a>
                </span>
              </li>
              <li>
                <i className='fas fa-laptop-code'></i>
                <span>
                  <label>Interests: </label>
                  Coding, Travelling
                </span>
              </li>
              <li>
                <i className='fas fa-book-reader'></i>
                <span>
                  <label>Study: </label>
                  <a
                    href='https://iilmcet.ac.in/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    IILM CET Greater Noida
                  </a>
                </span>
              </li>
              <li>
                <i className='fas fa-graduation-cap'></i>
                <span>
                  <label>Degree: </label>
                  Pursuing B.tech
                </span>
              </li>

              <li>
                <i className='far fa-envelope'></i>
                <span>
                  <label>Mail: </label>
                  <a
                    href='mailto:suhelbansal@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    suhelbansal@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <i className='fas fa-phone-alt'></i>
                <span>
                  <label>Phone: </label>
                  <a href='tel:8078694318'>8078694318</a>
                </span>
              </li>
            </ul>
          </div>

          <div className='about-screen__button'>
            <Link to='/contact'>Send Message</Link>
          </div>
        </div>
      </div>

      <div className='about-screen__skills'>
        <h1>SKILLS</h1>
        <div className='about-screen__skills-list'>
          <ul>
            <li>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                target='_blank'
                rel='noreferrer'
              >
                #HTML
              </a>
            </li>
            <li>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                target='_blank'
                rel='noreferrer'
              >
                #CSS
              </a>
            </li>
            <li>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                target='_blank'
                rel='noreferrer'
              >
                #JavaScript
              </a>
            </li>
            <li>
              <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                #ReactJS
              </a>
            </li>
            <li>
              <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
                #NodeJS
              </a>
            </li>
            <li>
              <a href='https://expressjs.com/' target='_blank' rel='noreferrer'>
                #ExpressJS
              </a>
            </li>
            <li>
              <a
                href='https://react-bootstrap.github.io/'
                target='_blank'
                rel='noreferrer'
              >
                #ReactBootstrap
              </a>
            </li>
            <li>
              <a
                href='https://www.mongodb.com/'
                target='_blank'
                rel='noreferrer'
              >
                #MongoDB
              </a>
            </li>
            <li>
              <a href='https://jquery.com/' target='_blank' rel='noreferrer'>
                #jQuery
              </a>
            </li>
            <li>
              <a
                href='https://mongoosejs.com/'
                target='_blank'
                rel='noreferrer'
              >
                #Mongoose
              </a>
            </li>
            <li>
              <a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>
                #SASS
              </a>
            </li>
            <li>
              <a
                href='https://firebase.google.com/'
                target='_blank'
                rel='noreferrer'
              >
                #Firebase
              </a>
            </li>
            <li>
              <a
                href='https://www.heroku.com/'
                target='_blank'
                rel='noreferrer'
              >
                #Heroku
              </a>
            </li>
            <li>
              <a href='https://socket.io/' target='_blank' rel='noreferrer'>
                #Socket.io
              </a>
            </li>

            <li>
              <a
                href='https://www.json.org/json-en.html'
                target='_blank'
                rel='noreferrer'
              >
                #JSON
              </a>
            </li>
            <li>
              <a href='https://wordpress.com/' target='_blank' rel='noreferrer'>
                #Wordpress
              </a>
            </li>
            <li>
              <a
                href='https://en.wikipedia.org/wiki/Responsive_web_design'
                target='_blank'
                rel='noreferrer'
              >
                #ResponsiveWeb
              </a>
            </li>
            <li>
              <a
                href='https://www.mongodb.com/mern-stack'
                target='_blank'
                rel='noreferrer'
              >
                #MERNStack
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen
