import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/logo.jpg"
import SocialMedia from '../Navbar/SocialMedia';
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <>
            <div className="aboutUs">
                <div className="about-main">
                    <div className="about-detail-box">
                        <div className="about-left">
                            <Link to="/">
                                <img className="image2" src={Aboutimg} alt="" />
                            </Link>
                        </div>
                        <div className="footer-right-quick">
                            <ul>
                                <li>
                                    <Link to="/walls&dreams/"  >Home</Link>
                                </li>
                                <li>
                                    <Link to="/walls&dreams/about"  >About Us</Link>
                                </li>
                                <li>
                                    <Link to="/walls&dreams/business"  >Our Business</Link>
                                </li>
                                <li>
                                    <Link to="/walls&dreams/gallery"  >Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/walls&dreams/careers"  >Careers</Link>
                                </li>
                                <li>
                                    <Link to="/walls&dreams/blogs" >Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contactUs"  >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="about-social-media">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 ©Walls & Dreams</p>
                    </div>
                    <div className="footer-copyright-menu">
                        <ul>
                            <li><Link to="/">Legal</Link></li>
                            <li><Link to="/">Cookie Policy</Link></li>
                            <li><Link to="/">Press</Link></li>
                            <li><Link to="/">Cookie Setting</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Sitemap</Link> </li>
                            <li><Link to="/">Disclaimers</Link></li>
                            <li><Link to="/">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
