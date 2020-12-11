import React from 'react'
import './service.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import Vlak1 from '../../components/vlakFotoOverlap/vlakFotoOverlap'
import TextInImage from '../../components/textInImage/textInImage'
import FotoEnTextCol from '../../components/fotoEnTextCol/fotoEnTextCol'
import ServiceOne from '../../components/desktop/serviceOne/serviceOne'
import ServiceTwo from '../../components/desktop/serviceTwo/serviceTwo'
import image1 from '../../assets/images/service/Service1.jpg'
import image2 from '../../assets/images/service/Service2.png'
import image3 from '../../assets/images/service/Service3.jpg'


const Service = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1000px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-device-width: 999px)'
    })

    const { t } = useTranslation()
    return (
        <div>
            {isDesktopOrLaptop && <>
                <ServiceOne title={t('serviceWatWeDoen.label')} text={t('serviceText1.label')} />
                <ServiceTwo title={t('serviceSubtitle2.label')} text={t('serviceText2.label')} />
                <FotoEnTextCol image={image3} title={t('serviceSubtitle3.label')} text={t('serviceText3.label')} />
            </>}
            {isMobile && <>
                <Vlak1 title={t('serviceNavLink.label')} subtitle={t('serviceSubtitle.label')} text={t('serviceText1.label')} image={image1} />
                <TextInImage image={image2} title={t('serviceSubtitle2.label')} text={t('serviceText2.label')} />
                <FotoEnTextCol image={image3} title={t('serviceSubtitle3.label')} text={t('serviceText3.label')} />

            </>}

        </div>
    )
}
export default Service