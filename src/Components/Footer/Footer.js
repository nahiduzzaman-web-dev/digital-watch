import React from 'react';
import { MdOutlineWatch } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import './Footer.css';


const Footer = () => {
    const [watchProducts, setWatchProducts] = useProducts();
    const navigate = useNavigate();
    return (
        <div className='container-fluid mt-5 footer'>
            <div className='container py-4'>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h4>About Us</h4>
                        <p>
                            <strong>BD Digital Watch</strong> provides wonderful hand watch.
                            You can get adventure as an Astronaut. So don't be late, visit our
                            ccustomers reviews and buy and make this great world your own in the palm of your hand.
                        </p>
                        <button className='review-btn rounded-pill'>Reviews</button>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4>Letest Products</h4>
                        <p><MdOutlineWatch /> CASIO G-SHOCK G-100BB-1AJF Digital Watch</p>
                        <p><MdOutlineWatch /> Tissot T-Touch Expert Solar</p>
                        <p><MdOutlineWatch /> Suunto Core</p>
                        <p><MdOutlineWatch /> Timex Expedition Shock CAT</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4>Products Image</h4>
                        <div>
                            <div className='product-img'>
                                {
                                    watchProducts.map(watch =>

                                        <span
                                            key={watch.id}
                                        >

                                            <img className='footer-product-image' src={watch.productImg} alt="" onClick={() => navigate('reviews')}
                                                key={watch.id}
                                            />
                                        </span>


                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className='copyright'>

                            <span><small>&copy; Copyright All rights reserved by <b>BD Digital Watch</b></small></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-md-flex justify-content-md-end'>
                            <div className='social-icons'>
                                <a target="_blank" href="https://www.facebook.com/nahiduzzaman28"><span> <FaFacebookF /> </span></a>
                                <a target="_blank" href=""><span> <AiFillInstagram /></span></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCfSCklo94X_Z8T_pTB2IsOA"><span> <IoLogoYoutube /></span></a>
                                <a target="_blank" href="https://github.com/nahiduzzaman2021"><span> <AiFillGithub /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;