import React from "react";
import Link from "next/link";
import { routes } from "@/data/routes";

export const Navbar = () => {
  return (
    <nav className="flex gap-4 items-center content-center text-center justify-center p-4 shadow-md sticky top-0 bg-background opacity-95 backdrop-blur-md">
      {routes.map((route, index) => (
        <Link
          className="hover:text-teal-600 font-semibold"
          key={index}
          href={route.href}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};
