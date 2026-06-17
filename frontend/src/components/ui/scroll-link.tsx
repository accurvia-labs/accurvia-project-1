"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

interface ScrollLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  sectionId?: string;
}

export function ScrollLink({
  sectionId,
  href,
  children,
  ...props
}: ScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!sectionId) return;

    e.preventDefault();

    // Already on homepage just scroll to the section
    if (pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // On a different page, navigate homepage then scroll to the section
    router.push("/");
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
