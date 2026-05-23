"use client";

import React from "react";
import { cn } from "@/lib/utils";
interface CloudProps {
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ className }) => {
  const duration = Math.random() * 4 + 4;
  const rotate = Math.random() * 80 - 40;

  return (
    <div
      className={cn(`cloud`, className)}
      style={{ animationDuration: `${duration}s`, rotate: `${rotate}deg` }}
    />
  );
};

export default Cloud;
