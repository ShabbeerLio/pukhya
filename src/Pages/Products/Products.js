import React, { useEffect, useState } from 'react'
import "./Products.css"
import Highlights from '../../Component/Highlights/Highlights'
import ProductCard from '../../Component/ProductCard/ProductCard'
import CategoriesData from './CategoriesData'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Products = (props) => {

    const [data, setData] = useState([])
    // console.log(data, "data")

    useEffect(() => {
        const selectedCategory = CategoriesData?.find(category => category.Category === props.heading);
        // console.log(selectedCategory, "selectedCategory")

        if (selectedCategory) {
            setData(selectedCategory.subcategories);
        } else {
            setData([]);
        }
    }, [props.heading]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <div className='Products'>
            <Highlights />
            <div className='Products-main'>
                <div className='Products-box'>
                    <h3>{props.heading}</h3>
                    {data.map((item) => (
                        <ProductCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className='Products-box2'>
                <h3>All Categories</h3>
                <div className="Products-categories">
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
                        {CategoriesData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={{
                                    pathname: `/${formatPathname(item.link)}/`
                                }} onClick={scrollToTop} key={item.id}>
                                    <div className="Products-categories-card" >
                                        <img src={item.cover} alt="" />
                                        <h2>{item.Category}</h2>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* {CategoriesData.map((item) => (
                        <Link to={{
                            pathname: `/${formatPathname(item.link)}/`
                        }} onClick={scrollToTop} key={item.id}>
                            <div className="Products-categories-card" >
                                <img src={item.cover} alt="" />
                                <h2>{item.Category}</h2>
                            </div>
                        </Link>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Products
