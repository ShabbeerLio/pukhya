import React, { useEffect } from 'react'
import "./About.css"
import abouti from "../../Assets/About/about.jpg"
import director from "../../Assets/About/director-sir-pic.jpeg.jpg"
import Aboutcard from '../../Component/AboutP/Aboutcard'
import { useLocation } from 'react-router-dom'

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

        // Ensure dataLayer is initialized before the GA script loads
        // window.dataLayer = window.dataLayer || [];
        // function gtag() {
        //   dataLayer.push(arguments);
        // }

        // Load the Google Analytics script only once
        // const gaScriptId = 'ga-gtag';
        // if (!document.getElementById(gaScriptId)) {
        //   const script = document.createElement('script');
        //   script.id = gaScriptId;
        //   script.async = true;
        //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
        //   document.head.appendChild(script);

        //   script.onload = () => {
        //     gtag('js', new Date());
        //     gtag('config', 'G-3BK9F87D6E');
        //   };
        // }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='About'>
            <div className='About-main'>
                <div className="about-title">
                    <p>Pukhya</p>
                    <h3>About<span>Us</span></h3>
                </div>
                <div className='About-box'>
                    <div className="about-left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                    </div>
                    <div className="about-right">
                        <img src={abouti} alt="" />
                    </div>
                </div>
                <Aboutcard />
                <div className='About-box-director'>
                    <div className="about-right-director">
                        <img src={director} alt="" />
                    </div>
                    <div className="about-left-director">
                        <h2>Director Name</h2>
                        <h5>position</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                        <span>Lorem, ipsum.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
