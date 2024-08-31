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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
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
                        <h2>Director Name</h2>
                        <h5>position</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
