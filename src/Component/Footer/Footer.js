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
                <div className="Footer-bg">
                    <img src={fimg} alt="" />
                </div>
                <div className="Footer-main">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <h2>Be the first to know.</h2>
                            <p>Our close collaboration with leading hospitals provides the environment that favours the creation of practical and user-friendly system solutions.</p>
                        </div>
                        <div className="footer-top-right">
                            <div className="footer-right-quick">
                                <h2>Research & Sports</h2>
                                <ul>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Sports Science</Link>
                                    </li>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Ergonomics</Link>
                                    </li>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Physilogy</Link>
                                    </li>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Biomechanics</Link>
                                    </li>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Phychology</Link>
                                    </li>
                                    <li>
                                        <Link onClick={scrollTop} to="/">Scientific Gym</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-detail-box">
                        <div className="footer-left">
                            <Link onClick={scrollTop} to="/">
                                <img className="image2" src={Aboutimg} alt="" />
                            </Link>
                        </div>
                        <div className="footer-right-quick">
                            {/* <h2>Quick Links</h2> */}
                            <ul>
                                <li>
                                    <Link onClick={scrollTop} to="/">Home</Link>
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
                        <div className="footer-social-media">
                            <SocialMedia />
                        </div>

                        {/*  */}
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 Pukhya Pvt. Ltd. | All rights reserved</p>
                    </div>
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

                </div>
            </div>
        </>
    )
}

export default Footer
