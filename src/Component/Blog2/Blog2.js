import React from 'react'
import "./Blog2.css"
import ReactOwlCarousel from 'react-owl-carousel'

const Blog2 = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 1.5,
        },
    };
    return (
        <div className='blog2'>
                <div className="blog2-theam">
                    <span>blogs</span>
                </div>
            <div className='blog2-main'>
                <div className="blog2-left">
                    <h2>RECENT PUBLISHES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, alias.</p>
                </div>
                <div className="blog2-right">
                    <div className="blog2-item-scroll">
                        <ReactOwlCarousel
                            loop={Infinity}
                            items={1.5}
                            autoplay={true}
                            autoplayTimeout={3000}
                            nav={true}
                            dots={false}
                            animateOut='fadeOut'
                            animateIn='fadeIn'
                            responsive={responsiveOptions}

                        >
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://juagrisciences.com/uploads/blog/category/171024083515jpg.jpg" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <h5>Empowering Agriculture | Revolutionizing Farmers through Upskilling</h5>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://juagrisciences.com/uploads/blog/category/1709617265202310largeimg1603523499jpg.jpg" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <h5>MS Swaminathan | Father of Green Revolution who made India food surplus</h5>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://juagrisciences.com/uploads/blog/category/170495326813jpg.jpg" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <h5>Harnessing Nature’s Power: Biostimulants in Agriculture</h5>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="blog2-item">
                                <div className="blog2-item-image">
                                    <img src="https://juagrisciences.com/uploads/blog/category/1695801436farmer-2jpg.jpg" alt="" />
                                    <div className="blog2-image-shade"></div>
                                </div>
                                <div className="blog2-item-detail">
                                    <h5>Argyroxiphium: The Enigmatic Silver Sword Alliance</h5>
                                    <p>Learn More</p>
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog2
