import React from 'react';
import "./Testimonial.css";
import { BsChatQuoteFill } from "react-icons/bs";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bg from "../../Assets/About/texture-4.png"
import styimg from "../../Assets/About/about-us.jpg"


const Testimonials = () => {


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
                        {/* <p>At Walls and Dreams, we're not just a construction company; we're your partners in turning visions into exceptional living spaces. With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</p> */}
                    </div>
                    <div className="testimonial-main-right">
                        <div className="testimonial-left">
                            <div className="testimonial-box">
                                <img src={styimg} alt="" />
                            </div>
                            <div className="testimonial-btn">
                                <p>About Us</p>
                            </div>
                        </div>
                        <div className="testimonial-right">
                            <p>At Walls and Dreams, we're not just a construction company; we're your partners in turning visions into exceptional living spaces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
