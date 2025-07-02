"use client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IconButton } from "@mui/material";
import { useRef } from "react";

interface ScrollButtonsProps {
  children: React.ReactNode;
  scrollAmount?: number;
  isFlex?: boolean;
}

export default function ScrollButtons({
  children,
  scrollAmount = 300,
  isFlex = true,
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
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -50,
          right: 60,
          display: "flex",
          gap: 4,
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
        className="flex overflow-x-auto "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className={`flex gap-x-6 gap-y-6 ${
            !isFlex && "grid grid-rows-2 auto-cols-max "
          } `}
          style={{
            gridAutoFlow: "column",
            display: "grid",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
