import React from 'react';
import bannerOne from '../../Banners/banner-1.jpg';
import bannerTwo from '../../Banners/banner-2.jpg';
import bannerThree from '../../Banners/banner-3.jpg';
import useProducts from '../hooks/useProducts';
import Watch from '../Watch/Watch';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'


const HomePage = () => {
    const [watchProducts, setWatchProducts] = useProducts();
    const navigate = useNavigate();
    return (

        <div className='pt-3'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active caro-indicator" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='caro-indicator'></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='caro-indicator'></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* First Slider */}
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center align-items-end banner-info mt-5 pt-5'>
                                        <div>
                                            <h1>Welcome Here</h1>
                                            <h3>You can buy your choosy Digital Watch</h3>
                                            <h4>from BD Digital Watch</h4>
                                            <button className='buyNow rounded-pill' onClick={() => navigate('reviews')}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-end align-items-cente'>
                                        <div>
                                            <img src={bannerOne} alt="bannerImg" className='img-fluid banners' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* Second Slider */}
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center align-items-end banner-info mt-5 pt-5'>
                                        <div>
                                            <h1>Look Here</h1>
                                            <h3>Awaiting your choosy Digital Watch</h3>
                                            <h4>So don't be late.</h4>
                                            <button className='buyNow rounded-pill' onClick={() => navigate('reviews')}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-end align-items-cente'>
                                        <div>
                                            <img src={bannerTwo} alt="bannerImg" className='img-fluid banners' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* Third slider */}
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center align-items-end banner-info mt-5 pt-5'>
                                        <div>
                                            <h1>Smart Look</h1>
                                            <h3>Create New moment awiting.</h3>
                                            <h4>So don't be shilly to buy.</h4>
                                            <button className='buyNow rounded-pill' onClick={() => navigate('reviews')}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-end align-items-cente'>
                                        <div>
                                            <img src={bannerThree} alt="bannerImg" className='img-fluid banners' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container'>
                <div className='my-5 py-5'>
                    <h3 className='text-center'>Customers Reciews (3)</h3>
                    <div className="watch-container mt-5">
                        <div className='watch-box'>
                            {

                                watchProducts.slice(0, 3).map(watch => <Watch
                                    key={watch.id}
                                    watch={watch}
                                ></Watch>)
                            }
                        </div>

                    </div>
                    <div className='py-5'>
                        <button className='explore rounded-pill' onClick={() => navigate('reviews')}>Explore for Buying</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomePage;