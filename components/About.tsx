"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GraduationCap, Home, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import IconBadge from "./ui/IconBadge";

import FullSizeBtn from "./ui/FullSizeBtn";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>About me</CardTitle>
        <CardDescription className=" text-blue-600 font-bold ">
          Dev by day, gamer by night. Hardworking, responsible, and competitive.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-col gap-4 opacity-[80%]">
          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <GraduationCap size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              Studied Sofware Engineering at{" "}
              <Link
                className="font-semibold underline"
                target="_blank"
                href="https://www.ueh.edu.vn/"
              >
                University of Economics Ho Chi Minh city
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <Home size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              Ho Chi Minh, Viet Nam
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="">
              {" "}
              <Mail size={24} opacity={0.5} />
            </div>
            <div className="text-[14px] font-normal leading-[24px]">
              <Link
                className="font-semibold underline"
                target="_blank"
                href="mailto:khoinguyenviet1807@gmail.com"
              >
                khoinguyenviet1807@gmail.com
              </Link>
            </div>
          </div>
          <Link href={'/assets/NguyenVietKhoi.pdf'}  target="_blank">
            <FullSizeBtn className="">
              My Resume
            </FullSizeBtn>   
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2 justify-end">
          <IconBadge
            backgroundColor="#000"
            url="https://github.com/khoidev1807"
            iconName="github"
          />

           <IconBadge
            backgroundColor="#0077B5"
            url="https://www.linkedin.com/in/nguyen-viet-khoi-07677a27b/"
            iconName="linkedin"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default About;
