import './ztv.css'
import { withTranslation } from 'react-i18next'

const Ztv = ({ text, title }) => {
    return (
        <div className="ztv">
            <div className="ztv-title">
                {title}
            </div>
            <div className="ztv-vlak">
                <div className="ztv-text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Ztv)