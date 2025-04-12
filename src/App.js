import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import logo from './main/img/logo.gif'
import About from './main/About';
import Main from "./main/Main";
import Footer from "./main/Footer";
import Company from "./company/Company";
import Products from "./products/Products";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav className="nav-bar">
          <Link to="/"><img src={logo}></img></Link>
          <div> </div>
          
          <div className="nav-bar-web">
            <Link to="/company" style={{ textDecoration: "none"}}><div>COMPANY</div></Link>
            <Link to="/product" style={{ textDecoration: "none"}}><div>PRODUCT</div></Link>
            <Link to="/contact" style={{ textDecoration: "none"}}><div>CONTACT</div></Link>
          </div>

          <div className="nav-bar-mobile">
              
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/company" className="nav-link">COMPANY</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/product" className="nav-link">PRODUCT</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </nav>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
