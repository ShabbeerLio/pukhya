import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/Logo-footer.png"
import SocialMedia from '../Navbar/SocialMedia';
import { Link } from 'react-router-dom';
import fimg from "../../Assets/Footer/texture-2-light.png"


const About = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <>
            <div className="aboutUs">
                <div className="about-bg">
                    <img src={fimg} alt="" />
                </div>
                <div className="about-main">
                    <div className="about-detail-box">
                        <div className="about-left">
                            <Link onClick={scrollTop} to="/">
                                <img className="image2" src={Aboutimg} alt="" />
                            </Link>
                        </div>
                        <div className="footer-right-quick">
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/"  >Home</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/about"  >About Us</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/business"  >Our Business</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/gallery"  >Gallery</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/careers"  >Careers</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/walls&dreams/blogs" >Blogs</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contactUs"  >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="about-social-media">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    {/* <div className="footer-copyright-logo">
                        <Link onClick={scrollTop} to="/">
                            <img className="image2" src={Aboutimg} alt="" />
                        </Link>
                    </div> */}
                    <div className="footer-copyright-menu">
                        <ul>
                            <li><Link onClick={scrollTop} to="/">Legal</Link></li>
                            <li><Link onClick={scrollTop} to="/">Cookie Policy</Link></li>
                            <li><Link onClick={scrollTop} to="/">Press</Link></li>
                            <li><Link onClick={scrollTop} to="/">Cookie Setting</Link></li>
                            <li><Link onClick={scrollTop} to="/">Careers</Link></li>
                            <li><Link onClick={scrollTop} to="/">Sitemap</Link> </li>
                            <li><Link onClick={scrollTop} to="/">Disclaimers</Link></li>
                            <li><Link onClick={scrollTop} to="/">Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2024 Pukhya Pvt. Ltd. | All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
