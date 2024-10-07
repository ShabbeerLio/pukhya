import React, { useEffect, useState } from 'react'
import "./Subcategory.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import CategoriesData from '../Products/CategoriesData'

const Subcategory = (props) => {

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
                                        <div className="subcategory-title">
                                            <img src={subcategory.brand} alt="" />
                                            <h1>{subcategory.subcategory}</h1>
                                        </div>
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
                                <span>{subcategory.subcategory} products</span>
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
                                                    <p> {i.description.split(' ').slice(0, 18).join(' ')}
                                                        {i.description.split(' ').length > 18 && '...'}</p>
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
