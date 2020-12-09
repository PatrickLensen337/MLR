import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../../../components/switch/languageSwitch'
import Logo from '../../../../logo.svg'


const variants = {
    open: {
        visibility: 'visible',
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        visibility: 'hidden',
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


const variantsSwitch = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100, staggerChildren: 0.07, delayChildren: 0.2 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 600, staggerChildren: 0.05, staggerDirection: -1 }
        }
    }
};



const Navigation = () => {
    const { t } = useTranslation()
    const navLinks = [
        {
            name: `${t('homeNavLink.label')}`,
            link: `/`
        },
        {
            name: `${t('serviceNavLink.label')}`,
            link: `/service`
        },
        {
            name: `${t('collabsNavLink.label')}`,
            link: `/collabs`
        },
        {
            name: `${t('privateLabelNavLink.label')}`,
            link: `/privatelabel`
        },
        {
            name: `${t('aboutNavLink.label')}`,
            link: `/about`
        },
        {
            name: `${t('careerNavLink.label')}`,
            link: `/career`
        },
        {
            name: `${t('contactNavLink.label')}`,
            link: `/contact`
        },
    ]

    return (
        <motion.ul variants={variants}>
            <motion.li
                variants={variantsSwitch}>
                <img className="TBSLogo" src={Logo} alt='logo' />
            </motion.li>

            {navLinks.map(i => (
                <MenuItem i={i.name} key={i.name} title={i.name} link={i.link} />
            ))}
            <motion.li
                className="languageMob"
                variants={variantsSwitch}><LanguageSelector /></motion.li>
        </motion.ul>
    )
}

export default Navigation
