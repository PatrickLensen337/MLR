import './serviceTwo.css'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const ServiceTwo = ({ t, title, text, linkje, linkadres }) => {

    return (
        <div className="serviceTwo">
            <div
                className="serviceTwo-container"
            >

                <div className="serviceTwo-text-container">
                    <div className="serviceTwo-title">
                        {title}
                    </div>
                    <div className="serviceTwo-text">
                        {text}
                        {linkje ? <Link to={linkadres}> {linkje}</Link> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(ServiceTwo)

