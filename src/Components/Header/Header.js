import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi'
import './Header.css'
import CustomActive from '../CustomActive/CustomActive';

const Header = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand-lg nav-background">
                <div className="container">
                    <Link to='/' className="navbar-brand"><span className='bd'>BD</span> <span className='brand-name'>Digital Watch</span> </Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> <BiMenuAltRight /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomActive to='/' className="nav-link" aria-current="page">Home</ CustomActive>
                            </li>
                            <li className="nav-item">
                                <CustomActive to='/reviews' className="nav-link">Review</CustomActive >
                            </li>
                            <li className="nav-item">
                                <CustomActive to='/dashBoard' className="nav-link">Dash Board</CustomActive >
                            </li>
                            <li className="nav-item">
                                <CustomActive to='/blogs' className="nav-link">Blogs</CustomActive >
                            </li>
                            <li className="nav-item">
                                <CustomActive to='/about' className="nav-link">About</CustomActive >
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;