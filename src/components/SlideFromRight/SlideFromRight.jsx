import React from 'react'
import { useInView } from 'react-intersection-observer'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './SlideFromRight.css'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'

const SlideFromRight = ({ t, children, title, color, image, buttonlink, portrait, showbutton, ...otherProps }) => {
    const isPortrait = portrait;
    const showButton = showbutton;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.40,
    });

    return (
        <div>
            <div className="slideFromRight-container">
                <div className={isPortrait ? "slideFromRight-one portDiv" : "slideFromRight-one"}>
                    <motion.div
                        ref={ref}
                        className="slideFromRight-two"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                    >
                        <img className={isPortrait ? "portRight" : "land"} src={image} alt={title} />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        style={{ backgroundColor: `${color}` }}
                        className='slideFromRight-four'
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
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