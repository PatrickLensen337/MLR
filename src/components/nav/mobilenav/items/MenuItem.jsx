import * as React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 600 }
        }
    }
};

const closeNav = (e) => {
    document.querySelector('.navContainer button').click()
    if (e.target.pathname === '/') {
        console.log(this)
        document.querySelector('.navContainer').style.backgroundColor = "black";
        document.querySelector('.tbsLogoSvg').style.fill = "white"
        document.querySelectorAll('.navContainer button svg path').forEach(item => {
            item.style.stroke = "hsl(0, 0%, 80%)"
        })
    } else {
        document.querySelector('.navContainer').style.backgroundColor = "white";
        document.querySelector('.tbsLogoSvg').style.fill = "black"
        document.querySelectorAll('.navContainer button svg path').forEach(item => {
            item.style.stroke = "black"
        })
    }
}

export const MenuItem = ({ i, title, link, }) => {
    return (
        <motion.li
            variants={variants}
            whileTap={{ scale: 0.95 }}
        >
            <div className="menuText">
                <Link to={link} onClick={closeNav}>
                    {title}
                </Link>
            </div>
        </motion.li>
    );
};
