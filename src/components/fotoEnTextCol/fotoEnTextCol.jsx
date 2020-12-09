import React from 'react'
import { withTranslation } from 'react-i18next'
import './fotoEnTextCol.css'


const FotoEnTextCol = ({ t, title, text, image }) => {
    return (
        <div className="fetc-container">
            <div className="fetc-image">
                <img src={image} alt={title} />
            </div>
            <div className="fetc-textContainer">
                <div className="fetc-title">
                    {title}
                </div>
                <div className="fetc-text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(FotoEnTextCol)