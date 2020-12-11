import './sltr.css'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { ReactComponent as ChevronRight } from '../../../assets/svg/chevronRight.svg'


const SLTR = ({ t, title, color, image, buttonlink, portrait, showbutton, subtitle, list }) => {
    const isPortrait = portrait;
    const showButton = showbutton;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.40,
    });

    let y = [];

    if (list === true) {
        subtitle.forEach((item, index) => {
            if (index === subtitle.length - 1) {
                y.push(item)
            } else {
                y.push(item += ' | ')
            }
        })
    }

    return (
        <div className="sltr">
            <div className="sltr-container">
                <div className="sltr-panel-container">
                    <motion.div
                        ref={ref}
                        className="sltr-panel"
                        style={{ backgroundColor: `${color}` }}
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
                    >
                        <div className="text-cont">
                            <div className="sltr-title">
                                {title}
                            </div>
                            <div className="sltr-subtitle">{list === true ? y : subtitle}</div>
                            <div className={showButton ? "sltr-readmore" : "hideButton"}>
                                <ChevronRight /> <Link to={buttonlink}>{t('readMore.label')}</Link>
                            </div>
                        </div>

                    </motion.div>
                    <motion.img
                        ref={ref}
                        src={image} alt="image"
                        className={isPortrait ? 'portRight' : 'landRight'}
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 1.5 }}
                        transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}

                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(SLTR)