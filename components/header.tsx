import React from "react";

export default function Header() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Ajay Krupal K</h1>
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
