"use client";

import { NAV_LINKS } from "@/constants";
import link from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-b flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default navItems;
