import React from 'react'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './SlideFromRight.css'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'

const SlideFromRight = ({ t, children, title, color, image, buttonlink, portrait, showbutton, ...otherProps }) => {
    const isPortrait = portrait
    const showButton = showbutton
    return (
        <div>
            <div className="slideFromRight-container">
                <div className={isPortrait ? "slideFromRight-one portDiv" : "slideFromRight-one"}>
                    <motion.div
                        className="slideFromRight-two"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                    >
                        <img class={isPortrait ? "portRight" : "land"} src={image} />
                    </motion.div>
                    <motion.div
                        initial={{ x: 1000, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
                        style={{ backgroundColor: `${color}` }}
                        className='slideFromRight-four'
                    >
                        <div className="slideFromRight-content slideFromRight-title">{title}</div>
                        <div
                            className={showButton ? "slideFromLeft-content slideFromLeft-button" : "hideButton"}

                        >
                            <ChevronRight /> <a href={buttonlink}>{t('readMore.label')}</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(SlideFromRight)