import React from 'react'
import "./Highlights.css"
import ReactOwlCarousel from 'react-owl-carousel'
import HighlightData from '../../Pages/Products/HighlightData'
import { Link } from 'react-router-dom'

const Highlights = () => {

    return (
        <div className='Highlights'>
            <ReactOwlCarousel
                items={1}
                nav={false}
                loop={true}
                autoplay={true}
                autoplayTimeout={5000}
                autoplayHoverPause={false}
                smartSpeed={800}
                dots={false}
            >
                {HighlightData.map((item) => (
                    <div className="Highlights-card" key={item.id}>
                        <div className="Highlights-image">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="hightlights-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="hightlight-brand">
                                <img src={item.brand} alt="" />
                            </div>
                            <Link>View Detail</Link>
                        </div>
                    </div>
                ))}
            </ReactOwlCarousel>
        </div>
    )
}

export default Highlights
