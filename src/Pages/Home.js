import React from 'react'
import "./Home.css"
import Banner from '../Component/Banner/Banner'
import Business from '../Component/Business/Business'
import Testimonials from '../Component/Testimonials/Testimonials'
import Partners from '../Component/Partners/Partners'
import Testimo from '../Component/Testimo/Testimo'
import Need from '../Component/Need/Need'
import Work from '../Component/Work/Work'
import ChooseUs from '../Component/ChooseUs/ChooseUs'

const Home = () => {
    return (<>

        <div className="home">
            <Banner />
            <Testimonials />
            <ChooseUs/>
            {/* <Business /> */}
            <Need />
            {/* <Partners /> */}
            <Work />
            <Testimo />
        </div>

    </>
    )
}

export default Home
