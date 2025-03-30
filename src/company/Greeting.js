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
                    We produce a wide range of products. <br/>
                    For example, protective clothing, heavy denier, outdoor clothing and bags, backpacks, golf wear, etc.,<br/>
                    from low denier products of 15D and 20D to high denier products of 1000D or more.<br/>
                    Textiles for flight jackets and motorcycle wear are also available.
                </div>
                <div>
                    Myungjin Textiles will keep its promises to customers with a sense of responsibility,<br/>
                    meet the needs of its four major customers, and become a trusted company with continuous dedication.
                </div>
            </div>
        </div>
    );
}

export default Greeting;