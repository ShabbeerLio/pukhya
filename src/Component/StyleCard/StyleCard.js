import React from 'react'
import "./StyleCard.css"

const StyleCard = ({ text, cover, butn, icn }) => {
    return (
        <div className='StyleCard'>
            <div className='StyleCard-box'>
                <div className="stylecard-imag">
                    <h2>We have experienced service engineers, technical skill and availability of spare parts for good after-sales service.                    </h2>
                    <span> It is important to look into the reputation of the manufacturer, service support committed by the distributors, and after-sales services.</span>
                </div>
            </div>
        </div>
    )
}

export default StyleCard
