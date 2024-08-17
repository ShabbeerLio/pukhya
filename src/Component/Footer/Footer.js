import React from 'react'
import "./Footer.css"
import Aboutimg from "../../Assets/Logo-footer.png"
import SocialMedia from '../Navbar/SocialMedia';
import { Link } from 'react-router-dom';
import fimg from "../../Assets/Footer/texture-2-light.png"


const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <>
            <div className="Footer">
                <div className="Footer-main">
                    <div className="footer-detail-box">
                        <div className="footer-left">
                            <Link onClick={scrollTop} to="/">
                                <img className="image2" src={Aboutimg} alt="" />
                            </Link>
                            <p>Our close collaboration with leading hospitals provides the environment that favours the creation of practical and user-friendly system solutions.</p>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/pukhya">Home</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/about">About</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/career">Career</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contact-us">Send Enquiry</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Research & Spots</h2>
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/sports-science">Sports Science</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/ergonomics">Ergonomics</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/physilogy">Physilogy</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/biomechanics">Biomechanics</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/phychology">Phychology</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/scientific-gym">Scientific Gym</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Contact</h2>
                            <ul>
                                <li>
                                    <Link>Address</Link>
                                </li>
                                <li>
                                    <Link to='tel: +918800913399'>8800913399</Link>
                                </li>
                                <li>
                                    <Link to='mailto: pukhya123@gmail.com'>pukhya123@gmail.com</Link>
                                </li>
                            </ul>
                            <div className="footer-social-media">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-down">

                    <div className="footer-copyright-menu">
                        <ul>
                            <li>
                                <Link onClick={scrollTop} to="/">Disclaimers</Link>
                            </li>
                            <li>
                                <Link onClick={scrollTop} to="/">Terms & Condition</Link>
                            </li>
                            <li>
                                <Link onClick={scrollTop} to="/">Privacy Policy</Link>
                            </li>
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

export default Footer
