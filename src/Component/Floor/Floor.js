import React from 'react'
import "./Floor.css"
import floor1 from "../../Assets/Floor/estate-plan1.png"
import floor2 from "../../Assets/Floor/estate3-plan2.png"
import floor3 from "../../Assets/Floor/estate3-plan3.png"
import floor4 from "../../Assets/Floor/estate3-plan4.png"
import floor5 from "../../Assets/Floor/estate3-plan5.png"

const Floor = () => {
    return (
        <div className='Floor'>
            <div className='Floor-bg1'>
                <div className='Floor-main'>
                    <div className='Floor-box1'>
                        <div className='Floor-box1-left'>
                        </div>
                        <div className='Floor-box1-right'>
                            <div className="floor-right-title">
                                <h2>Ground Floor</h2>
                                <h2>968 <span>m/sq</span></h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit repellendus tempore natus facere repudiandae sapiente distinctio, voluptatum iste ex vel earum accusantium, ratione aut asperiores sed ab blanditiis quia!</p>
                            <div className="floor-right-catg">
                                <div className="floor-catg-card">
                                    <img src={floor1} alt="" />
                                    <p>Living Room <span>125 m/sq</span></p>
                                </div>
                                <div className="floor-catg-card">
                                    <img src={floor2} alt="" />
                                    <p>Kitchen <span>24 m/sq</span></p>
                                </div>
                                <div className="floor-catg-card">
                                    <img src={floor3} alt="" />
                                    <p>Bedroom <span>17 m/sq</span></p>
                                </div>
                                <div className="floor-catg-card">
                                    <img src={floor4} alt="" />
                                    <p>Toilet <span>14 m/sq</span></p>
                                </div>
                                <div className="floor-catg-card">
                                    <img src={floor5} alt="" />
                                    <p>Laundry <span>9 m/sq</span></p>
                                </div>
                            </div>
                            <div className="floor-right-button">
                                <p>View more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Floor
