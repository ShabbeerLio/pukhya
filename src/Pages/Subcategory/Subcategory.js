import React, { useEffect, useState } from 'react'
import "./Subcategory.css"
import { Link, useParams } from 'react-router-dom'
import CategoriesData from '../Products/CategoriesData'

const Subcategory = () => {
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
                setApiData(subcategories);
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
    const subcategory = apiData?.find(sub => formatPathname(sub.subcategory) === pathName);
    // console.log(subcategory, "got the data of product")

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };


    return (
        <div className='Subcategory'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                subcategory && (
                    <>
                        <div className='Subcategory-banner'>
                            <img src={subcategory.cover} alt="" />
                        </div>
                        <div className='Subcategory-main'>
                            <div className='Subcategory-card'>
                                <div className='Subcategory-box'>

                                    <div className='Subcategory-right'>
                                        <img src={subcategory.brand} alt="" />
                                        {/* <h1>{subcategory.title}</h1> */}
                                        <h2>{subcategory.title}</h2>
                                        <p>{subcategory.description}</p>
                                        <div className="Subcategory-details">
                                            <h3>{subcategory.subtitle}</h3>
                                            <p>{subcategory.subdesc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Subcategory-products">
                            <div className="Subcategory-products-box">
                                <h3>Products</h3>
                                <div className="subcategory-categories">
                                    {subcategory.Products.map((i) => (
                                        <Link to={{
                                            pathname: `/pukhya/productdetail/${formatPathname(i.title)}/`
                                        }} onClick={scrollToTop} key={i.id}>
                                            <div className="Subcategory-categories-card">
                                                <img src={i.cover} alt="" />
                                                <div className="Subcategory-card-detail">
                                                    <h2>{i.title}</h2>
                                                    {/* <p>{i.description}</p> */}
                                                    <div className="subcategory-btn">
                                                        <p>view detail</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ))}
        </div>
    )
}
export default Subcategory
