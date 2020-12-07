import React from 'react'
import { useTranslation } from 'react-i18next'
import './homeIntro.css';
import Image from '../../assets/images/brandhomeMain.png'
import Vid from '../../assets/videos/tbsmov.MOV'
import TextField from '../../components/textField/textField'
import { useMediaQuery } from 'react-responsive'

const HomeIntro = () => {
    const { t, i18n } = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    return (
        <div className="homeIntro">
            {isDesktopOrLaptop && <>
                <div className="be">
                    <video src={Vid} width="1000" height="500" autoPlay muted />
                </div>
            </>}

            <TextField />
        </div>
    )
}

export default HomeIntro