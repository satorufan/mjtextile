import './contact.css';
import banner from './img/banner.jpg';

function Contact () {
    return (
        <div className="contact">
            <div className="contact-banner"
            style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                CONTACT
            </div>
        </div>
    );
}

export default Contact;