import React, { useEffect, useState } from 'react';
import "./Brands.css";
import CategoriesData from '../Products/CategoriesData';
import { useLocation } from 'react-router-dom';

const Brands = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [props.title, props.descriptions, location.pathname]);

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
