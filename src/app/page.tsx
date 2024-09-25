import Link from "next/link";
import { routes } from "@/data/routes";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-8 row-start-2 m-auto w-full items-center justify-center lg:h-[80vh] content-center">
      {routes.map((route, index) => (
        <Link
          className="hover:bg-teal-950 font-semibold border md:h-48 md:w-64 h-32 w-48 flex flex-col gap-3 items-center justify-center text-center rounded-md bg-teal-900 backdrop-blur-md"
          key={index}
          href={route.href}
        >
          <route.icon />
          {route.name}
        </Link>
      ))}
    </div>
  );
}
