import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
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
      <BrowserRouter>
        <nav className="nav-bar">
          <Link to="/"><img src={logo}></img></Link>
          <Link to="/company" style={{ textDecoration: "none"}}><div>COMPANY</div></Link>
          <Link to="/product" style={{ textDecoration: "none"}}><div>PRODUCT</div></Link>
          <Link to="/contact" style={{ textDecoration: "none"}}><div>CONTACT</div></Link>
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
