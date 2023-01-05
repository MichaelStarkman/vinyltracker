import React from 'react'
import '../css/contact.css'

function ContactLinksContainer() {
  return (
    <div className="contact-icon-container">
        <div className="connect">
            <a href="https://www.linkedin.com/in/michaelstarkman/" target="_blank" rel="noreferrer">
                    <img className="contact-link" src="https://i.imgur.com/tUxbDbw.png" alt="LinkedIn"  />
                </a>
                <p>LinkedIn</p>
            </div>
            <div className="connect">
                <a href="https://github.com/MichaelStarkman" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/CH3X7YX.png" alt="GitHub" className="contact-link" />
                </a>
                <p>GitHub</p>
            </div>
            <div className="connect">
                <a href="https://michaelstarkman.dev" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/aNRmy6N.png" alt="Portfolio" className="contact-link" />
                </a>
                <p>Portfolio</p>
            </div>
            <div className="connect">
                <a href="mailto: michaelstarkman@gmail.com" target="_blank" rel="noreferrer">
                    <img src="https://i.imgur.com/2drZltB.png" alt="Gmail" className="contact-link" />
                </a>
                <p>Email</p>
            </div>
    </div>
  )
}

export default ContactLinksContainer