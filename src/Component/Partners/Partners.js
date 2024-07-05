import React from 'react'
import "./Partners.css"
import PartnersData from './PartnersData'
import PtrCard from '../PtrCard/PtrCard'

const Partners = () => {
    return (
        <div className='Partners'>
            <div className='Partners-main'>
                <div className='Partners-box'>
                    <div class="pcard3">
                        <div class="PtrCard">
                            <div class="PtrCard-box">
                                <div class="Partner-cards-title">
                                    <h5>SPECIAL THANKS TO</h5>
                                    <div class="first-layout">
                                        <h3>ALL OUR</h3>
                                        <h4>PARTNERS</h4>
                                    </div>
                                </div>
                            </div>
                            <span class="top"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                            <span class="bottom"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                            <span class="left"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                        </div>
                    </div>
                    <div class="pcard4">
                        <div class="PtrCard">
                            <div class="Partner-cards-title">
                                <div class="second-layout">
                                    <h4>6k</h4>
                                    <h3>+</h3>
                                </div>
                                <h6>SATISFIED CLIENTS</h6>
                            </div>
                            <span class="top"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                            <span class="bottom"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                            <span class="left"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg></span>
                        </div>
                    </div>
                    {PartnersData.map((item) => (
                        <>
                            <PtrCard item={item} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
