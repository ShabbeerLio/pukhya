import React from 'react'
import "./Aboutcard.css"
import about1 from "../../Assets/About/what-we-do.jpg"
import about2 from "../../Assets/About/our-values.jpg"
import about3 from "../../Assets/About/vision.webp"
import about4 from "../../Assets/About/mission.png"

const Aboutcard = () => {
    return (
        <>


            <div className='Aboutcard-box'>
                <div className="about-card-left">
                    <h3>What we do</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
                <div className="about-card-right">
                    <img src={about1} alt="" />
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-right">
                    <img src={about2} alt="" />
                </div>
                <div className="about-card-left">
                    <h3>Our Values</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-left">
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
                <div className="about-card-right">
                    <img src={about3} alt="" />
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-right">
                    <img src={about4} alt="" />
                </div>
                <div className="about-card-left">
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium doloribus ad exercitationem neque hic. Aliquam tenetur, porro laboriosam excepturi ipsa inventore impedit exercitationem voluptatibus reiciendis cumque vero magni odio.</p>
                </div>
            </div>
        </>
    )
}

export default Aboutcard
