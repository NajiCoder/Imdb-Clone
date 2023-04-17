import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-96"
        src="loading_spinner.svg"
        alt="loading"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
}
