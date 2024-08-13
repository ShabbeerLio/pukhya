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
                <img src={item.cover} alt="" />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <div className="hcategory-card-detail-items">
                    <div className="hcategory-items-card">
                        <PiHospitalFill/>
                    </div>
                    <div className="hcategory-items-card">
                        <PiHospitalFill/>
                    </div>
                    <div className="hcategory-items-card">
                        <PiHospitalFill/>
                    </div>
                    <div className="hcategory-items-card">
                        <PiHospitalFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HCategoryCard
