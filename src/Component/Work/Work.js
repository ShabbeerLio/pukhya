import React from 'react'
import "./Work.css"
import box1 from "../../Assets/Business/h2.jpg"
import box2 from "../../Assets/Business/header2.jpg"
import box3 from "../../Assets/Business/p3.jpg"

const Work = () => {
    return (
        <div className='Work'>
            <div className='Work-main'>
                <div className='Work-box'>
                    <div className='Work-box-left'>
                        <div className="work-left-box1">
                            <img src={box1} alt="" />
                        </div>
                        <div className="work-left-box2">
                            <img src={box2} alt="" />
                        </div>
                        <div className="work-left-box3">
                            <img src={box3} alt="" />
                        </div>
                    </div>
                    <div className='Work-box-right'>
                        right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
