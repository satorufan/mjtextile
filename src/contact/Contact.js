import './contact.css';
import banner from './img/banner.jpg';
import location from './img/location.jpg';
import inquiry from './img/inquiry3.jpg';
import { useEffect, useRef } from 'react';

function Contact () {
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [company, setCompany] = useState('');
    // const [message, setMessage] = useState('');

    // const handleEmailChange = (e) => setEmail(e.target.value);
    // const handleNameChange = (e) => setName(e.target.value);
    // const handlePhoneChange = (e) => setPhone(e.target.value);
    // const handleCompanyChange = (e) => setCompany(e.target.value);
    // const handleMessageChange = (e) => setMessage(e.target.value);
    const mapRef = useRef(null);

    const handleImageLoad = () => {
        const mapContainer = mapRef.current;
        if (mapContainer) {
          mapContainer.scrollLeft = mapContainer.scrollWidth;
          mapContainer.scrollTop = mapContainer.scrollHeight;
        }
      };
    
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
                        ZIP 42703, Unit 1010, 329 Seongseo-Ro, Dalseo-Gu, Daegu, Republic of KOREA
                    </div>
                </div>

                <div className='contact-location-rightside'>
                    <div className='contact-location-map' ref={mapRef}
                    style={{
                        // backgroundImage: `url(${})`,
                        backgroundPosition: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <img onLoad={handleImageLoad} src={location}></img>
                    </div>
                </div>
            </div>

            <div className='contact-inquiry'
            style={{
                backgroundImage: `url(${inquiry})`,
                backgroundSize: '2500px',
                backgroundPosition: '50% 100%',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='contact-inquiry-left'>
                    <div className="contact-inquiry-left-content">
                        <div className='contact-inquiry-item'>
                            <div className='contact-inquiry-item-title'>ADDRESS</div>
                            <div className='contact-inquiry-item-detail'>ZIP 42703, Unit 1010, 329 Seongseo-Ro, Dalseo-Gu, Daegu, Republic of KOREA</div>
                        </div>

                        {/* Tel Section */}
                        <div className="contact-inquiry-item">
                            <div className="contact-inquiry-item-title"><b>TEL</b></div>
                            <div className="contact-inquiry-item-detail">
                                +82-53-626-2061~2
                            </div>
                        </div>

                            {/* Fax Section */}
                        <div className="contact-inquiry-item">
                            <div className="contact-inquiry-item-title"><b>FAX</b></div>
                            <div className="contact-inquiry-item-detail">+82-53-722-2414</div>
                        </div>

                            {/* Mobile Section */}
                        <div className="contact-inquiry-item">
                            <div className="contact-inquiry-item-title"><b>MOBILE</b></div>
                            <div className="contact-inquiry-item-detail">
                                +82-10-2080-2252
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-inquiry-right'>
                    <div className='contact-inquiry-right-title'>
                        INQUIRY
                    </div>
                    <div className='contact-inquiry-right-title-line'></div>

                </div>
                {/* <div className='contact-inquiry-frame'>
                    <div className='contact-inquiry-info'>
                        <div className='contact-inquiry-email'>
                            <div className='contact-inquiry-label'>Email</div>
                            
                            <input
                                type='email'
                                className='contact-inquiry-input'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='Enter your email'
                            />
                        </div>

                        <div className='contact-inquiry-name'>
                            <div className='contact-inquiry-label'>Name</div>
                            <input
                                type='text'
                                className='contact-inquiry-input'
                                value={name}
                                onChange={handleNameChange}
                                placeholder='Enter your name'
                            />
                        </div>

                        <div className='contact-inquiry-phone'>
                            <div className='contact-inquiry-label'>Phone Number</div>
                            <input
                                type='tel'
                                className='contact-inquiry-input'
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder='Enter your phone number'
                            />
                        </div>

                        <div className='contact-inquiry-company'>
                            <div className='contact-inquiry-label'>Company</div>
                            <input
                                type='text'
                                className='contact-inquiry-input'
                                value={company}
                                onChange={handleCompanyChange}
                                placeholder='Enter your company name'
                            />
                        </div>
                    </div>
                    
                    <div className='contact-inquiry-content'>
                        <div className='contact-inquiry-label'>How can we help you?</div>
                        <textarea
                        className='contact-inquiry-input-content'
                        value={message}
                        onChange={handleMessageChange}
                        placeholder='Enter your message'
                        />
                    </div>

                    <div className='contact-inquiry-submit'>
                        SEND →
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;