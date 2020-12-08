import './desktopNav.css'
import LanguageSelector from '../../switch/languageSwitch'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const DesktopNav = ({ t }) => {
    return (
        <div className="desknav">
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
    )
};

export default withTranslation()(DesktopNav)
