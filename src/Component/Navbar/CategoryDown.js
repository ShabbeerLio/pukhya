import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesData from '../../Pages/Products/CategoriesData';
import "./CategoryDown.css";

const CategoryDown = ({closeMenu}) => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);

    const allSubcategories = CategoriesData.reduce((acc, category) => {
        return [...acc, ...category.subcategories];
    }, []);
    const allProducts = allSubcategories.reduce((acc, subcategories) => {
        return [...acc, ...subcategories.Products];
    }, []);

    console.log(allProducts, "allProducts")
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        closeMenu();
    };

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <>
            <div
                className={`categorydown ${activeCategory === null ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(null)}
            >
                <Link className='categorydown-left'>
                    All Products
                </Link>
                <div className='categorydown-right all-brands'>
                    <h5><Link >
                        All Brands
                    </Link></h5>
                    <div className='category-right-product' >
                        {allSubcategories.map((subItem, index) => (
                            <>
                                <Link
                                    onMouseEnter={() => setActiveCategory(null)}
                                    to={{
                                        pathname: `/pukhya/${formatPathname(subItem.subcategory)}/`
                                    }} onClick={scrollToTop} key={subItem.id}>
                                    {subItem.subcategory}
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
                <div className='categorydown-right all-products'>
                    <h5><Link >
                        All Products
                    </Link></h5>
                    <div className='category-right-product' >
                        {allProducts.map((subItem, index) => (
                            <Link to={{
                                pathname: `/pukhya/${formatPathname(subItem.title)}/`
                            }} onClick={scrollToTop} key={subItem.id}>
                                {subItem.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {CategoriesData.map((item, index) => (
                <div
                    key={index}
                    className={`categorydown ${activeCategory === item ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCategory(item)}
                >
                    <Link to={`/${(item.link)}/`} onClick={scrollToTop} className='categorydown-left'>
                        {item.Category}
                    </Link>
                    {activeCategory === item && (
                        <div className='categorydown-right'>
                            <h5><Link to={item.link}>
                                {item.Category}
                            </Link></h5>

                            <div className='category-right-product' >
                                {item.subcategories.map((subItem, subIndex) => (
                                    <>
                                        <Link
                                            className={`categorydown ${activeCategory === item ? 'active' : ''}`}
                                            onMouseEnter={() => setActiveSubCategory(subItem)}
                                            to={{
                                                pathname: `/pukhya/${formatPathname(subItem.subcategory)}/`
                                            }} onClick={scrollToTop} key={subIndex}>
                                            {subItem.subcategory}
                                        </Link>
                                        {activeSubCategory === subItem && (
                                            <div className='categorydown-right-products'>
                                                <h5><Link to={subItem.link}>
                                                    {subItem.subcategory}
                                                </Link></h5>

                                                <div className='category-product' >
                                                    {subItem.Products.map((products, subIndex) => (
                                                        <>
                                                            <Link
                                                                to={{
                                                                    pathname: `/pukhya/productdetail/${formatPathname(products.title)}/`
                                                                }} onClick={scrollToTop} key={subIndex}>
                                                                {products.title}
                                                            </Link>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    )}
                </div >
            ))}


        </>
    );
};

export default CategoryDown;
