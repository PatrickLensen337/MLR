import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LanguageSelector from '../switch/languageSwitch'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import './navbar.css'
import Logo from '../../logo.svg'
import Example from "../../components/nav/mobilenav/mobilenav";



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
        <div>
            {isDesktopOrLaptop && <>
                <img className="TBSLogo" src={Logo} />
                <div class="navContainer">
                    <ul className="navbar">
                        <li>
                            <Link to='/'>
                                {t('homeNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/service'>
                                {t('serviceNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/collabs'>
                                {t('collabsNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/privatelabel' title="Private">
                                {t('privateLabelNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                {t('aboutNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/career'>
                                {t('careerNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                {t('contactNavLink.label')}
                            </Link>
                        </li>
                        <li>
                            <LanguageSelector />
                        </li>
                    </ul>
                </div>
            </>}
            {isTabletOrMobileDevice &&
                <Example />
            }
        </div>
    )
}

export default withTranslation()(Navbar)