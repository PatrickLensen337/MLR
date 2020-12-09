import React from 'react'
import { withTranslation } from 'react-i18next'
import './tii.css'


const TextInImage = ({ t, title, text, image }) => {
    return (
        <div className="tii-container">
            <div className="tii-imageBack">
                <img src={image} />
            </div>
            <div className="tii-textContainer">
                <div className="tii-title">
                    {title}
                </div>
                <div className="tii-text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(TextInImage)