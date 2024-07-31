import React from 'react'
import "./AboutUs.css"
import aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className='AboutUs-main'>
                <div className='AboutUs-box'>
                    <div className='AboutUs-right'>
                        <div className="News-title">
                            <p>Pukhya</p>
                            <h3>About<span>Us</span></h3>
                        </div>
                        <p>Pukhya is importer, supplier and distributor of quality healthcare medical equipment in India specializing in the fields of various Products Computer-aided Cognitive Rehabilitation, Neuro and Biofeedback, Physiology, Ergonomics, Psychology products , Yoga Research,and Sports Medicine Products.</p>
                        <p>Our partnership integrates cutting-edge technology with medical expertise, delivering streamlined, efficient solutions. Pukhya's commitment to excellence transforms healthcare experiences, driving progress and enhancing outcomes for all stakeholders.</p>
                        <div className="aboutUs-btn">
                            <Link>About Us</Link>
                        </div>
                    </div>
                    <div className='AboutUs-left'>
                        <img src={aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
