import React from 'react'
import "./NavFloat.css"
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import fimg from "../../Assets/About/texture-4.png"

const NavFloat = (props) => {

    const closeMenu = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });

        props.NavFormIsClose(true)
    }

    return (
        <div className='NavFloat'>
            <div className='NavFloat-btn'>
                <IoMdClose onClick={props.NavFormIsClose} />
            </div>
            <div className='NavFloat-main'>
                <div className="NavFloat-bg">
                    <img src={fimg} alt="" />
                </div>
                <div className='NavFloat-box'>
                    <ul>
                        <li className="nav-item">
                            <Link
                                className={`nav-link`}
                                to="/"
                                onClick={() => closeMenu('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link `}
                                to="/about"
                                onClick={() => closeMenu('/about')}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"
                                to="#" id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Research & Sports Medicine
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className={`dropdown-item`} to="/sports-science" onClick={() => closeMenu('/sports-science')}> <RiArrowDropDownLine />Sports Science</Link></li>
                                <li><Link className={`dropdown-item`} to="/ergonomics" onClick={() => closeMenu('/ergonomics')}> <RiArrowDropDownLine />Ergonomics</Link></li>
                                <li><Link className={`dropdown-item `} to="/physilogy" onClick={() => closeMenu('/physilogy')}> <RiArrowDropDownLine />Physilogy</Link></li>
                                <li><Link className={`dropdown-item `} to="/biomechanics" onClick={() => closeMenu('/biomechanics')}> <RiArrowDropDownLine />Biomechanics</Link></li>
                                <li><Link className={`dropdown-item `} to="/phychology" onClick={() => closeMenu('/phychology')}> <RiArrowDropDownLine />Phychology</Link></li>
                                <li><Link className={`dropdown-item `} to="/scientific-gym" onClick={() => closeMenu('/scientific-gym')}> <RiArrowDropDownLine />Scientific Gym</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link`}
                                to="/interior"
                                onClick={() => closeMenu('/interior')}
                            >Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link `}
                                to="/contact-us"
                                onClick={() => closeMenu('/contact-us')}
                            >Send Enquiry</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link`}
                                to="/contact-us"
                                onClick={() => closeMenu('/contact-us')}
                            >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavFloat
