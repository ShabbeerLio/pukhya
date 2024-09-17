import React from 'react'
import "./HCategoryCard.css"
import bg from "../../Assets/Category/speciality-list-bg.png"
import { PiHospitalFill } from "react-icons/pi";

const HCategoryCard = ({ item }) => {
    return (
        <div className='HCategory-box-card' key={item.id}>
            <div className="hcategory-card-bg">
                <img src={bg} alt="" />
            </div>
            <div className="hcategory-card-detail">
                <div className="hcategory-image">
                    <img src={item.cover} alt="" />
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <div className="hcategory-card-detail-items">
                    {item.brands.map((i) => (
                        <div className="hcategory-items-card">
                            <img src={i.cover} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HCategoryCard
