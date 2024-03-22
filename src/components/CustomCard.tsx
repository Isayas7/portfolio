import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomCard = ({ album, width, height, aspectRatio }) => {
  return (
    <Link href={""}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={"/p2.jpg"}
          alt={""}
          width={width}
          height={height}
          className={cn(
            "h-full w-full object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>

      <div className="space-y-1 text-base">
        <h3 className="font-medium leading-none mt-2">
          Food Ordering Application
        </h3>
        <p className="text-xs text-muted-foreground">Project description</p>
      </div>
    </Link>
  );
};

export default CustomCard;
