import React from 'react';
import useProducts from '../hooks/useProducts';
import Watch from '../Watch/Watch';
import './Reviews.css'

const Reviews = () => {
    const [watchProducts, setWatchProducts] = useProducts();

    return (
        <div className='container'>
            <h2 className='text-center'>Exclusive Products reviews</h2>
            <p className='text-center'>SEE & THINK & BUY</p>

            <div className="watch-container">
                <div className='watch-box'>
                    {
                        watchProducts.map(watch => <Watch
                            key={watch.id}
                            watch={watch}
                        ></Watch>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Reviews;