"use client";

import React from "react";
import Header from "../components/header";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Cards from "../components/cards";

export default function HomePage() {
    return (
        <div className="flex flex-row justify-center py-20">
            <div className="flex flex-col w-[500px] justify-between gap-y-10 items-start pb-10">
                <Header />
                <Cards />
                <Experience />
                <Footer />
            </div>
        </div >
    );
}