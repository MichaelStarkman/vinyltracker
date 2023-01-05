import ContactLinksContainer from '../Components/ContactLinksContainter';
import '../css/contact.css';

function Contact() {
  return (
          <div className='contact-info-container'>
            <div className='contact-text-container'>
              <h2>We would love to hear from you!</h2>
              <br></br>
              <p>The Vinyl Tracker team is always looking for ways to make this community better. We would love your feedback, or if you want to drop to say hi, we would love that, too! We appreciate all the support so far.</p>
              <p>-The Vinyl Tracker team</p>
            </div>
            <ContactLinksContainer></ContactLinksContainer>
          </div>
        
  )
}

export default Contact