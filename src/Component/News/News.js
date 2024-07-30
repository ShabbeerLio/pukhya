import React from 'react'
import "./News.css"
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div className='News'>
            <div className='News-main'>
                <div className="News-head">
                    <div className="News-title">
                        <p>Leatest</p>
                        <h3>Leatest<span>News</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt repellendus praesentium iste, optio architecto eum, ea labore cumque maiores aut fugit, accusamus ratione. Ut neque obcaecati odio esse voluptate?</p>
                </div>
                <div className="news-box">
                    <div className="news-card">
                        <div className="news-card-imag">
                            <img src="https://static.vecteezy.com/system/resources/previews/010/811/799/non_2x/medicine-doctor-hand-working-on-a-patients-x-ray-scans-digital-healthcare-and-connection-with-modern-virtual-screen-interface-icons-medical-technology-and-network-concept-free-photo.jpg" alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Restorative CRT</span>
                            <h3>Partner with NeuroZip for Improved Outcomes and ROI</h3>

                        </div>
                    </div>
                    <div className="news-card">
                        <div className="news-card-imag">
                            <img src="https://static.vecteezy.com/system/resources/previews/007/420/595/large_2x/medical-appointment-female-doctor-gives-professional-medical-help-to-male-patient-explains-written-information-on-paper-in-clipboard-gives-support-and-good-service-pose-at-hospital-near-desktop-free-photo.jpg" alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Compensatory CRT</span>
                            <h3>Advanced Digital Technology</h3>

                        </div>
                    </div>
                    <div className="news-card">
                        <div className="news-card-imag">
                            <img src="https://static.vecteezy.com/system/resources/previews/010/204/572/non_2x/asian-woman-using-lancet-on-finger-for-checking-blood-sugar-level-by-glucose-meter-healthcare-and-medical-diabetes-glycemia-concept-free-photo.jpg" alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Cognitive Rehabilitation</span>
                            <h3>Get inspired on how you can improve and restore brain function with your patients!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
