"use client";

import React from "react";
import Header from "../components/header";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Cards from "../components/cards";

import { motion } from "motion/react";

export default function HomePage() {
    return (
        <div className="flex flex-row justify-center py-20">
            <div className="flex flex-col w-[500px] justify-between gap-y-10 items-start pb-10 px-5">
                <motion.div
                    initial={{ backdropFilter: "blur(5px)" }}
                    animate={{ backdropFilter: "blur(0px)" }}
                    transition={{ duration: 1 }}
                    className={`fixed z-10 inset-0 pointer-events-none`}
                />
                <Header />
                <Cards />
                <Experience />
                <Footer />
            </div>
        </div >
    );
}