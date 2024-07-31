import React from 'react'
import "./ChooseUs.css"
import { GiCheckMark } from "react-icons/gi";

const ChooseUs = () => {
    return (
        <div className='ChooseUs'>
            <div className='ChooseUs-main'>
                <div className='ChooseUs-box'>
                    <div className="choose-left">
                        <h4>Why Choose Us</h4>
                        <h2>Pukhya for Superior Healthcare System Solutions</h2>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><GiCheckMark /></p>
                                <h5>Expert Collaborations</h5>
                            </div>
                            <div className="choose-card-body">
                                <p> Partnering with leading hospitals, we ensure our solutions are grounded in real-world medical expertise and best practices.</p>
                            </div>
                        </div>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><GiCheckMark /></p>
                                <h5>Innovative Technology</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>We leverage cutting-edge technology to develop practical, user-friendly systems that enhance healthcare delivery and patient outcomes.</p>
                            </div>
                        </div>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><GiCheckMark /></p>
                                <h5>Commitment to Excellence</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>Our unwavering dedication to quality and continuous improvement drives us to provide the best possible solutions for our clients and their patients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
