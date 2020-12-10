import './form.css'
import { withTranslation } from 'react-i18next'

const Ztv = ({ text, title }) => {
    return (
        <div className="form">
            <form>
                <div className="form-container half name">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-container half">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-container full">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" id="message" rows='5' />
                </div>
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default withTranslation()(Ztv)