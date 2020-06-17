import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
 


class Navbar extends Component {
    render() {
        return (
            <div className="NAVBAR">
                <ul className="navbar" type="none">
                    <li><Link to="/Office" className="link"><i class="fas fa-briefcase"></i>  Office Stationery</Link></li>

                    <li><Link to="/Papers" className="link"><i class="fas fa-print"></i>  Sheets</Link></li>
                    <li><Link to="/Tech" className="link"><i class="fas fa-chalkboard"></i>  Technology</Link></li>
                    <li><Link to="/Clean" className="link"><i class="fas fa-broom"></i>  Cleaning</Link></li>
                    <li><Link to="/Safety" className="link"><i class="fas fa-hard-hat"></i>  Safety Equipment</Link></li>
                    <li><Link to="/User" className="link"><i class="fas fa-user-circle"></i>  User</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
