"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={cn(`rounded-full overflow-hidden w-[180px] h-[180px] relative`,className)}>
      <Image src={"/assets/me.jpg"} alt="me" fill priority />
    </div>
  );
};

export default Avatar;
