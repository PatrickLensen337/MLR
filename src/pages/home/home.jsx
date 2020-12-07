import React from 'react'
import './home.css';
import { useTranslation } from 'react-i18next';
import HomeIntro from '../../components/homeIntro/homeIntro'
import TextField from '../../components/textField/textField'
import SlideFromRight from '../../components/SlideFromRight/SlideFromRight'
import SlideFromLeft from '../../components/slideFromLeft/SlideFromLeft'
import homepage1 from '../../assets/images/homepage1.jpg'
import homepage2 from '../../assets/images/homepage2.jpg'
import homepage3 from '../../assets/images/homepage3.jpg'
import homepage4 from '../../assets/images/homepage4.jpg'
import homepage5 from '../../assets/images/homepage5.jpg'
import homepage6 from '../../assets/images/homepage6.jpg'

const Home = () => {
    const { t, i18n } = useTranslation()
    const beige = "rgb(215,187,142)"
    const beigeLighter = "rgb(207,191,166)"
    const beigeLight = "rgb(233,220,201)"
    const beigeLights = "rgb(239,229,216)"
    const black = "rgb(0,0,0)"
    return (
        <div>
            <HomeIntro />
            {/* <TextField /> */}
            <SlideFromRight color={beigeLighter} showbutton={true} image={homepage1} buttonlink="/service" title={t('serviceNavLink.label')} />
            <SlideFromLeft color={black} showbutton={true} portrait={true} image={homepage2} buttonlink="/collabs" title={t('collabsNavLink.label')} />
            <SlideFromRight color={beigeLighter} showbutton={true} image={homepage3} buttonlink="/privatelabel" title={t('privateLabelNavLink.label')} />
            <SlideFromLeft color={beige} showbutton={true} portrait={true} image={homepage4} buttonlink="/about" title={t('aboutNavLink.label')} />
            <SlideFromRight color={black} showbutton={true} portrait={true} image={homepage5} buttonlink="/career" title={t('careerNavLink.label')} />
            <SlideFromLeft color={beigeLighter} minheight={460} showbutton={true} portrait={false} image={homepage6} buttonlink="/contact" title={t('contactNavLink.label')} />
        </div>
    )
}
export default Home