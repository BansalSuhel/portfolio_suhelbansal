import React, { useEffect } from 'react'
import Typed from 'typed.js'
import Particles from 'react-particles-js'

import BansalCircle from '../images/BansalCircle.jpg'
import '../styles/HomeScreen.css'
import '../styles/LeftToRightAnimation.css'

const HomeScreen = () => {
  useEffect(() => {
    var options = {
      strings: ['Web Developer', 'Student', 'Traveller'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    }

    const typed = new Typed('.type', options)

    return function cleanup() {
      typed.destroy()
    }
  })

  return (
    <>
      <div className='home-screen'>
        <div className='home-screen__overlay'></div>
        <div className='home-screen__particles-wrapper'>
          <Particles
            params={{
              particles: {
                number: {
                  value: 50,
                },
                size: {
                  value: 3,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
              },
            }}
          />
          {/* id#tsparticles  */}
        </div>

        <div className='home-screen__div'>
          <img
            src={BansalCircle}
            alt='Profile'
            className='home-screen__img'
            loading='lazy'
          />
          <h1 className='home-screen__name'>
            SUHEL <span className='name'>BANSAL</span>
          </h1>
          <p className='home-screen__about'>
            I'm a <span className='type'></span>
          </p>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
