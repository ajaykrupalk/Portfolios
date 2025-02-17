import React from "react";

export default function Header() {
    return (
        <>
            <h1 className="font-bold text-xl">Ajay Krupal K</h1>
            <p>I am a software developer based in Bangalore, India.</p>
            <p>
                {"Currently, I work as a software developer at"}
                {"  "}
                <a href="https://www.loyalytics.ai/" target="__blank">Loyalytics</a> 
                {" where I build features for "}
                <a href="https://www.swan.cx/" target="__blank">Swan</a>  
                {" the product which powers the largest retailers across the Middle East and Indonesia."}
            </p>
            <p>I love working at the intersection of development and AI.</p>
        </>
    );
}