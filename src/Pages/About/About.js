import React, { useEffect } from 'react'
import "./About.css"
import abouti from "../../Assets/About/about2.jpg"
import director from "../../Assets/About/director-sir-pic.jpeg.jpg"
import Aboutcard from '../../Component/AboutP/Aboutcard'
import { useLocation } from 'react-router-dom'
import aboutb from "../../Assets/About/about-banner.jpeg"
import Testimonial from '../../Component/Testimonial/Testimonial'
import Work from '../../Component/Work/Work'
import PresClients from '../../Component/PresClients/PresClients'
import Testimo from '../../Component/Testimo/Testimo'

const About = (props) => {

    return (
        <div className='About'>
            {/* <div className="about-banner">
                <img src={aboutb} alt="" />
            </div> */}
            <Testimonial />
            <div className='About-main'>
                <div className="about-title">
                    <p>Pukhya</p>
                    <h3>About<span>Us</span></h3>
                </div>
                <div className='About-box'>
                    <div className="about-right">
                        <img src={abouti} alt="" />
                    </div>
                    <div className="about-left">
                        <p>Welcome to Pukhya Private Limited, a leader in sports medicine and research products. Our mission is to empower athletes, fitness enthusiasts, and healthcare professionals by providing top-quality, scientifically-backed solutions that enhance performance, support recovery, and prevent injuries. With a deep commitment to innovation, research, and customer satisfaction, we are dedicated to advancing the field of sports medicine and contributing to the overall well-being of the athletic community.</p>
                        <p>We continually invest in cutting-edge technology and collaborate with global experts to ensure that our products meet the highest standards, making a lasting impact on athletic performance and healthcare.</p>
                    </div>
                </div>
                <Aboutcard />
            </div>
            <PresClients />
            <Work />
            <Testimo />
            <div className='About-main'>
                <div className='About-box-director'>
                    <div className="about-right-director">
                        <img src={director} alt="" />
                    </div>
                    <div className="about-left-director">
                        <h2>PRITAM KUMAR</h2>
                        <h5>CEO</h5>
                        <p>As CEO of Pukhya Private Limited, Pritam Kumar spearheads the company's growth with a focus on innovation and excellence in sports medicine. His leadership drives the development of cutting-edge products and solutions, shaping Pukhya’s success in the global market.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
