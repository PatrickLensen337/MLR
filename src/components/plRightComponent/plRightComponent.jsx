import './plRightComponent.css'
import { withTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const PlRightComponent = ({ title, list, image, color }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.40,
    });

    let y = [];

    list.forEach((item, index) => {
        if (index === list.length - 1) {
            y.push(item)
        } else {
            y.push(item += ' | ')
        }
    })

    return (
        <div className="plRightComponent">
            <motion.div
                ref={ref}
                className="een"
                style={{ backgroundColor: color }}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
                transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
            >

                <div className="plRightComponent-title">
                    {title}
                </div>
                <div className="plRightComponent-list">
                    {y}
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                className="twee"
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
                transition={{ ease: "easeOut", duration: 1, when: "beforeChildren", staggerChildren: 0.5 }}
            >
                <div className="plRightImage">
                    <img src={image} />
                </div>
            </motion.div>
        </div>
    )
}

export default withTranslation()(PlRightComponent)