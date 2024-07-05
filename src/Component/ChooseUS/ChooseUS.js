import React from 'react'
import "./ChooseUS.css";
import { FaCircleDot } from "react-icons/fa6";

const ChooseUS = () => {
    return (
        <div className='ChooseUS'>
            <div className='ChooseUS-main'>
                <div className="ChooseUS-main-heading">
                    {/* <h5><HiOutlineSquare2Stack/>Many Reasons</h5> */}
                    <div className="ChooseUS-main-head">
                        <h2>Cultivating Tomorrow, Today</h2>
                        {/* <p>Read More</p> */}
                    </div>
                </div>
                <div className="ChooseUS-main-body">
                    <div className="choose-body-item">
                        <div className="choose-body-item-head">
                            <FaCircleDot/>
                            <h5>Our History</h5>
                        </div>
                        <div className="line"></div>
                        <p>The story of Jhaver Group began more than 125 years back when Mr. Srikrishna Jhaver bought the Oakley Bowden company and founded the Jhaver Group in 1894. What followed after that is a story of remarkable vision, dedication and hard work which has turned the Jhaver Group into one of the largest industrial conglomerate of today.</p>
                    </div>
                    <div className="choose-body-item">
                        <div className="choose-body-item-head">
                            <FaCircleDot/>
                            <h5>Sustainability at JU</h5>
                        </div>
                        <div className="line"></div>
                        <p>At JU, sustainability is so integral to us as an organization that we have woven it at the core of our corporate philosophy in the form of our tagline "Mitti Muskurayegi". Our corporate philosophy is designed in a way that it requires us to conduct our business activities based on the principles of transparency, uprightness and sustainability.</p>
                    </div>
                    <div className="choose-body-item">
                        <div className="choose-body-item-head">
                            <FaCircleDot/>
                            <h5>CSR Initiatives</h5>
                        </div>
                        <div className="line"></div>
                        <p>We at JU Agri Sciences are the firm believer that corporate responsibility is integral to business success. We are strongly committed to the welfare of our farming community, trade partners, stakeholders, employees and strive to make sure our economic growth is socially and environmentally sustainable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUS
