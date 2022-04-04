import React from 'react';
import './Watch.css';
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'

const Watch = (props) => {

    const { watch_name, user_name, userImg, productImg, comments, rating } = props.watch;
    return (
        <div className='watch-reviews-container'>
            <div className='d-flex justify-content-center'>
                <img className='productIMG' src={productImg} alt="" />
            </div>
            <div className='mt-3 details-reviews'>

                <h5 className='text-center'><span className='watch-name'>{watch_name}</span> Watch Review</h5>
                <div className='user-review'>
                    <div className='pb-3 user-info d-flex justify-content-center align-items-center'>
                        <img src={userImg} alt="" />
                        <div className='user-comments'>
                            <p><span className='text-end'><MdDriveFileRenameOutline className='comment-icon' /></span> <span className='user-name'>{user_name}</span></p>
                            <small>{comments}</small>
                        </div>
                    </div>
                    <div className='rating d-flex justify-content-between'>
                        <span><small>Rating: {rating}</small></span>
                        <span><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Watch;