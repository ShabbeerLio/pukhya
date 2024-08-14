import React from 'react'
import "./Banner.css"
import BannerData from '../Datas/BannerData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import { PiHospitalFill } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BannerItem from '../Datas/BannerItem';

const Banner = () => {

    return (
        <>
            <div className="banner">

                <Swiper
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    effect={'fade'}
                    speed={2000}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, EffectFade, Pagination]}
                >
                    {BannerData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="banner-heading">
                                <h1>{item.title}</h1>
                            </div>
                            <div className='Banners' id={item.id}>
                                <div className="banner-image">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="banner-bottom">
                    <Swiper
                        className="mySwiper"
                        slidesPerView={5}
                        spaceBetween={20}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        loop={true}
                        speed={1500}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        <div className="banner-items">
                            {BannerItem.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="banner-card">
                                        <div className="banner-card-imag">
                                            <img src={item.cover} alt="" />
                                        </div>
                                        <div className="banner-card-detail">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Banner
