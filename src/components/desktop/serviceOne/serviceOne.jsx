import './serviceOne.css'
import { withTranslation } from 'react-i18next'
import image from '../../../assets/images/service/Service1.jpg'


const ServiceOne = ({ t, title, text }) => {

    return (
        <div className="serviceOne">
            <div className="serviceOne-container">
                <div className="serviceOne-left">
                    <div className="serviceOne-left-title">
                        Service
                    </div>
                    <div className="serviceOne-left-image">
                        <img src={image} alt="service afbeelding" />
                    </div>
                </div>
                <div className="serviceOne-right">
                    <div className="serviceOne-right-title">
                        {title}
                    </div>
                    <div className="serviceOne-right-content-title">
                        Brand development & building
                    </div>
                    <div className="serviceOne-right-content-text">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(ServiceOne)

