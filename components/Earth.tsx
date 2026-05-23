"use client";
import React from "react";

import IconBadge from "./ui/IconBadge";

const Earth = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-500 border-0"></hr>
      <div className="mx-auto  p-4 flex  text-center text-neutral-900 justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © {currentYear} Khôi Nguyễn<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
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
      </div>
    </footer>
  );
};

export default Earth;
