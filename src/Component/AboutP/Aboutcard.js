import React from 'react'
import "./Aboutcard.css"
import abouti from "../../Assets/About/about.jpg"

const Aboutcard = () => {
    return (
        <>
            <div className='Aboutcard-box'>
                <div className="about-card-left">
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
                <div className="about-card-right">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/231/912/non_2x/double-exposure-of-smart-medical-doctor-working-with-operating-room-as-concept-free-photo.jpg" alt="" />
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-right">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/230/532/non_2x/success-smart-medical-doctor-working-with-operating-room-as-concept-free-photo.jpg" alt="" />
                </div>
                <div className="about-card-left">
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-left">
                    <h3>What we do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
                <div className="about-card-right">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/231/912/non_2x/double-exposure-of-smart-medical-doctor-working-with-operating-room-as-concept-free-photo.jpg" alt="" />
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-right">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/230/532/non_2x/success-smart-medical-doctor-working-with-operating-room-as-concept-free-photo.jpg" alt="" />
                </div>
                <div className="about-card-left">
                    <h3>Our Values</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
            </div>
        </>
    )
}

export default Aboutcard
