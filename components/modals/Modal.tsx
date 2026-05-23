"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  children,
  onClose,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <DialogContent
        className={cn(
          `
        overflow-y-auto
        fixed 
        border 
        border-neutral-700 
        top-[50%] 
        left-[50%] 
        max-h-full 
        h-full 
        md:h-auto 
        md:max-h-[85vh] 
        w-full 
        md:w-[90vw] 
        md:max-w-[450px] 
        translate-x-[-50%]
        translate-y-[-50%]
        rounded-md 
        bg-[#f7f7f7]
        p-[25px] 
        focus:outline-none
        z-50
        `
        )}
      >
        {title && (
          <DialogTitle
            className="
              text-xl 
              text-center 
              font-bold 
              pb-4
              border-b-[1px]
              border-solid
              border-[#D1D5DB]
              "
          >
            {title}
          </DialogTitle>
        )}
        {description && (
          <DialogDescription
            className="
        mb-5 
        text-sm 
        leading-normal 
        text-center
      "
          >
            {description}
          </DialogDescription>
        )}

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
