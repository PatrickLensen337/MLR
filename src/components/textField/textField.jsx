import React from 'react'
import { useTranslation } from 'react-i18next'
import './textField.css';


const TextField = () => {
    const { t } = useTranslation()

    return (
        <div className="vlak1">
            {t('homeTextOne.label')}
        </div>
    )
}

export default TextField