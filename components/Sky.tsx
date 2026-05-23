"use client";
import React from "react";
import ShootingStar from "./ShootingStar";
import Star from "./Star";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Dog from "./Dog";
import Cloud from "./Cloud";
import Avatar from "./ui/Avatar";

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

const Sky = () => {
  const { setTheme } = useTheme();
  return (
    <div className="h-[300px] md:h-[350px] relative ">
      <div className="h-full text-[5px] sm:text-[6px] lg:text-[8px]  relative z-[1px] overflow-hidden  ">
        <div className="dark:hidden">
          <Cloud className="top-[10%] left-[20%] absolute " />
          <Cloud className="top-[25%] left-[40%] absolute" />
          <Cloud className="top-[20%] left-[60%] absolute" />
          <Cloud className="top-[15%] left-[80%] absolute" />
          <Dog />
        </div>
        <div className="hidden dark:block">
          <Star className="left-[20%]" />
          <Star className="left-[40%]" />
          <Star className="left-[60%]" />
          <Star className="left-[80%]" />
          {stars.map((star, index) => {
            return <ShootingStar index={index} key={index} />;
          })}
        </div>
        <div
          className={cn(
            "h-full w-full absolute top-1/2 transition-transform duration-3000 rounded-[50%]",
            "dark:-rotate-180 rotate-0"
          )}
        >
          <button
            className="themeBtn_sun"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <div className="themeBtn_ray1"></div>
            <div className="themeBtn_ray2"></div>
            <div className="themeBtn_ray3"></div>
            <div className="themeBtn_ray4"></div>
          </button>
          <button
            className="themeBtn_moon"
            onClick={() => {
              setTheme("light");
            }}
          />
        </div>
      </div>
      <div className="absolute z-50 top-[95%] -translate-y-[100%] left-[50%] -translate-x-1/2 flex items-center flex-col justify-center text-center ">
        <Avatar className="w-[150px] h-[150px] md:w-[180px] md:h-[180px]"/>
        <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-back dark:text-white ">
          Nguyễn Việt Khôi
        </h1>
        <span className="font-semibold text-[14px] sm:text-[16px] text-[#f79e38] dark:text-stone-400">
          Cloud Enginner From Viet Nam
        </span>
      </div>
    </div>
  );
};

export default Sky;
