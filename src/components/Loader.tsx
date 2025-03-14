import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      />
    </div>
  );
}
