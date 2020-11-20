import React from 'react'
import { useTranslation } from 'react-i18next'
import './languageSwitch.css';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div onChange={changeLanguage} className="switcher">
            <input type="radio" id="switchDutch" name="switchDutch" value="nl-nl" name="language" defaultChecked />
            <label for="switchDutch">Nederlands</label>
            <input type="radio" id="switchEnglish" value="en" name="language" />
            <label for="switchEnglish" className="switchFlag">English</label>
        </div>
    )
}

export default LanguageSelector