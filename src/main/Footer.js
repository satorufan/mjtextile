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
                    <p><b>ADDRESS</b> | MYUNGJIN TEXTILE 2F, 256-3, Cheongsu ro, Suseong-gu, Daegu, Republic of Korea</p>
                    <p><b>TEL</b> | <a href="tel:+825362620061">+82-53-626-2006~2</a></p>
                    <p><b>FAX</b> | +82-53-722-2414</p>
                    <p><b>MOBILE</b> | <a href="tel:+821020802252">+82-10-2080-2252</a></p>
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
