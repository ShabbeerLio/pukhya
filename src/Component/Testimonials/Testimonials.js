import React from 'react';
import "./Testimonial.css";
import { BsChatQuoteFill } from "react-icons/bs";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bg from "../../Assets/About/texture-4.png"
import StyleCard from '../StyleCard/StyleCard';


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
                        <h2>Walls & Dreams</h2>
                        <h4>At Walls and Dreams, we're not just a construction company; we're your partners in turning visions into exceptional living spaces.</h4>
                        {/* <p>At Walls and Dreams, we're not just a construction company; we're your partners in turning visions into exceptional living spaces. With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</p> */}
                    </div>
                    <div className="testimonial-main-right">
                        <div className="testimonial-left">
                            <StyleCard />
                        </div>
                        <div className="testimonial-right">
                            <p>With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
