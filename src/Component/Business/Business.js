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
                                    <h2>Project done by Walls & Dreams</h2>
                                    {/* <p>The Jhaver Group is today a highly respected business group and has emerged as one of the fastest-growing innovators in South Asia.</p> */}
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
