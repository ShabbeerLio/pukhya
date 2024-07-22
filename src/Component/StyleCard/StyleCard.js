import React from 'react'
import "./StyleCard.css"

const StyleCard = ({ text, cover, butn, icn }) => {
    return (
        <div className='StyleCard'>
            <div className='StyleCard-box'>
                <div className="stylecard-imag">
                    <h2>Our Story </h2>
                    <span>We created Walls & Dreams to bring quality and value in construction at competitive price. Because we have been on the other side and we know how painful it can be if you choose the wrong people for yourproject. We are dynamic and ambitious professionals with fresh approach to the construction business.</span>
                </div>
                <div className="border"></div>
            </div>
            <p>{butn ? butn : null}<span>{icn ? icn :null}</span></p>
        </div>
    )
}

export default StyleCard
