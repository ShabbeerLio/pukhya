import React, { useEffect } from 'react'
import "./About.css"
import abouti from "../../Assets/About/about2.jpg"
import director from "../../Assets/About/director-sir-pic.jpeg.jpg"
import Aboutcard from '../../Component/AboutP/Aboutcard'
import { useLocation } from 'react-router-dom'
import Testimonial from '../../Component/Testimonial/Testimonial'
import Work from '../../Component/Work/Work'
import PresClients from '../../Component/PresClients/PresClients'
import Testimo from '../../Component/Testimo/Testimo'

const About = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='About'>
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
                        <p>We are the sole distributor of equipment in India of a number of  internationally renowned companies, such as Thought Technology Ltd , Qualisys AB , Neurotracker X , SVT , MES, Nexgenergo , Bertec,Catapult , Fast-twitch isokinitic. We have supplied state of the art equipment in many universities and institutes of repute in our country. Over the years, Pukhya has grown and qualified as a responsible team for prompt after sales support to keep all the equipment in working conditions.
                        Our HQ is located in New Delhi, with our network well spread all over India, with offices at major cities like Bangalore, and Pune.</p>
                        {/* <p>We continually invest in cutting-edge technology and collaborate with global experts to ensure that our products meet the highest standards, making a lasting impact on athletic performance and healthcare.</p> */}
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
                        <h5>Director</h5>
                        <p>As Director of Pukhya Private Limited, Pritam Kumar spearheads the company's growth with a focus on providing high end equipment of international standards to the Indian user, engaged in scientific research in fields as varied as Sports Psychology, Sports Biomechanics, Sports Medicine,  Ergonomics, Physiology, different branches in medical sciences, Rehabilitation, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
