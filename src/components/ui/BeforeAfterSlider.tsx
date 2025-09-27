"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = React.useState(50); // percent
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleDrag = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const newPosition = ((clientX - left) / width) * 100;
    setPosition(Math.min(100, Math.max(0, newPosition)));
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      handleDrag(e.clientX);
    }
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDrag(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleDrag(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-lg cursor-col-resize",
        className
      )}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchMove}
    >
      {/* After image = full background */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Before image clipped with clip-path (no zoom) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`, // reveals only left portion
        }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-8 -ml-4 flex items-center justify-center cursor-col-resize"
        style={{ left: `${position}%` }}
      >
        <div className="h-full w-1 bg-white shadow-md" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-gray-800 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4 4 4-4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
