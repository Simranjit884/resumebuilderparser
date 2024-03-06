"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";
import Image from "next/image";

function TopNavBar() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className=" flex w-full items-center justify-between">
        <Link href="/">
          <div>
            <Image src={"assets/heart.svg"} width={16} height={16} alt="logo" className="" />
            <h1 className="text-xl text-primary">Resume Builder and Parser</h1>
          </div>
        </Link>
        <nav aria-label="Site Nav Bar" className="flex items-center gap-2 text-sm font-medium">
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              href={href}
              className="rounded-md px-1.5 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default TopNavBar;
