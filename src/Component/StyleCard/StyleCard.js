import React from 'react'
import "./StyleCard.css"

const StyleCard = ({ text, cover, butn, icn }) => {
    return (
        <div className='StyleCard'>
            <div className='StyleCard-box'>
                <div className="stylecard-imag">
                    <h2>We offer integrated treatment with personalized solutions for mental and cognitive health.</h2>
                    <span>Discover our solution  HeadApp – Computer-Aided Cognitive Screening and Training specifically designed to aid patients with acquired brain injuries, neurodevelopmental disorders, and cognitive deficits in psychiatric conditions.</span>
                </div>
            </div>
        </div>
    )
}

export default StyleCard
