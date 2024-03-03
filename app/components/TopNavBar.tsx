"use client";

import { usePathname } from "next/navigation";

function TopNavBar() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return <header aria-label="Site Header"></header>;
}

export default TopNavBar;
