import './theteam.css'
import { withTranslation } from 'react-i18next'

const TheTeam = ({ name, title }) => {
    return (
        <div className="theteam-team">
            <div className="theteam-member">
                <div className="theteam-member-name">
                    {name}
                </div>
                <div className="theteam-member-title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(TheTeam)