import React from 'react';
import { GiTerror } from 'react-icons/gi';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-12">

                    <div className='text-center'>
                        <GiTerror className='error' />
                        <h6 className='not-found'>404 Not Found </h6>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;