import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimo.css"
import TestimoCard from './TestimoCard';

const Testimo = () => {
    return (
        <div className='Testimo'>
            <div className="testimo-line">
                <svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{ strokeDasharray: "3246.53, 0" }}></path>
                </svg>
            </div>
            <div className='Testimo-main'>
                <div className='Testimo-box'>
                    <div className="Testimo-left">
                        <p>TESTIMONIALS</p>
                        <h3>WHAT PEOPLE <span>SAY?</span></h3>
                    </div>
                    <div className="Testimo-right">
                        <div className="testimo-right-des">
                            <svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg">
                                <path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322">
                                </path>
                            </svg>
                        </div>
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
