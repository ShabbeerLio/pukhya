import React, { useEffect, useState } from 'react';
import "./ProductDetail.css";
import { Link, useParams } from 'react-router-dom';
import CategoriesData from '../Products/CategoriesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { FaBacteria } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";
import { CiMedicalMask } from "react-icons/ci";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductHighlight from './ProductHighlight';

const ProductDetail = () => {
    const { pathName } = useParams();

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await CategoriesData;
                const data = response;
                const subcategories = data.reduce((acc, category) => acc.concat(category.subcategories), []);
                const products = subcategories.reduce((acc, category) => acc.concat(category.Products), []);
                setApiData(products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatPathname = (pathName) => {
        return pathName.toLowerCase().replace(/\s+/g, '-');
    };

    const product = apiData?.find(sub => formatPathname(sub.title) === pathName);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='ProductDetail'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                product && (
                    <>
                        <ProductHighlight data={product} />
                        <div className='ProductDetail-main'>
                            <div className='ProductDetail-card'>
                                <div className='ProductDetail-box'>
                                    <div className='ProductDetail-left'>
                                        <img src={product.cover} alt={product.title} />
                                    </div>
                                    <div className='ProductDetail-right'>
                                        <h2>{product.title}</h2>
                                        <p>{product.description}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor soluta repudiandae natus praesentium dolorem labore ut est, voluptate impedit, cum temporibus, odio libero cupiditate sunt consequatur ipsum aliquid! Iure veniam placeat ullam, dolor, deleniti tenetur explicabo possimus provident deserunt, aut dicta id.</p>
                                    </div>
                                </div>
                                <div className="productDetail-details">
                                    <h4>Applications for motion capture technology</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor soluta repudiandae natus praesentium dolorem labore ut est, voluptate impedit, cum temporibus, odio libero cupiditate sunt consequatur ipsum aliquid! Iure veniam placeat ullam, dolor, deleniti tenetur explicabo possimus provident deserunt, aut dicta id. Aliquam temporibus error dolore provident inventore ipsam autem at obcaecati. Ipsa perferendis quod animi. Numquam ab doloremque voluptates sunt expedita at voluptate consequuntur fugiat quod. Id alias voluptatum suscipit, quaerat corrupti, consequatur accusantium natus tempore magnam odit dolorum distinctio autem, eius repudiandae sed vel fugiat quibusdam explicabo velit earum voluptas.</p>
                                    <div className="productDetail-details-box">
                                        <h3>{product.title} at a glance</h3>
                                        <div className="productDetail-box-features">
                                            <div className="productDetail-box-features-left">
                                                <h4>Facts about Arjo</h4>
                                                <div className="productDetail-features-box">
                                                    <ul>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="productDetail-box-features-right">
                                                <h4>We ensure value by</h4>
                                                <div className="productDetail-features-box-right">
                                                    <div className="productDetail-features-box-card">
                                                        <CiMedicalCross />
                                                        <h5>Lorem, ipsum.</h5>
                                                    </div>
                                                    <div className="productDetail-features-box-card">
                                                        <LuSunMedium />
                                                        <h5>Lorem, ipsum.</h5>
                                                    </div>
                                                    <div className="productDetail-features-box-card">
                                                        <CiMedicalMask />
                                                        <h5>Lorem, ipsum.</h5>
                                                    </div>
                                                    <div className="productDetail-features-box-card">
                                                        <FaBacteria />
                                                        <h5>Lorem, ipsum.</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="productDetail-highlights">
                                        <div className="productDetail-highlights-left">
                                            <img src={product.coverfet} alt="" />
                                        </div>
                                        <div className="productDetail-highlights-right">
                                            <h3>Introducing MyArjo: Your portal to Arjo tools and services</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis incidunt, necessitatibus molestias temporibus id et molestiae labore, est illo nam vero culpa doloribus, maiores quidem dignissimos amet quis unde.</p>
                                            <div className="productDetail-link">
                                                <Link to={"https://www.qualisys.com/"}>Visit the Company Website :- qualisys.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            )}

            <div className="productdetail-box-product">
                <div className='ProductDetail-main'>
                    <h3>All Products</h3>
                    <div className="ProductDetail-products">
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
                            {apiData?.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <Link to={{
                                        pathname: `/pukhya/productdetail/${formatPathname(i.title)}/`
                                    }} onClick={scrollToTop} key={i.id}>
                                        <div className="Subcategory-categories-card">
                                            <img src={i.cover} alt={i.title} />
                                            <div className="Subcategory-card-detail">
                                                <h2>{i.title}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
