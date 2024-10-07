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
                        <h4>The advancement of technology, along with science, has helped us to become self-reliant in all spheres of life. With the innovation of a particular technology, it becomes part of society and integral to human lives after a point in time. Pukhya Private Limited was established with the mission to provide high end equipment of international standards to the Indian user, engaged in scientific research in fields as varied as Sports Psychology, Sports Biomechanics, Sports Medicine,  Ergonomics, Physiology, different branches in medical sciences, Rehabilitation, etc.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;