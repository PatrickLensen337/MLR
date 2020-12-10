import React from 'react'
import './contact.css';
import { useTranslation } from 'react-i18next';
import Form from '../../components/form/form'



const Contact = () => {
    const { t } = useTranslation()
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-title">Contact</div>
                <div className="contact-information">
                    The Brand Studio<br />
                    Ruwekampweg 4<br />
                    5222 AT 's-Hertogenbosch
                    <br /><br />
                    {t('contactTel.label')}<br />
                    info@thebrandstudio.nl
                </div>
                <div className="contact-text">
                    {t('contactText.label')}
                </div>
                <div className="contact-form">
                    <Form />
                </div>
            </div>
        </div>
    )
}
export default Contact