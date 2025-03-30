import './contact.css';
import banner from './img/banner.jpg';
import location from './img/location.jpg';
import inquiry from './img/inquiry.jpg';

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

            <div className='contact-location'>
                <div className='contact-location-leftside'>
                    <div className='contact-location-title'>LOCATION</div>
                    <div className='contact-location-title-line'></div>
                    <div className='contact-location-detail'>
                        100-32 Galsan-dong, Dalseo District, Daegu <br/>
                        10F, Myungjin Textile
                    </div>
                </div>

                <div className='contact-location-rightside'>
                    <div className='contact-location-map'
                    style={{
                        backgroundImage: `url(${location})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '0% 20%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        
                    </div>
                </div>
            </div>

            <div className='contact-inquiry'
            style={{
                backgroundImage: `url(${inquiry})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='contact-inquiry-frame'>
                    <div className='contact-inquiry-info'>
                        <div className='contact-inquiry-email'>
                            <div className='contact-inquiry-label'>Email</div>
                            <div className='contact-inquiry-input'></div>
                        </div>

                        <div className='contact-inquiry-name'>
                            <div className='contact-inquiry-label'>Name</div>
                            <div className='contact-inquiry-input'></div>
                        </div>

                        <div className='contact-inquiry-phone'>
                            <div className='contact-inquiry-label'>Phone Number</div>
                            <div className='contact-inquiry-input'></div>
                        </div>

                        <div className='contact-inquiry-company'>
                            <div className='contact-inquiry-label'>Company</div>
                            <div className='contact-inquiry-input'></div>
                        </div>
                    </div>
                    
                    <div className='contact-inquiry-content'>
                        <div className='contact-inquiry-label'>How can we help you?</div>
                        <div className='contact-inquiry-input'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;