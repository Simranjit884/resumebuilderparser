"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";

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
      <div className="">
        <Link href="/">
          <h2 className="text-xl">Resume Builder and Parser</h2>
        </Link>
      </div>
    </header>
  );
}

export default TopNavBar;
