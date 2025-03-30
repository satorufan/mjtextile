import About from "./About";
import Home from "./Home";
import Product from "./Product";
import './main.css';

function Main () {
    return(
        <div className="main">
            <Home />
            <About />
            <Product />
        </div>
    );
}

export default Main;