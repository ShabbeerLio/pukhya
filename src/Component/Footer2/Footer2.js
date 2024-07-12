import React from 'react'
import "./Footer2.css"
import imag from "../../Assets/Image/image1.jpg"
import imag2 from "../../Assets/Image/image2.avif"
import imag3 from "../../Assets/Image/image3.webp"

const Footer2 = () => {
    return (
        <div className='footer2'>
            <div className='footer2-main'>
                <div className="footer2-left">
                    <div className="footer2-left-item">
                        <h2>Our Business</h2>
                        <div className="footer2-left-item-detail">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni suscipit rerum omnis voluptate autem. Ipsam pariatur eaque exercitationem id inventore.</p>
                        </div>
                    </div>
                    <div className="footer2-left-item-box">
                        <div className="footer2-item-image">
                            <div className="overlayer"></div>
                            <img src={imag} alt="" />
                        </div>
                        <div className="footer2-item-box">
                            <div className="footer2-box-text">
                                <h3>Domestic</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer2-right">
                    <div className="footer2-right-item">
                        <div className="footer2-item-box">
                            <div className="footer2-box-text">
                                <h3>International</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae.</p>
                            </div>
                        </div>
                        <div className="footer2-item-image">
                            <img src={imag2} alt="" />
                        <div className="overlayer"></div>
                        </div>
                        <div className="footer2-item-image">
                        <div className="overlayer"></div>
                            <img src={imag3} alt="" />
                        </div>
                        <div className="footer2-item-box">
                            <div className="footer2-box-text">
                                <h3>Institutional</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2
