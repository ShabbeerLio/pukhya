import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import GalleryData from './GalleryData';

const Gallery = (props) => {

    const [model, setModel] = useState(false);
    const [imgview, setImgview] = useState('')

    const getImg = (img) => {
        setImgview(img);
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

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

    return (
        <>

            <div className='Gallery'>
                <div className='Gallery-main'>
                    <div className="Page-title">
                        <h1>Gallery</h1>
                    </div>
                    <div className={model ? "model open" : "model"}>
                        <IoMdClose onClick={closeModel} />
                        <img src={imgview} alt="eon noida expressway" />
                    </div>
                    <div className="gallery-box">
                        <div className="gallery-items1">
                            <img src={GalleryData[0].cover} alt={GalleryData[0].alttag} onClick={() => getImg(GalleryData[0].cover)} />
                        </div>
                        <div className="gallery-items2">
                            {GalleryData.slice(1, 5).map((item) => (
                                <img key={item.id} src={item.cover} alt={item.alttag} onClick={() => getImg(item.cover)} />
                            ))}
                        </div>
                    </div>
                    <div className="gallery-box2">
                        {GalleryData.slice(5).map((item) => (
                            <img key={item.id} src={item.cover} alt={item.alttag} onClick={() => getImg(item.cover)} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
