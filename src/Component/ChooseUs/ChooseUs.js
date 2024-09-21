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
                        <h2>Pukhya for Superior sports science, Research ,and healthcare solutions</h2>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><GiCheckMark /></p>
                                <h5>Expert Collaborations</h5>
                            </div>
                            <div className="choose-card-body">
                                <p> Partnering with leading sports science , research equipment and healthcare leading manufacturers.</p>
                            </div>
                        </div>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><GiCheckMark /></p>
                                <h5>Innovative Technology</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>Enhance sports science , research and healthcare solutions .</p>
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
