import React from 'react'
import "./Work.css"
import box1 from "../../Assets/Work/work1.jpg"
import box2 from "../../Assets/Work/work2.jpg"
import box3 from "../../Assets/Work/work3.jpeg"

const Work = () => {
    return (
        <div className='Work'>
            <div className='Work-main'>
                <div className='Work-box'>
                    <div className='Work-box-left'>
                        <div className="work-left-box1">
                            <img src={box1} alt="" />
                        </div>
                        <div className="work-left-box2">
                            <img src={box2} alt="" />
                        </div>
                        <div className="work-left-box3">
                            <img src={box3} alt="" />
                        </div>
                    </div>
                    <div className='Work-box-right'>
                        <div className="News-title">
                            {/* <p>Leatest</p> */}
                            <h3>How We<span>Work?</span></h3>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        01. Collaborative Approach
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    We partner with leading hospitals and medical experts to understand real-world needs and challenges.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        02. Innovative Development
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    Leveraging advanced technology, we design and develop practical, user-friendly healthcare solutions.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        03. Continuous Improvement
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    We are committed to ongoing refinement and enhancement of our systems to ensure optimal performance.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        04. Client Support
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    Our dedicated support team provides comprehensive assistance, ensuring smooth implementation and effective use of our solutions.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="Work-box-right-btun">
                            <p>Contact Us</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
