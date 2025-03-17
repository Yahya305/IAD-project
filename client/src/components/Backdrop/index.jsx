import React from "react";
import { motion } from "framer-motion";

const BackDrop = (props) => {
    const { children, onClick, Animation } = props;
    return (
        <motion.div
            className="BackDrop"
            {...(Animation ?? PageAnimation)}
            style={Styling}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClick?.(e);
                }
            }}
        >
            {children ?? ""}
        </motion.div>
    );
};

const Styling = {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#000000AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 100,
    height: "100vh",
};

const PageAnimation = {
    variants: {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    },
    initial: "hidden",
    animate: "show",
    exit: "hidden",
};

export default BackDrop;
