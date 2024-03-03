"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";

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
    ></header>
  );
}

export default TopNavBar;
