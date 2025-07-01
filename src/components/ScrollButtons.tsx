"use client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IconButton } from "@mui/material";
import { useRef } from "react";

interface ScrollButtonsProps {
  children: React.ReactNode;
  scrollAmount?: number;
}

export default function ScrollButtons({
  children,
  scrollAmount = 300,
}: ScrollButtonsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        border: "3px solid yellow",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -50,
          right: 60,
          display: "flex",
          gap: 1,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => scroll("left")}
          style={{
            background: "#f5f5f5",
          }}
        >
          <FiArrowLeft size={20} />
        </IconButton>
        <IconButton
          onClick={() => scroll("right")}
          style={{
            background: "#f5f5f5",
            color: "#ff3e7f",
          }}
        >
          <FiArrowRight size={20} />
        </IconButton>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-auto"
        style={{ border: "2px solid black" }}
      >
        {children}
      </div>
    </div>
  );
}
