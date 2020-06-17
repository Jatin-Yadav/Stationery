import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className="HEADER">
                 <Link to="/" className="link"><h1 className="header">BALAJI STATIONERS & TRADERS</h1> </Link>
                

            </div>
        )
    }
}

export default Header;
