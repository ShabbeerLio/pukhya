import React from 'react'
import "./News.css"
import news1 from "../../Assets/News/news1.jpg"
import news2 from "../../Assets/News/news2.jpg"
import news3 from "../../Assets/News/news3.jpg"

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
                            <img src={news1} alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Restorative CRT</span>
                            <h3>Pukhya Announces Partnership with Top Hospitals</h3>

                        </div>
                    </div>
                    <div className="news-card">
                        <div className="news-card-imag">
                            <img src={news2} alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Compensatory CRT</span>
                            <h3>New User-Friendly System Solutions Rolled Out by Pukhya</h3>

                        </div>
                    </div>
                    <div className="news-card">
                        <div className="news-card-imag">
                            <img src={news3} alt="" />
                            <p> <span>29</span> Arpil 2024</p>
                        </div>
                        <div className="news-card-detail">
                            <span>Cognitive Rehabilitation</span>
                            <h3>Launches Cutting-Edge Technology to Improve Patient Care</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
