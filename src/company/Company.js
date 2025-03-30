import Greeting from "./Greeting";
import Organization from "./Organization";
import './company.css';

function Company () {
    return (
        <div className="company">
            <Greeting />
            <Organization />
        </div>
    );
}

export default Company;