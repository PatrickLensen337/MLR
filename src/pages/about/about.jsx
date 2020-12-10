import React from 'react'
import './about.css';
import { useTranslation } from 'react-i18next';
import Ztv from '../../components/zwartTextVlak/ztv'
import TheTeamMember from '../../components/theteam/theteam'



const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <div className="aboutus">
            <Ztv text={t('aboutUsText.label')} title={t('aboutUsTitle.label')} />
            <div className="theteam">
                <div className="theteam-title">
                    {t('aboutUsTeamTitle.label')}
                </div>
                <TheTeamMember name="Sharon Hilgers" title="creative director" />
                <TheTeamMember name="Vilmar bliekendaal" title="finace director" />
                <TheTeamMember name="Muriel Drent" title="creative concept director" />
                <TheTeamMember name="Heidi Furrur" title="creative concept director beauty" />
                <TheTeamMember name="Annemieke Hofman" title="creative concept manager home & fashion" />
                <TheTeamMember name="Anita van Malsen" title="accountmanager jewellery & fashion" />
                <TheTeamMember name="Sanne van Haandel" title="project manager" />
                <TheTeamMember name="Catharina Kaagman" title="project manager" />
                <TheTeamMember name="pascalle erkeland" title="designer" />
                <TheTeamMember name="Rikst Mollinga" title="buying & supply chain coÖrdinator" />
            </div>
        </div>
    )
}
export default AboutUs