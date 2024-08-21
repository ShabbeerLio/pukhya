import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
    return (
        <div className='ProductCard' style={{ backgroundColor: `${item.backcolor}` }}>
            <div className="productcard-left">
                <img src={item.cover} alt="" />
            </div>
            <div className="productcard-right">
                <img src={item.brand} alt="" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <Link>Explore</Link>
            </div>
        </div >
    )
}

export default ProductCard
