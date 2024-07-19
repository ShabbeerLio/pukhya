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
                        <p>At Walls and Dreams, we're not just a construction company; we're your partners in turning visions into exceptional living spaces. With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</p>
                        {/* <div className="testimonial-left-body">
                            <h2>Our Partners </h2>
                            <p>Collaboration is the key to lasting progress. We have partnered with globally renowned agricultural solution providers to bring the latest technology driven solutions at the doorsteps of Indian farming community.</p>
                        </div> */}
                    </div>

                </div>
                {/* <div className="testimonial-main-foot">
                    <div className="testimonial-foot-box">
                        <img src={testimonial2} alt="" />
                        <img src={testimonial1} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Testimonials;
