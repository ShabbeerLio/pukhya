import React from 'react'
import "./Need.css"
import StyleCard from '../StyleCard/StyleCard'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import needit from "../../Assets/Story/story.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const Need = () => {
    return (
        <div className='Need'>
            <div className='Need-main'>
                <div className='Need-box'>
                    <div className='Need-box-left'>
                        <StyleCard text={"We bring quality and value in construction at competitive price."} butn={"Read More"} icn={<FaArrowRightLong />} />
                    </div>
                    <div className='Need-box-right'>
                        <div className="need-right-top">
                            <h3>Pukhya Has strong marketing network spread across India</h3>
                        </div>
                        <div className="need-right-bottom">
                            <div className="need-right-botm-left">
                                <HiMiniArrowUpRight />
                                <p>Read More</p>
                            </div>
                            <div className="need-right-botm-right">
                                <img src={needit} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Need
