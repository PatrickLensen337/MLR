import React from 'react'
import { useInView } from 'react-intersection-observer'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './SlideFromLeft.css'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'
import { Link } from 'react-router-dom'



const SlideFromLeft = ({ t, children, title, color, image, buttonlink, portrait, showbutton, minheight, subtitle, ...otherProps }) => {
    const isPortrait = portrait;
    const showButton = showbutton;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.40,
    });

    return (
        <div>
            <div className="slideFromLeft-container">
                <div
                    className={isPortrait ? "slideFromLeft-one portDiv" : "slideFromLeft-one"}
                    style={{ minHeight: `${minheight}px` }}
                >
                    <motion.div
                        ref={ref}
                        className="slideFromLeft-two"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1.7 }}
                    >
                        <img className={isPortrait ? "port" : "land"} src={image} alt={title} />

                    </motion.div>
                    <motion.div
                        ref={ref}
                        style={{
                            backgroundColor: `${color}`,
                        }}
                        className='slideFromLeft-four'
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
                    >
                        <div className="slideFromLeft-content slideFromLeft-title">{title}</div>
                        <div className="slideFromLeft-content slideFromLeft-subtitle">{subtitle}</div>
                        <div
                            className={showButton ? "slideFromLeft-content slideFromLeft-button" : "hideButton"}
                        >
                            <ChevronRight /> <Link to={buttonlink}>{t('readMore.label')}</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(SlideFromLeft)