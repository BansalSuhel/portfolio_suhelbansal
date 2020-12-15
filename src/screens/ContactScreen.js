import React, { useEffect } from 'react'
import emailjs from 'emailjs-com'

import '../styles/ContactScreen.css'
import '../styles/LeftToRightAnimation.css'

const ContactScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const messageHandler = () => {
    document.getElementById('message__para').style.display = 'block'
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          messageHandler()
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className='contact-screen'>
      <h1 className='contact-screen__heading'>Get In Touch</h1>

      <div className='form-map__wrapper'>
        <div className='contact-screen__form'>
          <p>Please fill out the form on this section to contact with me.</p>

          <form onSubmit={sendEmail}>
            <p id='message__para'>Thank You. will contact you soon.</p>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                required
                autoComplete='off'
                name='name'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email'
                required
                autoComplete='off'
                name='email'
              />
            </div>
            <div className='form-group'>
              <textarea
                placeholder='Message'
                required
                autoComplete='off'
                name='message'
              />
            </div>
            <div className='form-group'>
              <button type='submit'>Send Message</button>
            </div>
          </form>
        </div>

        <div className='contact-screen__map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224407.5183620305!2d77.37590966992762!3d28.498589734388627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1607411846925!5m2!1sen!2sin'
            width='400'
            height='300'
            style={{ border: '0' }}
            aria-hidden='false'
            title='map'
          ></iframe>
        </div>
      </div>

      <footer>
        <p className='mail-para'>
          Mail me at
          <a href='mailto:suhelbansal@gmail.com'> suhelbansal@gmail.com</a>
        </p>

        <div className='contact-screen__social-media'>
          <a
            href='https://www.facebook.com/suhelbansal'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://twitter.com/BansalSuhel'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.instagram.com/they_call_me_bansal/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/suhel-bansal-1017b8179/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            href='https://github.com/BansalSuhel'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default ContactScreen
