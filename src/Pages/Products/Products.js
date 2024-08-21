import React from 'react'
import "./Products.css"
import Highlights from '../../Component/Highlights/Highlights'
import ProductCard from '../../Component/ProductCard/ProductCard'
import ProductData from './ProductData'
import CategoriesData from './CategoriesData'

const Products = () => {
    return (
        <div className='Products'>
            <Highlights />
            <div className='Products-main'>
                <div className='Products-box'>
                    <h3>Sports Biomechanics</h3>
                    {ProductData.map((item) => (
                        <ProductCard item={item} />
                    ))}
                </div>
            </div>
            <div className='Products-box2'>
                <h3>All Categories</h3>
                <div className="Products-categories">
                    {CategoriesData.map((item) => (
                        <div className="Products-categories-card">
                            <img src={item.cover} alt="" />
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
