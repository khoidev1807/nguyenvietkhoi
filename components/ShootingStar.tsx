"use client";
import React  from "react";
import { cn } from "@/lib/utils";

interface ShootingStarProps {
  index: number;
}

const ShootingStar: React.FC<ShootingStarProps> = ({ index }) => {
  const delay = (Math.random() * 10);
  const duration = (Math.random() * 10 + 10);
  const top =(Math.random() * 50);

  return (
    <div
      className={cn(`themeBtn_stars`)}
      style={{
        top: `${top}%`,
        left: `${index * 10}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default ShootingStar;
