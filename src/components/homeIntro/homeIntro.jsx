import React from 'react'
import './homeIntro.css';
import Vid from '../../assets/videos/tbsmov.MOV'
import TextField from '../../components/textField/textField'
import { useMediaQuery } from 'react-responsive'

const HomeIntro = () => {
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