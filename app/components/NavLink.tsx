"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative px-3 py-2 text-sm font-medium transition-colors duration-300
        ${isActive 
          ? "text-primary-2" 
          : "text-foreground hover:text-primary-2"
        }
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
        after:origin-left after:scale-x-0 after:bg-primary-2 after:transition-transform after:duration-300
        ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
      `}
    >
      {children}
    </Link>
  );
}

