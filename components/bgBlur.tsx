import React from "react";
import { motion } from "motion/react";

export default function Blur() {
    return (
        <>
            <motion.div
                initial={{ backdropFilter: "blur(5px)" }}
                animate={{ backdropFilter: "blur(0px)" }}
                transition={{ duration: 1 }}
                className={`fixed z-10 inset-0 pointer-events-none`}
            />
        </>
    );
}