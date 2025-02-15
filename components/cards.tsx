import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Project1 from "../public/assets/project1.png"
import Project2 from "../public/assets/project2.png"
import Project3 from "../public/assets/project3.png"

export default function Cards() {
    return (
        <>
            <div className="w-full">
                <div className="relative w-full h-52">
                    {/* Left div */}
                    <motion.div
                        className="absolute left-[100px] top-1/6 z-10 rounded-md"
                        initial={{ x: 0, rotate: 0, opacity: 0 }}
                        animate={{ x: "-50%", y: "10%", rotate: -15, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }}
                        whileHover={{ 
                            y: 10,
                            boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)" 
                        }}
                    >
                        <div className="bg-white rounded-md w-[150px] h-[150px] border">
                            <Image className="rounded-md" src={Project1} alt="project" width={1200} height={1200} />
                        </div>
                    </motion.div>

                    {/* Center div */}
                    <motion.div
                        className="absolute left-[100px] z-20 rounded-md"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{ 
                            y: -1,
                            boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)"
                        }}
                    >
                        <div className="bg-white rounded-md w-[150px] h-[150px] border">
                            <Image className="rounded-md" src={Project2} alt="project" width={1200} height={1200}/>
                        </div>
                    </motion.div>

                    {/* Right div */}
                    <motion.div
                        className="absolute left-[100px] z-10 rounded-md"
                        initial={{ x: 0, rotate: 0, opacity: 0 }}
                        animate={{ x: "50%", y: "10%", rotate: 15, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }}
                        whileHover={{ 
                            y: 10,
                            boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.08)" 
                        }}
                    >
                        <div className="bg-white rounded-md w-[150px] h-[150px] border">
                            <Image className="rounded-md" src={Project3} alt="project" width={1200} height={1200} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}