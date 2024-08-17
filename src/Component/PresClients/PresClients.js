import React from 'react'
import "./PresClients.css"
import ReactOwlCarousel from 'react-owl-carousel'
import ClientData from './ClientsData';

const PresClients = () => {

    const responsiveOptions = {
        0: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        },
    };

    return (
        <div className='PresClients'>
            <div className='PresClients-main'>
                <div className="PresClients-heading">
                    <h2>Some of Our Prestigeous Clients</h2>
                    <p>As we have worked with numerous industry leaders which shines our expertise in pukhya. Here we have shown some of our prestigious clients.</p>
                </div>
                <div className="presClients-box">
                    <ReactOwlCarousel
                        items={6}
                        nav={false}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={1500}
                        autoplayHoverPause={false}
                        smartSpeed={800}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {ClientData.map((item) => (
                            <div className="presClients-card" key={item.id}>
                                <div className="presClients-image">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default PresClients
