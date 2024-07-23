import React from 'react'
import "./Business.css"
import BusinessData from '../Datas/BusinessData'
import BusinessCard from './BusinessCard'

const Business = () => {

    return (
        <>
            <div className="services">
                <div className="service-box">
                    <div className="WorkBox">
                        <div className="boxes1" >
                            <div className="services-cards-title">
                                <div className="title-box">
                                    <span>Best in Class Quality </span>
                                    <h2>Services <span>We Offer</span></h2>
                                </div>
                            </div>
                        </div>
                        {BusinessData.map((item) => (
                            <>
                                <BusinessCard item={item} />
                            </>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Business
