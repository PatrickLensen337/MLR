import React from 'react'
import { useTranslation } from 'react-i18next'
import './languageSwitch.css';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        if (document.querySelector('button')) {
            document.querySelector('button').click()
        }
    }

    return (
        <div onChange={changeLanguage} className="switcher">
            <input type="radio" id="switchDutch" name="switchDutch" value="nl-nl" name="language" defaultChecked />
            <label className="languageSwitchLabel" for="switchDutch">NL</label>
            <input type="radio" id="switchEnglish" value="en" name="language" />
            <label className="languageSwitchLabel" for="switchEnglish">EN</label>
        </div>
    )
}

export default LanguageSelector