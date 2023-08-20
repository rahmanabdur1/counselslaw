import React from 'react';
import './Navbar.css'
import logo from '../../../assets/home.png'
import { Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
    
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/service">Terms of Services</Link>
            </div>
        </nav>
    );
};

export default Navbar;