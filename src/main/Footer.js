import { Link } from 'react-router-dom';
import logo from './img/logo_nobg.png'
import './footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-top">
                <div className="footer-title">MYUNGJIN TEXTILE</div>
                <div className="footer-logo"><Link to="/"><img src={logo}></img></Link></div>
            </div>

            <div className="footer-content">
                <div className="footer-contact">
                    <p><b>ADDRESS</b> | UNIT 1010, SUNGSEO ROAD 329 
                                        DALSEOGU, DAEGU, REPUBLIC OF KOREA, 42703</p>
                    <p><b>TEL</b> | +82-53-626-2061 ~ 2</p>
                    <p><b>FAX</b> | +82-53-722-2414</p>
                    <p><b>EMAIL</b> | mjtexkorea@gmail.com</p>
                </div>

                <div className="footer-menu">
                    <Link to="/company"><div>COMPANY</div></Link>
                    <Link to="/product"><div>PRODUCT</div></Link>
                    <Link to="/contact"><div>CONTACT</div></Link>
                </div>
            </div>

            <div className="footer-copyright">
                COPYRIGHT (C) 2010 MYUNGJIN TEXTILE CO., LTD ALL RIGHTS RESERVED
            </div>
        </div>
    );
}

export default Footer;
