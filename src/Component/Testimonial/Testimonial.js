import React from 'react';
import "./Testimonial.css";
import { BsChatQuoteFill } from "react-icons/bs";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bg from "../../Assets/About/about.jpg"
import styimg from "../../Assets/About/about.jpg"


const Testimonial = () => {


    return (
        <div className='testimonial'>
            <div className="testimonial-background">
                <img src={bg} alt="" />
            </div>
            <div className="testimonial-main">
                <div className="testimonial-left-head">
                    <p><BsChatQuoteFill /></p>
                    <span>Welcome to</span>
                </div>
                <div className="testimonial-main-body">
                    <div className="testimonial-main-left">
                        <h2>Pukhya</h2>
                        <h4>At Pukhya Private Limited, we provide high-quality sports medicine products designed to enhance performance, support recovery, and prevent injuries. With a focus on innovation and research, we deliver advanced solutions for athletes and fitness enthusiasts, making us a trusted name in sports medicine.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;