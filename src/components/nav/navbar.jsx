import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LanguageSelector from '../switch/languageSwitch'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import './navbar.css'
import MobileNav from "../../components/nav/mobilenav/mobilenav";
import DesktopNav from "../../components/nav/desktop/desktopNav";
import { ReactComponent as TBSLogo } from '../../logo.svg';



const Navbar = ({ t }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


    return (
        <div id="one">
            {isDesktopOrLaptop && <>
                <div className="deskTBSLogo">
                    <TBSLogo />
                </div>
            </>}
            <div className="navContainer">
                {isDesktopOrLaptop && <>

                    <DesktopNav />
                </>}
                {isTabletOrMobileDevice &&
                    <div>
                        <div>
                            LOGO
                    </div>
                        <div className="mobNavContainer">
                            <MobileNav />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default withTranslation()(Navbar)