import React, { useState } from 'react';
import './Partners.css';
import PartnersData from './PartnersData';
import PtrCard from '../PtrCard/PtrCard';
import pimg from "../../Assets/Partners/decoration-1-dark.png"

const Partners = () => {
    const defaultActiveIndex = 0; // Default active card index
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='Partners'>
            <div className="partners-bg">
                {/* <img src={pimg} alt="" /> */}
            </div>
            <div className='Partners-main'>
                <div className='Partners-box'>
                    <div className="pcard3">
                        <div className='PtrCard'>
                            <div className='PtrCard-box'>
                                <div className='Partner-cards-title'>
                                    <h5>Construction</h5>
                                    <div className='first-layout'>
                                        <h3>Packages</h3>
                                        <h4></h4>
                                    </div>
                                </div>
                            </div>
                            <span className='top'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                            <span className='bottom'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                            <span className='left'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                        </div>
                    </div>
                    <div className="pcard4">
                        <div className='PtrCard'>
                            <div className='Partner-cards-title'>
                                <div className='second-layout'>
                                    <h4>6k</h4>
                                    <h3>+</h3>
                                </div>
                                <h6>SATISFIED CLIENTS</h6>
                            </div>
                            <span className='top'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                            <span className='bottom'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                            <span className='left'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M256 112v288m144-144H112'></path></svg></span>
                        </div>
                    </div>
                    {PartnersData.map((item, index) => (
                        <PtrCard
                            key={index}
                            item={item}
                            active={hoveredIndex === index || (hoveredIndex === null && defaultActiveIndex === index)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partners;
