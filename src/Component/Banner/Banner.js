import React, { useRef } from 'react'
import "./Banner.css"
import BannerData from '../Datas/BannerData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);

    return (
        <>
            <div className="banner-main">
                <div className="banner-right">
                    <Swiper
                        className="mySwiper"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={1500}
                        // navigation={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => { swiperRef1.current = swiper; }}
                        onSlideChange={(swiper) => { swiperRef2.current.slideTo(swiper.activeIndex); }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {BannerData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='Banners' id={item.id}>
                                    <div className="banner-image">
                                        <img src={item.cover} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="banner-text">
                    <Swiper
                        modules={[Pagination]}
                        className="mySwiper"
                        speed={2000}
                        onSwiper={(swiper) => { swiperRef2.current = swiper; }}
                        onSlideChange={(swiper) => { swiperRef1.current.slideTo(swiper.activeIndex); }}
                    >
                        {BannerData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="Banners-detail" id={item.id}>
                                    <h4>{item.heading}</h4>
                                    <h1>{item.title}</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Banner
