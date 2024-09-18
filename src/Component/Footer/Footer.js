import React from 'react'
import "./Footer.css"
import Aboutimg from "../../Assets/Logo-footer.png"
import SocialMedia from '../Navbar/SocialMedia';
import { Link } from 'react-router-dom';
import fimg from "../../Assets/Footer/texture-2-light.png"
import CategoriesData from '../../Pages/Products/CategoriesData';


const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    console.log(CategoriesData,"data")

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
                                    <Link onClick={scrollTop} to="/associated-brands">Associated Brands</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link onClick={scrollTop} to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-right-quick">
                            <h2>Our Products</h2>
                            <ul>
                                {CategoriesData.map((item, index) => (
                                    <li key={index}>
                                        <Link onClick={scrollTop} to={item.link}>{item.Category}</Link>
                                    </li>
                                ))}
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
                                    <Link to='mailto: info@pukhya.com'>info@pukhya.com</Link>
                                </li>
                                <li>
                                    <Link to='mailto: pritam@pukhya.com'>pritam@pukhya.com</Link>
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
