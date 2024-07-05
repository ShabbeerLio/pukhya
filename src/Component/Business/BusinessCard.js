import React from 'react'
import "./Business.css"

const BusinessCard = ({ item }) => {
    return (
        <>
            <div className={item.className} key={item.id} >
                    <div className="services-cards-image">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="services-cards-title">
                        <h3>{item.title}</h3>
                    </div>
            </div>
        </>
    )
}

export default BusinessCard
