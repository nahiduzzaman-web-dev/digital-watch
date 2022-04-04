import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import myImg from '../../Banners/nahid.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-6">
                    <div className=' img_content'>
                        <div className='my-image'>
                            <img src={myImg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='about-me-p'>
                            <h3 className='text-center'>About Me</h3>
                            <h6 className='text-center'>Name: Md. Nahiduzzaman Nahid</h6>
                            <p>Hello, I am Md. Nahiduzzaman. I am a little bit talented, BUT ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
                                Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.

                                A key strength is communication; building strong relationships with people in order to deliver the best results.

                                Recently, I completed a BSC degree , including <b>Computer Science & Engineering</b> at the <b>Daffodil Internation University</b> and I am now fully unemployed and searching a good job.</p>
                            <div className='fs-3 d-flex justify-content-center align-items-center'>
                                <div>
                                    <a target="_blank" href="https://www.facebook.com/nahiduzzaman28"><span> <FaFacebookF /> </span></a>
                                    <a target="_blank" href="https://github.com/nahiduzzaman2021"><span> <AiFillGithub /></span></a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;