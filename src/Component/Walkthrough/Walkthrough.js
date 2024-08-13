import React from 'react'
import "./Walkthrough.css"
import Form from '../Form/Form'
import rimg from "../../Assets/About/about.jpg"

const Walkthrough = () => {
    return (
        <div className='Walkthrough'>
            <div className='Walkthrough-main'>
                <div className="walkthrough-item">
                    <div className="walkthrough-left">
                        <img src={rimg} alt="" />
                    </div>
                    <div className="walkthrough-right">
                        <div className="walkthrough-form">
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walkthrough
