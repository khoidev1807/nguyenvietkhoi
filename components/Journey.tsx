"use client";

import { cn } from "@/lib/utils";
import React from "react";

import Badge, { TImageUrlVariants } from "./ui/Badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface JourneyProps {
  className?: string;
}

type TJourney = {
  title: string;
  icon: TImageUrlVariants["variant"];
  description: string;
  startTime: string;
  endTime: string;
  companyName: string;
  location: string;
  isActive?: boolean;
};

const professionals: TJourney[] = [
  {
    description: "",
    companyName: "Accenture",
    location: "HCM city",
    title: "Cloud engineer",
    icon: "accenture",
    startTime: "6/2025",
    endTime: "current",
    isActive: true,
  },
  {
    description: "",
    companyName: "KMS Technology",
    location: "HCM city",
    title: "QA engineer intern",
    icon: "kms",
    startTime: "8/2024",
    endTime: "11/2024",
  }
];

const educations: TJourney[] = [
  {
    description: "",
    companyName: "UEH University",
    location: "HCM city",
    title: "Software Engineer Graduate",
    icon: "ueh",
    startTime: "2021",
    endTime: "2025",
  },
];

const Journey: React.FC<JourneyProps> = ({ className }) => {
  return (
    <Card className={cn(`bg-white shadow-md`, className)}>
      <CardHeader>
        <CardTitle>Journey</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Card className="border-0 border-none shadow-none p-0">
          <CardHeader>
            <CardTitle className="text-lg">Professional</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-0">
            {professionals.map((j, i) => {
              return (
                <div key={i} className="relative overflow-hidden">
                  <div className="absolute left-9 top-[15px] w-[4px] h-full bg-gray-300  origin-top" />
                  <ul className="w-full ml-4 sm:ml-2">
                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start">
                      <figure
                        className={cn(" absolute left-[6px] -top-[10px]")}
                      >
                        <svg
                          className="-rotate-90 "
                          width="65"
                          height="75"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="75"
                            cy="50"
                            r="15"
                            pathLength="1"
                            className=" fill-none stroke-1 stroke-blue-200 "
                          />
                          <circle
                            cx="75"
                            cy="50"
                            r="15"
                            pathLength="1"
                            className="stroke-[5px] fill-blue-200 "
                            strokeDashoffset="0px"
                            strokeDasharray="1px 1px"
                          />
                          <circle
                            cx="75"
                            cy="50"
                            r="10"
                            pathLength="1"
                            className={cn(
                              " stroke-1  ",
                              j.isActive ? "fill-blue-600" : "fill-white"
                            )}
                          />
                        </svg>
                      </figure>
                      <div className="text-left ml-1 space-y-1">
                        <CardDescription className=" text-blue-600 font-bold text-[16px] ">
                          {j.title}
                        </CardDescription>

                        <div className="flex items-end gap-x-2">
                          <Badge
                            variant={j.icon}
                            className="w-[24px] h-[24px]"
                          />
                          <span className="capitalize  text-[12px] font-semibold">
                            {j.startTime} - {j.endTime} | {j.companyName},{" "}
                            {j.location}
                          </span>
                        </div>

                        <p className="font-medium w-full text-[12px] opacity-[80%] ">
                          {j.description}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card className="border-0 border-none shadow-none p-0">
          <CardHeader>
            <CardTitle className="text-lg">Education</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-0">
            {educations.map((j, i) => {
              return (
                <div key={i} className="relative overflow-hidden">
                  <div className="absolute left-9 top-[15px] w-[4px] h-full bg-gray-300  origin-top" />
                  <ul className="w-full ml-4 sm:ml-2">
                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start">
                      <figure
                        className={cn(" absolute left-[6px] -top-[10px]")}
                      >
                        <svg
                          className="-rotate-90 "
                          width="65"
                          height="75"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="75"
                            cy="50"
                            r="15"
                            pathLength="1"
                            className=" fill-none stroke-1 stroke-blue-200 "
                          />
                          <circle
                            cx="75"
                            cy="50"
                            r="15"
                            pathLength="1"
                            className="stroke-[5px] fill-blue-200 "
                            strokeDashoffset="0px"
                            strokeDasharray="1px 1px"
                          />
                          <circle
                            cx="75"
                            cy="50"
                            r="10"
                            pathLength="1"
                            className={cn(
                              " stroke-1  ",
                              j.isActive ? "fill-blue-600" : "fill-white"
                            )}
                          />
                        </svg>
                      </figure>
                      <div className="text-left ml-1 space-y-1">
                        <CardDescription className=" text-blue-600 font-bold text-[16px] ">
                          {j.title}
                        </CardDescription>

                        <div className="flex items-end gap-x-2">
                          <Badge
                            variant={j.icon}
                            className="w-[24px] h-[24px]"
                          />
                          <span className="capitalize  text-[12px] font-semibold">
                            {j.startTime} - {j.endTime} | {j.companyName},{" "}
                            {j.location}
                          </span>
                        </div>

                        <p className="font-medium w-full text-[12px] opacity-[80%] ">
                          {j.description}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Journey;
