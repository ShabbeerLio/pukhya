import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { Link, useParams } from 'react-router-dom';
import CategoriesData from '../Products/CategoriesData';
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HighlightData from '../Products/HighlightData';

const ProductDetail = () => {

    const { pathName } = useParams();

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await CategoriesData
                const data = response;
                const subcategories = data.reduce((acc, category) => acc.concat(category.subcategories), []);
                const product = subcategories.reduce((acc, category) => acc.concat(category.Products), []);
                setApiData(product);
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
    const products = apiData?.find(sub => formatPathname(sub.title) === pathName);
    console.log(products, "got the data of product")

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
                products && (
                    <div className='ProductDetail-main'>
                        <div className='ProductDetail-card'>
                            <div className='ProductDetail-box'>
                                <div className='ProductDetail-left'>
                                    <img src={products.cover} alt="" />
                                </div>
                                <div className='ProductDetail-right'>
                                    <h2>{products.title}</h2>
                                    <p>{products.description}
                                        Aliquam temporibus error dolore provident inventore ipsam autem at obcaecati. Ipsa perferendis quod animi. Numquam ab doloremque voluptates sunt expedita at voluptate consequuntur fugiat quod.
                                    </p>
                                </div>
                            </div>
                            <div className="productDetail-details">
                                <h4>Applications for motion capture technology</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor soluta repudiandae natus praesentium dolorem labore ut est, voluptate impedit, cum temporibus, odio libero cupiditate sunt consequatur ipsum aliquid! Iure veniam placeat ullam, dolor, deleniti tenetur explicabo possimus provident deserunt, aut dicta id. Aliquam temporibus error dolore provident inventore ipsam autem at obcaecati. Ipsa perferendis quod animi. Numquam ab doloremque voluptates sunt expedita at voluptate consequuntur fugiat quod. Id alias voluptatum suscipit, quaerat corrupti, consequatur accusantium natus tempore magnam odit dolorum distinctio autem, eius repudiandae sed vel fugiat quibusdam explicabo velit earum voluptas.</p>
                                <div className="productDetail-details-box">
                                    <h3>Features</h3>
                                    <div className="productDetail-box-features">
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                        <div className="productDetail-features-card">
                                            <img src="https://cdn-content.qualisys.com/2021/07/D2A4465-sv_crop.jpg" alt="" />
                                            <h5>Applications for motion</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="productDetail-link">
                                    <Link to={"https://www.qualisys.com/"}>Visit the Company Website :- qualisys.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="productdetail-box-product">
                <div className='ProductDetail-main'>
                    <h3>All Products</h3>
                    <div className="ProductDetail-products">
                        <ReactOwlCarousel
                            dots={false}
                            nav={false}
                            loop={Infinity}
                            items={4}
                            autoplay={true}
                            autoplayTimeout={3000}
                        >
                            {HighlightData.map((i) => (
                                <Link to={{
                                    // pathname: `/pukhya/productdetail/${formatPathname(i.title)}/`
                                }} onClick={scrollToTop} key={i.id}>
                                    <div className="Subcategory-categories-card">
                                        <img src={i.cover} alt="" />
                                        <div className="Subcategory-card-detail">
                                            <h2>{i.title}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
