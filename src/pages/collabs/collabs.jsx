import React from 'react'
import './collabs.css';
import { useTranslation } from 'react-i18next';
import SlideFromRight from '../../components/SlideFromRight/SlideFromRight'
import SlideFromLeft from '../../components/slideFromLeft/SlideFromLeft'
import homepage2 from '../../assets/images/homepage2.jpg'
import image1 from '../../assets/images/collabs/collabs.1.jpg'
import image2 from '../../assets/images/collabs/collabs.2.jpg'
import image3 from '../../assets/images/collabs/collabs.3.jpg'
import image4 from '../../assets/images/collabs/collabs.4.jpg'


const Collabs = () => {
    const { t } = useTranslation()
    const beige = "rgb(215,187,142)"
    const beigeLighter = "rgb(207,191,166)"
    const black = "rgb(0,0,0)"
    return (
        <div className="collabs">
            <div className="collabs-title">
                Collabs
        </div>
            <SlideFromRight
                color={black}
                showButton={false}
                image={homepage2}
                portrait={true}
                title='MEAUXMEAUX'
                subtitle="by monica geuze & danique bossers"
            />
            <SlideFromLeft
                color={beigeLighter}
                showButton={false}
                image={image2}
                title='BEAUTYNEZZ'
            />
            <SlideFromRight
                color={beige}
                showButton={false}
                image={image3}
                portrait={true}
                title='MIKKY KIEMENEY'
            />

            <SlideFromLeft
                color={black}
                showButton={false}
                image={image4}
                title='GRACE & US'
                subtitle='BY ANOUK SMULDERS'
            />
        </div>
    )
}
export default Collabs