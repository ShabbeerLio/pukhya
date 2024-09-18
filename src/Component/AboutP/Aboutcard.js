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
                    <p>At Pukhya Private Limited, we specialize in delivering innovative sports medicine products that cater to the needs of athletes, fitness enthusiasts, and healthcare professionals. Our product range includes rehabilitation tools, performance enhancement devices, and injury prevention solutions, all designed to optimize athletic performance and recovery. By partnering with top global brands, we ensure that every product we offer meets the highest standards of quality and safety</p>
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
                    <p>At Pukhya Private Limited, we prioritize innovation, quality, and integrity in everything we do. Our products are crafted using cutting-edge research and meet the highest safety standards. We maintain transparency and trust with our clients, putting their needs first with personalized solutions and exceptional service. Excellence drives every aspect of our work.</p>
                </div>
            </div>
            <div className='Aboutcard-box'>
                <div className="about-card-left">
                    <h3>Vision</h3>
                    <p>Our vision is to be a global leader in sports medicine by consistently delivering innovative, research-backed solutions that enhance athletic performance, health, and longevity. We aim to create a world where every athlete and healthcare professional has access to the most advanced tools and resources needed to optimize physical performance and recovery, ultimately revolutionizing the sports medicine industry.</p>
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
                    <p>Our mission at Pukhya Private Limited is to empower athletes, fitness enthusiasts, and healthcare providers with scientifically-proven sports medicine products that enhance performance, promote recovery, and prevent injuries. We are committed to continuous research, innovation, and excellence in delivering the highest quality solutions to improve the overall health and well-being of the athletic community.</p>
                </div>
            </div>
        </>
    )
}

export default Aboutcard
