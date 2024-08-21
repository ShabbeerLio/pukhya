import React from 'react'
import "./About.css"
import abouti from "../../Assets/About/about.jpg"
import Aboutcard from '../../Component/AboutP/Aboutcard'

const About = () => {
    return (
        <div className='About'>
            <div className='About-main'>
                <div className="about-title">
                    <h1>About</h1>
                </div>
                <div className='About-box'>
                    <div className="about-left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                    </div>
                    <div className="about-right">
                        <img src={abouti} alt="" />
                    </div>
                </div>
                <Aboutcard />
                <div className='About-box-director'>
                    <div className="about-right-director">
                        <img src="https://static.vecteezy.com/system/resources/previews/008/358/607/non_2x/profile-shot-of-pretty-pleased-woman-wears-makeup-rosy-lipstick-dressed-in-polka-dot-blouse-has-healthy-skin-poses-against-white-background-with-blank-space-for-your-advert-or-promotion-free-photo.JPG" alt="" />
                    </div>
                    <div className="about-left-director">
                        <h2>Director Name</h2>
                        <h5>position</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis delectus vero quia ipsam autem accusamus velit unde assumenda fuga ad similique aspernatur, hic eum porro inventore. Officia enim, dignissimos nihil repellat facilis reiciendis possimus, impedit beatae corrupti esse cupiditate sit, ad quae ea quos rerum quaerat quibusdam ab assumenda.</p>
                        <span>Lorem, ipsum.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
