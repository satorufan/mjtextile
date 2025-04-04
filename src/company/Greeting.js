import './greeting.css';
import greetingbg from './img/greet.gif'

function Greeting () {
    return(
        <div className="company-greeting"
        style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${greetingbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='company-about'>
                <div>ABOUT</div>
                <div className='company-line'></div>

                <div>
                    MJ TEX Co.,Ltd is a company specialized in textiles with a focus on key values such as the top quality and the customer satisfaction.  <br/>
                    We are developing products for Paraglider, Parachute , Military Chute and all other outdoor fabrics.
                    Our dedication to the quality management and interconnected production system for the entire process from weaving,
                    dyeing and coating process. 
                </div>
                <div>
                    MJ TEX Co.,Ltd will honor our promised to the customers 
                    with senses of responsibilities to meet the needs of our customers 
                    and be a trusted company with our continued dedication. 
                </div>
            </div>
        </div>
    );
}

export default Greeting;