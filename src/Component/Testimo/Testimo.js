import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimo.css"
import TestimoCard from './TestimoCard';

const Testimo = () => {
    return (
        <div className='Testimo'>
            <div className='Testimo-main'>
                <div className='Testimo-box'>
                    <div className="Testimo-left">
                        <p>TESTIMONIALS</p>
                        <h3>WHAT PEOPLE <span>SAY?</span></h3>
                    </div>
                    <div className="Testimo-right">
                        <ReactOwlCarousel
                            dots={false}
                            nav={true}
                            loop={Infinity}
                            items={1}
                            autoplay={true}
                            autoplayTimeout={3000}
                        >
                            <TestimoCard/>
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimo
