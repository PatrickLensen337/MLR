import React from 'react'
import './career.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import Tii from '../../components/textInImage/textInImage';
import careerImage from '../../assets/images/careers/careers.1.jpg'
import ServiceTwo from '../../components/desktop/serviceTwo/serviceTwo'



const Career = () => {
    const { t } = useTranslation()

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 701px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-device-width: 700px)'
    })


    return (
        <div className="career">
            <div className="career-title">Career</div>
            { isDesktopOrLaptop && <>
                <ServiceTwo text={t('careerText.label')} linkje="info@thebrandstudio.nl" linkadres="/contact" />
            </>
            }
            { isMobile && <>
                <Tii text={t('careerText.label')} image={careerImage} linkje="info@thebrandstudio.nl" linkadres="/contact" />
            </>
            }
        </div>
    )
}
export default Career


