import './sltr.css'
import { withTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import image from '../../assets/images/careers/careers.1.jpg'
import { ReactComponent as ChevronRight } from '../../assets/svg/chevronRight.svg'


const SLTR = ({t, title, color, imageurl, buttonlink, portrait, showbutton, subtitle }) => {
    const isPortrait = portrait;
    const showButton = showbutton;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.40,
    });
    
    return (
        <div className="sltr">
            <div className="sltr-container">
                <div className="sltr-panel-container">
                    <motion.div 
                        ref={ref}
                        className="sltr-panel"
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
                    >
                        <div className="sltr-title">
                            Service
                        </div>
                        <div className="sltr-readmore">
                            <ChevronRight/> Lees meer
                        </div>
                        <motion.img 
                            ref={ref}
                            src={image} alt="image"
                            initial={{opacity:0, scale:1.5}}
                            animate={{opacity: inView ? 1 : 0, scale: inView ? 1 : 1.5}}
                            transition={{ delay: 0.2,ease: "easeOut", duration: 1}}

                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SLTR