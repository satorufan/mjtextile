import { Link } from 'react-router-dom';
import logo from './img/logo_nobg.png'
import './footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-top">
                <div className="footer-title">MJ TEX Co., Ltd.</div>
                <div className="footer-logo"><Link to="/"><img src={logo}></img></Link></div>
            </div>

            <div className="footer-content">
                <div className="footer-contact">
                    <p><b>ADDRESS</b> | ZIP 42703, Unit 1010, 329 Seongseo-Ro, Dalseo-Gu, Daegu, Republic of KOREA</p>
                    <p><b>TEL</b> | +82-53-626-2061 ~ 2</p>
                    <p><b>FAX</b> | +82-53-722-2414</p>
                    <p><b>EMAIL</b> | jasonhtex@gmail.com</p>
                </div>

                <div className="footer-menu">
                    <Link to="/company" style={{ textDecoration: "none"}}><div>COMPANY</div></Link>
                    <Link to="/product" style={{ textDecoration: "none"}}><div>PRODUCT</div></Link>
                    <Link to="/contact" style={{ textDecoration: "none"}}><div>CONTACT</div></Link>
                </div>
            </div>

            <div className="footer-copyright">
                COPYRIGHT (C) 2010 MJ TEX CO., LTD ALL RIGHTS RESERVED
            </div>
        </div>
    );
}

export default Footer;
