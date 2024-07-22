import React from 'react'
import "./Home.css"
import Banner from '../Component/Banner/Banner'
import BannerData from '../Component/Datas/BannerData'
import Business from '../Component/Business/Business'
// import Map from '../Component/Map/Map'
import ChooseUS from '../Component/ChooseUS/ChooseUS'
import Testimonials from '../Component/Testimonials/Testimonials'
import Footer2 from '../Component/Footer2/Footer2'
import Wave from '../Component/Wave/Wave'
import Partners from '../Component/Partners/Partners'
import Testimo from '../Component/Testimo/Testimo'
import Floor from '../Component/Floor/Floor'
import Need from '../Component/Need/Need'
import Work from '../Component/Work/Work'

const Home = () => {
    return (<>

        <div className="home">
            <Banner />
            {/* <Map /> */}
            <Testimonials />
            <Business />
            <Partners />
            {/* <ChooseUS /> */}
            {/* <Floor /> */}
            {/* <Footer2 /> */}
            <Need/>
            <Work/>
            <Testimo />
            {/* <Blog2 /> */}
            {/* <Wave /> */}

        </div>

    </>
    )
}

export default Home
