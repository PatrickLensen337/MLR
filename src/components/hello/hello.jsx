import React from 'react'
import { useTranslation } from 'react-i18next'
import './hello.css';
import Image from '../../assets/images/brandhomeMain.png'

const Hello = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className="sec1">
            <div className="divje"></div>
            <div className="imagge"><img src={Image} /></div>
            <div className="whitespace"></div>
        </div>
    )
}

export default Hello