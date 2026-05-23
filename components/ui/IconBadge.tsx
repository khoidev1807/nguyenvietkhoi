import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import Link from "next/link";

interface IconBadgeProps extends LucideProps {
  iconName: keyof typeof dynamicIconImports;
  url: string;
  backgroundColor?: string;
  className?: string;
}

const IconBadge = ({
  iconName,
  url,
  backgroundColor,
  className,
  ...props
}: IconBadgeProps) => {

    var LucideIcon = dynamic(dynamicIconImports[iconName]);
    return (
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          " flex items-center justify-center w-[24px] h-[24px] shadow-sm  rounded-[50%] cursor-pointer hover:scale-105 ease-in duration-300"
        )}
        style={{
          backgroundColor: `${
            backgroundColor ? backgroundColor : `transparent`
          }`,
        }}
      >
        <div className="">
          <LucideIcon size={16} color="white" />
        </div>
      </Link>
    );
};

export default IconBadge;
