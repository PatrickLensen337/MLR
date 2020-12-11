import React from 'react'
import { withTranslation } from 'react-i18next'
import './vlakFotoOverlap.css'


const vlakFotoOverlap = ({ t, title, subtitle, text, image }) => {
    return (
        <div className="vfo-container">
            <div className="vfo-content">
                <div className="vfo-title">
                    {title}
                </div>
                <div className="vfo-subtitle">
                    {subtitle}
                </div>
                <div className="vfo-text">
                    {text}
                </div>
            </div>
            <div className="vfo-image">
                <img src={image} alt={title}></img>
            </div>
        </div>
    )
}

export default withTranslation()(vlakFotoOverlap)