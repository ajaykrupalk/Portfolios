"use client";

import React from "react";
import Header from "../components/header";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Cards from "../components/cards";

export default function HomePage() {
    return (
        <div className="flex justify-center py-20">
            <div className="relative flex flex-col w-[500px] gap-y-10 items-start pb-10 px-5">
                <div 
                    className="fixed top-0 left-0 w-full h-16 backdrop-blur-sm z-30"
                    style={{
                        maskImage: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
                        WebkitMaskImage: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)"
                      }}                      
                />
                <Header />
                <Experience />
                <Footer />
            </div>
        </div >
    );
}