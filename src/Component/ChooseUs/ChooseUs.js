import React from 'react'
import "./ChooseUs.css"
import { FaCheck } from "react-icons/fa6";
const ChooseUs = () => {
    return (
        <div className='ChooseUs'>
            <div className='ChooseUs-main'>
                <div className='ChooseUs-box'>
                    <div className="choose-left">
                        <h4>Why Choose Us</h4>
                        <h2>Choose us for a dental home where you can feel relaxed</h2>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><FaCheck /></p>
                                <h5>Patient-Centric Approach</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>Our patient-centric approach means that your comfort, concerns, and individual needs are our priority</p>
                            </div>
                        </div>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><FaCheck /></p>
                                <h5>State-of-the-Art Technology</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>From digital diagnostics to advanced treatment modalities, we leverage state-of-the-art tools to enhance precision, efficiency, and your overall experience.</p>
                            </div>
                        </div>
                        <div className="choose-card">
                            <div className="choose-card-head">
                                <p><FaCheck /></p>
                                <h5>Expertise You Can Trust</h5>
                            </div>
                            <div className="choose-card-body">
                                <p>With a combination of experience and ongoing education, we deliver top-notch, evidence-based care that you can trust for all your dental needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
