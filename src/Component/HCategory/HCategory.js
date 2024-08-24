import React from 'react'
import "./HCategory.css"
import HCategoryData from './HCategoryData'
import HCategoryCard from './HCategoryCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HCategory = () => {
    return (
        <div className='HCategory'>
            <div className='HCategory-main'>
                <div className="HCategory-head">
                    <h2>SPORTS MEDICINE & RESEARCH </h2>
                    <p>Critical care to mobile health, BPL is the preferred choice for total solutions across specialties.</p>
                </div>
                <div className='HCategory-box'>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        speed={1000}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {HCategoryData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <HCategoryCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HCategory
