import React, { useEffect } from 'react'
import "./Home.css"
import Banner from '../../Component/Banner/Banner'
import Testimo from '../../Component/Testimo/Testimo'
import Need from '../../Component/Need/Need'
import Work from '../../Component/Work/Work'
import ChooseUs from '../../Component/ChooseUs/ChooseUs'
import HCategory from '../../Component/HCategory/HCategory'
import Walkthrough from '../../Component/Walkthrough/Walkthrough'
import PresClients from '../../Component/PresClients/PresClients'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
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
    return (<>

        <div className="home">
            <Banner />
            <ChooseUs />
            <Need />
            <HCategory />
            <PresClients />
            <Work />
            <Testimo />
            <Walkthrough />
        </div>

    </>
    )
}

export default Home
