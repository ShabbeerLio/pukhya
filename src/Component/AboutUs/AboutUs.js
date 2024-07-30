import React from 'react'
import "./AboutUs.css"
import aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className='AboutUs-main'>
                <div className='AboutUs-box'>
                    <div className='AboutUs-right'>
                        <div className="News-title">
                            <p>Pukhya</p>
                            <h3>About<span>Us</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt repellendus praesentium iste, optio architecto eum, ea labore cumque maiores aut fugit, accusamus ratione. Ut neque obcaecati odio esse voluptate?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos laboriosam, nemo ut a obcaecati cum ipsum distinctio odio fugit asperiores architecto ipsam maxime odit rerum quae minima? Atque, autem.</p>
                        <div className="aboutUs-btn">
                            <Link>About Us</Link>
                        </div>
                    </div>
                    <div className='AboutUs-left'>
                        <img src={aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
