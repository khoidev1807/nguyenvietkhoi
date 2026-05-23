"use client";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

interface CertificateCardProps {
  className?: string;
  certName: string;
  time: string;
  issuer: string;
  certImageURL: StaticImageData;
  certUrl:string;

}

const CertificateCard: React.FC<CertificateCardProps> = ({
  className,
  certName,
  time,
  issuer,
  certImageURL,
  certUrl
}) => {
  return (
    <Card className={cn("bg-white border border-black/10 overflow-hidden relative shadow-sm", className)}>

      <div className="absolute top-0 left-0 right-0 h-[3px]" />


      <CardContent className="p-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Avatar className="w-10 h-10" />
            <div>
              <h4 className="font-semibold text-sm leading-snug">Nguyễn Việt Khôi</h4>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                {time} <Globe size={11} />
              </p>
            </div>
          </div>
          
        </div>
      </CardContent>

      <CardContent className="p-0 border-t border-gray-200">
        <Link href={certUrl}  target="_blank">
          <div className="flex items-start gap-3 px-4 py-3">
          <div className="rounded-lg flex items-center justify-center">
                <HoverCard openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                      <Image
                        className="rounded-sm col-span-1 cursor-pointer hover:opacity-[80%]"
                        src={certImageURL}
                        alt={certName}
                        height={50}
                        width={50}
                      />
              
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit px-2 py-1">
                    <h4 className="text-sm font-semibold dark:text-white text-[12px]">
                      @{certName}
                    </h4>
                  </HoverCardContent>
                </HoverCard>
            </div>
          <div>
            <p className="text-sm font-medium text-gray-800 leading-snug">Happy to announce that I have passed {certName}</p>
            <p className="text-xs text-gray-400 mt-0.5">{issuer}</p>
          </div>
        </div>
        </Link>
        
      </CardContent>

    </Card>
  );
};

export default CertificateCard;