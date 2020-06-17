import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className="FOOTER">
                 <Link to="/Contact" className="link"><h1 className="footer"><i class="fas fa-address-book"></i> Contact</h1></Link>
                
            </div>
        )
    }
}

export default Footer;
