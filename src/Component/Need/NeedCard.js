import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import needit from "../../Assets/Story/story.jpg"

const NeedCard = ({ item }) => {

    var index = (item.id);

    return (
        <div className='Need-box'>
            {index % 2 !== 0 ? (
                <>
                    <div className='Need-box-left'>
                        <div className='StyleCard-box'>
                            <h2>{item.title}</h2>
                            <span>{item.descrip}</span>
                        </div>
                    </div>
                    <div className='Need-box-right'>
                        <div className="need-right-top">
                            <h3>{item.sidedesc}</h3>
                        </div>
                        <div className="need-right-bottom">
                            <div className="need-right-botm-left">
                                <HiMiniArrowUpRight />
                                <p>Read More</p>
                            </div>
                            <div className="need-right-botm-right">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='Need-box-right'>
                        <div className="need-right-top">
                            <h3>{item.sidedesc}</h3>
                        </div>
                        <div className="need-right-bottom">
                            <div className="need-right-botm-left">
                                <HiMiniArrowUpRight />
                                <p>Read More</p>
                            </div>
                            <div className="need-right-botm-right">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='Need-box-left'>
                        <div className='StyleCard-box'>
                            <h2>{item.title}</h2>
                            <span>{item.descrip}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default NeedCard
