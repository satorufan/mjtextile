import organization from './img/content_0102.jpg'
import './organization.css';

function Organization () {
    return (
        <div className="company-organization">
            <div className='company-organization-title'>
                <div>ORGANIZATION</div>
                <div className='company-line'></div>
            </div>
            <img src={organization}></img>
        </div>
    );
}

export default Organization;