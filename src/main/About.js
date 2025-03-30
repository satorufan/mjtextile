import about1 from './img/about/001.png';
import about2 from './img/about/002.png'
import './about.css';
import { useState } from 'react';

const slogans = [
    <div className='about-description-elem-section'>
        <div className="about-description-title">
            High Quality
        </div>
        <div className="about-description-detail">
            We create innovative products with superior quality fibers and lead the future.
        </div>
    </div>
    ,
    <div className='about-description-elem-section'>
        <div className="about-description-title">
            Customer Centric
        </div>
        <div className="about-description-detail">
            Myungjin Textiles, a textile that builds customer trust.
        </div>
    </div>
    ,
    <div className='about-description-elem-section'>
        <div className="about-description-title">
            Sustainability
        </div>
        <div className="about-description-detail">
            Creating new possibilities through innovation and quality.
        </div>
    </div>
];

function About () {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slogans.length - 1 : prevIndex - 1));
    }

    return (
        <div className="main-about">

            <div className="main-about-description">
                <div className="about-description-high-quality">
                    <div className="about-description-img">
                        <div className='about-description-img-elem-left'>
                            <img src={about1}></img>
                        </div>
                        <div className='about-description-img-elem-left'>
                            <img src={about1}></img>
                        </div>
                    </div>
                    <div className="about-description-img">
                        <div className='about-description-img-elem-right'>
                            <img src={about2}></img>
                        </div>
                        <div className='about-description-img-elem-right'>
                            <img src={about2}></img>
                        </div>
                    </div>

                    <div className="about-description-elem">
                        {slogans.map((slogan, idx) => {
                                return (
                                    <div 
                                    key={idx}
                                    className={`about-description-elem-slogan ${idx === currentIndex ? 'active' : ''}`}
                                    style={{
                                        opacity: idx === currentIndex ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out'
                                    }}>
                                        {slogan}
                                    </div>
                                )
                        })}
                        <div className="about-slider">
                            <div className="about-slider-button" onClick={prevSlide}>←</div>
                            
                            <div className="about-slider-indicator">
                                {slogans.map((slogan, idx) => (
                                <div
                                    key={idx}
                                    className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={()=>setCurrentIndex(idx)}
                                ></div>
                                ))}
                            </div>
                            
                            <div className="about-slider-button" onClick={nextSlide}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;