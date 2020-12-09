import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "./items/use-dimensions";
import { MenuToggle } from "./items/MenuToggle";
import Navigation from "./items/Navigation";
import './mobilenav.css'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 335px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 380px 0px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const MobileNav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
document.querySelectorAll('.mobNavContainer ul li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.mobNavContainer button').click()
    })
})

export default MobileNav;
