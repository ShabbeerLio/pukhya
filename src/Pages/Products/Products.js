import React, { useEffect, useState } from 'react'
import "./Products.css"
import Highlights from '../../Component/Highlights/Highlights'
import ProductCard from '../../Component/ProductCard/ProductCard'
import ProductData from './ProductData'
import CategoriesData from './CategoriesData'
import { Link } from 'react-router-dom'

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
                    {CategoriesData.map((item) => (
                        <Link to={{
                            pathname: `/${formatPathname(item.link)}/`
                        }} onClick={scrollToTop}>
                            <div className="Products-categories-card" key={item.id}>
                                <img src={item.cover} alt="" />
                                <h2>{item.Category}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
