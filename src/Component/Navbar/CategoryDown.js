import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesData from '../../Pages/Products/CategoriesData';
import "./CategoryDown.css";

const CategoryDown = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    const allSubcategories = CategoriesData.reduce((acc, category) => {
        return [...acc, ...category.subcategories];
    }, []);

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
        <>
            <div
                className={`categorydown ${activeCategory === null ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(null)}
            >
                <Link className='categorydown-left'>
                    All Products
                </Link>
                <div className='categorydown-right all-products'>
                    <h5><Link >
                        All Products
                    </Link></h5>
                    <div className='category-right-product' >
                        {allSubcategories.map((subItem, index) => (
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
                                        {subItem.subProduct?.length > 0 ? (
                                            <div className="accordion accordion-flush" id={`accordionFlush-${index}-${subIndex}`} key={subIndex}>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id={`flush-heading-${index}-${subIndex}`}>
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#flush-collapse-${index}-${subIndex}`}
                                                            aria-expanded="false"
                                                            aria-controls={`flush-collapse-${index}-${subIndex}`}
                                                        >
                                                            <Link to={subItem.link}>{subItem.title}</Link>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`flush-collapse-${index}-${subIndex}`}
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby={`flush-heading-${index}-${subIndex}`}
                                                        data-bs-parent={`#accordionFlush-${index}-${subIndex}`}
                                                    >
                                                        <div className="accordion-body">
                                                            {subItem.subProduct.map((i, subProductIndex) => (
                                                                <Link
                                                                    to={{
                                                                        pathname: `/pukhya/${formatPathname(i.name)}/`
                                                                    }} onClick={scrollToTop} key={i.id}>{i.name}</Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={{
                                                    pathname: `/pukhya/${formatPathname(subItem.title)}/`
                                                }} onClick={scrollToTop} key={subIndex}>
                                                {subItem.title}
                                            </Link>
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
