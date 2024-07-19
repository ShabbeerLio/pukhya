import React, { useEffect, useState } from 'react'
import "./PtrCard.css"
import { IoAdd } from "react-icons/io5";

const PtrCard = ({ item }) => {

    return (
        <>
            <div className={item.className} key={item.id} >
                <div className="PtrCard">
                    {item.cover ? (
                        <div className="Partner-cards-image">
                            <h5>{item.cover}</h5>
                        </div>
                    ) : (
                        <div className="Partner-cards-title">
                            <div className={item.cN2}>
                                <h3>{item.title}</h3>
                                <h4>{item.stitle}</h4>
                                <h6>{item.btitle}</h6>
                            </div>
                        </div>
                    )}
                    <span className='top'>
                        <IoAdd />
                    </span>
                    <span className='bottom'>
                        <IoAdd />
                    </span>
                    <span className='left'>
                        <IoAdd />
                    </span>
                </div>
            </div>
        </>
    )
}

export default PtrCard
