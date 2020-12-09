import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { withTranslation } from 'react-i18next'
import './navbar.css'
import MobileNav from "../../components/nav/mobilenav/mobilenav";
import DesktopNav from "../../components/nav/desktop/desktopNav";
import { ReactComponent as TBSLogo } from '../../logo.svg';



const Navbar = ({ t }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

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
                            <TBSLogo className="tbsLogoSvg" style={{ width: '50px', height: '60px', fill: 'white', padding: '0 19px' }} />
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