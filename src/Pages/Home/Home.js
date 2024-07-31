import React from 'react'
import "./Home.css"
import Banner from '../../Component/Banner/Banner'
import Testimo from '../../Component/Testimo/Testimo'
import Need from '../../Component/Need/Need'
import Work from '../../Component/Work/Work'
import ChooseUs from '../../Component/ChooseUs/ChooseUs'
import News from '../../Component/News/News'
import AboutUs from '../../Component/AboutUs/AboutUs'

const Home = () => {
    return (<>

        <div className="home">
            <Banner />
            <AboutUs />
            <ChooseUs />
            <Need />
            <Work />
            <Testimo />
            <News />
        </div>

    </>
    )
}

export default Home
