import React from 'react'
import "./Need.css"
import { HiMiniArrowUpRight } from "react-icons/hi2";
import needit from "../../Assets/Story/story.jpg"
import NeedData from './NeedData';
import NeedCard from './NeedCard';

const Need = () => {

    return (
        <div className='Need'>
            <div className='Need-main'>
                {NeedData.map((item, index) => (
                    <NeedCard item={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Need
