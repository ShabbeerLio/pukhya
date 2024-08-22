import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom';
import CategoriesData from '../Products/CategoriesData';

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
    const subcategory = apiData?.find(sub => formatPathname(sub.title) === pathName);
    console.log(subcategory, "got the data of product")


    return (
        <div className='ProductDetail'>
            <div className='ProductDetail-main'>
                {loading ? (
                    <div className="loader">
                        <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    subcategory && (
                        <div className='ProductDetail-card'>
                            <div className='ProductDetail-box'>
                                <div className='ProductDetail-left'>
                                    <img src={subcategory.cover} alt="" />
                                </div>
                                <div className='ProductDetail-right'>
                                    <img src={subcategory.brand} alt="" />
                                    {/* <h1>{subcategory.title}</h1> */}
                                    <h2>{subcategory.subtitle}</h2>
                                    <p>{subcategory.description}</p>
                                </div>
                            </div>
                            {subcategory.subDetail.map((item) => (
                                <div className="productDetail-details">
                                    <h3>{item.subtitle}</h3>
                                    <p>{item.subdesc}</p>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ProductDetail
