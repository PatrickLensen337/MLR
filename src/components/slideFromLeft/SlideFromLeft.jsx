import React from 'react'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './SlideFromLeft.css'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'


const SlideFromLeft = ({ t, children, title, color, image, buttonlink, portrait, showbutton, minheight, ...otherProps }) => {
    const isPortrait = portrait;
    const showButton = showbutton;
    return (
        <div>
            <div className="slideFromLeft-container">
                <div
                    className={isPortrait ? "slideFromLeft-one portDiv" : "slideFromLeft-one"}
                    style={{ minHeight: `${minheight}px` }}
                >
                    <motion.div
                        className="slideFromLeft-two"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                    >
                        <img class={isPortrait ? "port" : "land"} src={image} />

                    </motion.div>
                    <motion.div
                        initial={{ x: -1000, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
                        style={{ backgroundColor: `${color}` }}
                        className='slideFromLeft-four'
                    >
                        <div className="slideFromLeft-content slideFromLeft-title">{title}</div>
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
export default withTranslation()(SlideFromLeft)