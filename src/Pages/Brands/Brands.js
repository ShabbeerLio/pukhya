import React, { useState } from 'react';
import "./Brands.css";
import CategoriesData from '../Products/CategoriesData';

const Brands = () => {
    const [activeCategory, setActiveCategory] = useState(CategoriesData[0]);

    return (
        <div className='Brands'>
            <div className='Brands-main'>
                <div className="about-title">
                    <p>Pukhya</p>
                    <h3>Associated<span>Brands</span></h3>
                </div>
                <div className="Brands-box">
                    <div className="brands-left">
                        <h3>Categories</h3>
                        {CategoriesData.map((item) => (
                            <div className={`brands-left-card ${activeCategory === item ? 'active' : ''}`} onClick={() => setActiveCategory(item)}>
                                <p>{item.Category}</p>
                            </div>
                        ))}
                    </div>
                    <div className="brands-right">
                        <h3>Brands</h3>
                        <div className="brands-right-box">
                            {activeCategory && activeCategory.subcategories.map((item) => (
                                <div className='brand-right-card'>
                                    <img src={item.brand} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
