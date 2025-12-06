import Image from "next/image";
import React from "react";
import PostcardImage from "../public/assets/postcard-stamp.png";

export default function Header() {
  return (
    <>
      <div className="flex w-full justify-between items-start">
        <div>
            <h1 className="font-bold text-xl">Ajay Krupal K</h1>
            <p className="mt-2 w-48 text-xs opacity-75">Turning ideas into reality through code</p>
        </div>
        <Image
          src={PostcardImage}
          alt="Bangalore"
          className="w-32 h-20 transform rotate-6"
        />
      </div>
      <p>I am a Senior Software Developer based in Bangalore, India.</p>
      <p>
        {"Currently, I work as a Senior Software Developer at"}
        {"  "}
        <a href="https://www.loyalytics.ai/" target="__blank">
          Loyalytics
        </a>
        {" where I build features for "}
        <a href="https://www.swan.cx/" target="__blank">
          Swan
        </a>
        {
          " the product which powers the largest retailers across the Middle East and Indonesia."
        }
      </p>
      <p>I love working at the intersection of development and AI.</p>
    </>
  );
}
