import React from 'react'
import './privateLabel.css';
import { useTranslation } from 'react-i18next';
import PlLeftComponent from '../../components/plLeftComponent/plLeftComponent'



const PrivateLabel = () => {
    const { t } = useTranslation()
    const beige = "rgb(215,187,142)"
    const beigeLighter = "rgb(207,191,166)"
    const black = "rgb(0,0,0)"
    return (
        <div className="privateLabel">
            <div className="pl-entry">
                Private Label
            </div>
            <PlLeftComponent />
        </div>
    )
}
export default PrivateLabel