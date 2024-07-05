import React from 'react';
import './Map.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbBrandApplePodcast } from "react-icons/tb";
import { IoArrowUndoSharp } from "react-icons/io5";

const Map = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const countUpOptions = {
        start: 0,
        duration: 5,
        useEasing: true,
        separator: ',',
    };

    return (
        <div className="Map" ref={ref}>
            <div className="map-main">
                {/* <div className="map-left">
                    <img src={MapImg} alt="" />
                </div> */}
                <div className="map-right">
                    <div className="map-icon-arrow">
                        <IoArrowUndoSharp />
                        <div className="map-right-head">
                            <h5>Since 1894</h5>
                            <p>Our Achivements</p>
                        </div>
                    </div>
                    <div className="mapright-counter">
                        <div className="counter-box">
                            <h1><RiEmotionHappyLine />{inView ? <CountUp end={2} {...countUpOptions} /> : 0}Mn+</h1>
                            <h5>Happy Customers</h5>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p> */}
                        </div>
                        <div className="counter-box">
                            <h1><FaHandshakeSimple />{inView ? <CountUp end={25} {...countUpOptions} /> : 0}K+</h1>
                            <h5>Trade Partners</h5>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p> */}
                        </div>
                        <div className="counter-box">
                            <h1><IoIosPeople />{inView ? <CountUp end={5} {...countUpOptions} /> : 0}K+</h1>
                            <h5>Distributors</h5>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p> */}
                        </div>
                        <div className="counter-box">
                            <h1><TbBrandApplePodcast />{inView ? <CountUp end={100} {...countUpOptions} /> : 0}+</h1>
                            <h5>Brands</h5>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
