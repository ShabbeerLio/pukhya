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
                        <h4>With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;