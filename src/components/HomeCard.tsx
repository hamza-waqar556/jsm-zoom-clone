"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
  className: string;
  title: string;
  description: string;
  img: string;
  handleClick: () => void;
}

export default function HomeCard({
  className,
  title,
  description,
  img,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
    >
      <div
        className="flex flex-center glassmorphism size-12 rounded-[10px]"
        onClick={handleClick}
      >
        <Image src={img} alt="add-meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}
