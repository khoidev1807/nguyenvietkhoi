"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface StarProps {
  className?: string;
}

const Star: React.FC<StarProps> = ({ className }) => {
  return <div className={cn("stars", className)} />;
};

export default Star;
