import React from "react";
import { motion } from "motion/react";

export default function Cards() {
    return (
        <>
            <div className="w-full">
                <div className="relative w-full h-52">
                    {/* Left div */}
                    <a href="https://langground.vercel.app/" target="__blank">
                        <motion.div
                            className="absolute left-[100px] top-1/6 z-10 rounded-md"
                            initial={{ x: 0, rotate: 0, opacity: 0 }}
                            animate={{ x: "-50%", y: "10%", rotate: -15, opacity: 1 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                y: 10,
                                boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)"
                            }}
                        >
                            <div className="bg-white rounded-md w-[150px] h-[150px] border">
                                <motion.img
                                    className="rounded-md"
                                    src="/assets/project1.png"
                                    alt="project"
                                    width={1200}
                                    height={1200}
                                    initial={{ filter: "blur(5px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </a>

                    {/* Center div */}
                    <a href="https://canvaso.vercel.app/" target="__blank">
                        <motion.div
                            className="absolute left-[100px] z-20 rounded-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.2,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                y: -1,
                                boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)"
                            }}
                        >
                            <div className="bg-white rounded-md w-[150px] h-[150px] border">
                                <motion.img
                                    className="rounded-md"
                                    src="/assets/project2.png"
                                    alt="project"
                                    width={1200}
                                    height={1200}
                                    initial={{ filter: "blur(5px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </a>

                    {/* Right div */}
                    <a href="https://chat-in-js.vercel.app/" target="__blank">
                        <motion.div
                            className="absolute left-[100px] z-10 rounded-md"
                            initial={{ x: 0, rotate: 0, opacity: 0 }}
                            animate={{ x: "50%", y: "10%", rotate: 15, opacity: 1 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                y: 10,
                                boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)"
                            }}
                        >
                            <div className="bg-white rounded-md w-[150px] h-[150px] border">
                            <motion.img
                                    className="rounded-md"
                                    src="/assets/project3.png"
                                    alt="project"
                                    width={1200}
                                    height={1200}
                                    initial={{ filter: "blur(5px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </a>
                </div>
            </div>
        </>
    );
}