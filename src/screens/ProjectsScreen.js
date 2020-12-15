import React from 'react'

import GroMore from '../images/GroMore.png'
import Portfolio from '../images/Portfolio.png'
import Chat from '../images/Chat.png'
import Weather from '../images/Weather.png'

import '../styles/ProjectScreens.css'
import '../styles/LeftToRightAnimation.css'

const ProjectsScreen = () => {
  return (
    <div className='project-screen'>
      <h1>My Work</h1>

      <div className='project-screen__card-wrapper'>
        <a
          href='http://gromoreshoppe.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='card card-one'>
            <div className='card__upper'>
              <img src={GroMore} alt='GroMore' loading='lazy' />
            </div>
            <div className='card__lower'>
              <h2>GroMoreShoppe</h2>
              <div className='card__lower-list'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>MongoDB</li>
                  <li>ReactBootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </a>

        <a href='https://suhelbansal.com/' target='_blank' rel='noreferrer'>
          <div className='card card-two'>
            <div className='card__upper'>
              <img src={Portfolio} alt='Portfolio' loading='lazy' />
            </div>
            <div className='card__lower'>
              <h2>Portfolio</h2>
              <div className='card__lower-list'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </a>

        <a
          href='http://chat-room-app12.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='card card-three'>
            <div className='card__upper'>
              <img src={Chat} alt='Chat' loading='lazy' />
            </div>
            <div className='card__lower'>
              <h2>ChatRoom</h2>
              <div className='card__lower-list'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Socket.io</li>
                </ul>
              </div>
            </div>
          </div>
        </a>

        <a
          href='https://weather-app-d7054.firebaseapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <div className='card card-four'>
            <div className='card__upper'>
              <img src={Weather} alt='Weather' loading='lazy' />
            </div>
            <div className='card__lower'>
              <h2>WeatherWebApp</h2>
              <div className='card__lower-list'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectsScreen
