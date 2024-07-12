import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/logo.jpg"
import { IoApps, IoPeopleOutline } from "react-icons/io5";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50 + 100;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
                } else {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
                }
            });
        }

        window.addEventListener('scroll', scrollActive);

        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    const [menuClass, setMenuClass] = useState('nav-menu');


    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
        setMenuClass('nav-menu');
    };

    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className={menuClass}>
                   
                    <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                        <div className="container-fluid">
                            <Link className="navBar-logo" to="/">
                                <img src={Logo} alt="walls&dreams" />
                            </Link>
                            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon top-bar"></span>
                                <span className="toggler-icon middle-bar"></span>
                                <span className="toggler-icon bottom-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/" onClick={closeMenu}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about" onClick={closeMenu}>About Us</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link dropdown-toggle" to="/business" onClick={closeMenu}>Our Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/gallery" onClick={closeMenu}>Gallery</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/careers" onClick={closeMenu}>Careers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blogs" onClick={closeMenu}>Blogs</Link>
                                    </li>
                                </ul>
                            <div className="nav-action">
                                {/* <div className="navbar-search">
                                    <IoSearch />
                                </div> */}
                                <div className="navbar-search">
                                    <IoPeopleOutline />
                                </div>
                                <div className="employee" >
                                    <IoApps type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div class="offcanvas-header">
                                            <h5 id="offcanvasRightLabel">
                                                <Link className="navBar-logo" to="/">
                                                    <img src={Logo} alt="cscsa" />
                                                </Link>
                                            </h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <h6>Welcome to Walls & Dreams </h6>
                                            <p>Walls & Dreams is a group company of house constructor.</p>
                                            <div className="side-contactInfo">
                                                <h6>Contact Us</h6>
                                                <div className="line1"></div>
                                                <ul>
                                                    <li>
                                                        <FaLocationDot />
                                                        <div className="contact-info">
                                                            {/* <h5>Location</h5> */}
                                                            <p> Unit No.2302, Express Trade Tower II B 36, Sector 132, Noida, UP 201301</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <FaEnvelope />
                                                        <div className="contact-info">
                                                            {/* <h5>Email Us</h5> */}
                                                            <p>info@juagrisciences.com</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                                    <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                                                </path>
                                                                <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                                    <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                                    <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                                                </path>
                                                                <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                                    <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                                    <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <div className="contact-info">
                                                            {/* <h5>Phone Number</h5> */}
                                                            <p>0120 – 4328671</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="call-number ">
                                    <div className="call-number-icon">
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                    <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                                </path>
                                                <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                    <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                    <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                                </path>
                                                <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                    <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                    <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                                </path>
                                            </g>
                                        </svg>

                                    </div>
                                    <Link to="tel: 01204328671">
                                        <p>Have any query?</p>
                                        0120 – 4328671
                                    </Link>
                                </div>

                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        </>
    )
}

export default Navbar
