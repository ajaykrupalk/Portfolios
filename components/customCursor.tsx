"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
 const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
     <div
        className="fixed pointer-events-none z-50 transition-opacity duration-150"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Cursor Arrow */}
        <svg width="18" height="18" viewBox="0 0 20 24" fill="none" className="drop-shadow-md">
          <path d="M2 2L18 12L10 14L6 22L2 2Z" className="fill-sky-500 stroke-sky-500" strokeWidth="2" strokeLinejoin="round" />
        </svg>

        {/* Tooltip */}
        <div className="absolute left-4 top-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="rounded-lg p-2 pt-0 shadow-lg bg-sky-100 w-36">
            <p className="text-[12px] leading-1 text-sky-700">{"@"}ajaykrupalk</p>
            <p className="text-[12px] font-medium leading-none text-sky-800">Hey, welcome here.</p>
          </div>
        </div>
      </div>
  );
}
