import React from 'react'
import './home.css';
import Sfl from '../../components/slideFromLeft/sfl';
import { useTranslation } from 'react-i18next';
import Image from '../../assets/images/1.jpg'

const Home = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <Sfl title={t('serviceNavLink.label')} color="rgb(215,187,142)" image={Image} />
        </div>
    )
}

export default Home