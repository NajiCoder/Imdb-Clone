"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem(props) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre"); // get the genre from the url query params

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === props.params &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg "
        }`}
        href={`/?genre=${props.params}`}
      >
        {props.title}
      </Link>
    </div>
  );
}
