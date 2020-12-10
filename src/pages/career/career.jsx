import React from 'react'
import './career.css';
import { useTranslation } from 'react-i18next';
import Tii from '../../components/textInImage/textInImage';
import careerImage from '../../assets/images/careers/careers.1.jpg'



const Career = () => {
    const { t } = useTranslation()
    return (
        <div className="career">
            <div className="career-title">Career</div>
            <Tii text={t('careerText.label')} image={careerImage} linkje="info@thebrandstudio.nl" linkadres="/contact" />
        </div>
    )
}
export default Career