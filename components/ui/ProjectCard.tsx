"use client";
import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Airplay, Code, FileText, Globe } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ProjectDetailModal from "../modals/ProjectDetailModal";
import { TImageUrlVariants } from "../ui/Badge";
import Avatar from "./Avatar";

interface ProjectCardProps {
  className?: string;
  projectUrl: string;
  demoUrl: string;
  duration: string;
  imageUrl: string;
  description:string,
  title: string;
  type: string;
  stacks: {
    frontend: (TImageUrlVariants[`variant`])[];
    backend: (TImageUrlVariants[`variant`])[];
    database: (TImageUrlVariants[`variant`])[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  projectUrl,
  demoUrl,
  duration,
  imageUrl,
  title,
  type,
  description,
  stacks,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ProjectDetailModal
        stacks={stacks}
        title={title}
        type={type}
        isOpen={isOpen}
        description={description}
        onClose={onClose}
      />
      <Card
        className={cn(
          "bg-white border-[1px] border-solid border-black/60 ",
          className
        )}
      >
        <CardContent className=" p-[16px_0_8px_16px]">
          <div className="flex items-start gap-x-2">
            <Avatar className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
              <h4 className="font-semibold">Nguyễn Việt Khôi</h4>
              <h4 className=" items-center flex gap-x-1 text-[12px] font-light">
                {duration} <Globe size={12} opacity={0.6} />{" "}
              </h4>
            </div>
          </div>
        </CardContent>

        <CardContent className="p-0 overflow-hidden border-t-[1px] border-solid border-[#D1D5DB]">
          <Link href={demoUrl} target="_blank" >
            <div
              className="pt-[50%] relative"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
            ></div>
            <CardDescription className="p-4 bg-[#D1D5DB] font-semibold text-black">
              {title.toUpperCase()}
            </CardDescription>
          </Link>
        </CardContent>
        <CardContent className=" p-0   border-t-[1px] border-solid border-[#D1D5DB]">
          <div className=" grid grid-cols-3 gap-1 p-1">
            <Link
              target="_blank"
              href={projectUrl}
              className="opacity-[60%] rounded-sm py-1 px-2  w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]"
            >
              <Code size={16} />
              <span className="text-[16px]">source</span>
            </Link>
            <button
              onClick={onOpen}
              className="opacity-[60%] rounded-sm py-1 px-2  w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]"
            >
              <FileText size={16} />
              <span className="text-[16px]">details</span>
            </button>
            <Link
              target="_blank"
              href={demoUrl}
              className="opacity-[60%] rounded-sm py-1 px-2 w-full flex items-center gap-1 justify-center col-span-1 hover:bg-[#D1D5DB]"
            >
              <Airplay size={16} />
              <span className="text-[16px]">demo</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
