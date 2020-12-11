import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import './tii.css'


const TextInImage = ({ t, title, text, image, linkje, linkadres }) => {
    return (
        <div className="tii-container">
            <div className="tii-imageBack">
                <img src={image} alt={title} />
            </div>
            <div className="tii-textContainer">
                <div className="tii-title">
                    {title}
                </div>
                <div className="tii-text">
                    {text}
                    {linkje ? <Link to={linkadres}>{linkje}</Link> : ''}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(TextInImage)


