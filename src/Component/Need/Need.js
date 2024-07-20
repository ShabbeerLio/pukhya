import React from 'react'
import "./Need.css"
import StyleCard from '../StyleCard/StyleCard'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import needit from "../../Assets/Business/h2.jpg"

const Need = () => {
    return (
        <div className='Need'>
            <div className='Need-main'>
                <div className='Need-box'>
                    <div className='Need-box-left'>
                        <StyleCard />
                    </div>
                    <div className='Need-box-right'>
                        <div className="need-right-top">
                            <h3>We will design campaigns that make the world listen</h3>
                        </div>
                        <div className="need-right-bottom">
                            <div className="need-right-botm-left">
                                <HiMiniArrowUpRight/>
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
