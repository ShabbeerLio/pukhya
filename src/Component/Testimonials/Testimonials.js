import React from 'react';
import "./Testimonial.css";
import { BsChatQuoteFill } from "react-icons/bs";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonial1 from '../../Assets/plogo1.png'
import testimonial2 from '../../Assets/plogo2.png'


const Testimonials = () => {


    return (
        <div className='testimonial'>
            <div className="testimonial-main">
                <div className="testimonial-left-head">
                    <p><BsChatQuoteFill /></p>
                    <span>Welcome to</span>
                </div>
                <div className="testimonial-main-body">
                    <div className="testimonial-main-left">
                        <h2>Walls & Dreams</h2>
                        <p>At the turn of 21st century, Walls & Dreams was conceived as a key enabler in Indian farmers pursuit of enhancing farm productivity and to produce more with limited resources sustainably. In a journey of mere two decades, the company has emerged as one of the Top Most Agrochemical Company in the Indian agricultural services sector, solidifying its position as a leading Agrochemical Company in India</p>
                        <div className="testimonial-left-body">
                            <h2>Our Partners </h2>
                            <p>Collaboration is the key to lasting progress. We have partnered with globally renowned agricultural solution providers to bring the latest technology driven solutions at the doorsteps of Indian farming community.</p>
                        </div>
                    </div>

                </div>
                <div className="testimonial-main-foot">
                    <div className="testimonial-foot-box">
                        <img src={testimonial2} alt="" />
                        <img src={testimonial1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
