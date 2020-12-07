import * as React from "react";
import { motion } from "framer-motion";

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF"];

export const MenuItem = ({ i, title, link, }) => {
    return (
        <motion.li
            variants={variants}
            whileTap={{ scale: 0.95 }}
        >
            <div className="text-placeholder">
                <a href={link}>{title}</a>
            </div>
        </motion.li>
    );
};
