"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Facebook, Instagram, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links: { name: string; href: string }[] = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  {
    name: "Our Board Game Collection",
    href: "https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0",
  },
  { name: "Menu", href: "/menu" },
  { name: "Press", href: "/press" },
];

const NavBar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between p-6 px-8">
      <div>
        <Link href="/">
          {/* <img src="/sipnplay.png" alt="sipnplay logo" className="w-24" /> */}
          <h1 className="text-bold text-xl">Sip & Play</h1>
        </Link>
      </div>
      <div className="flex gap-6">
        {links.map(({ name, href }, i) => (
          <NavLink href={href} key={i}>
            {name}
          </NavLink>
        ))}
        <div className="flex gap-2 items-center">
          <NavLink href="https://www.facebook.com/sipnplaynyc/">
            <Facebook className="w-[1.5em] h-[1.5em]" />
          </NavLink>
          <NavLink href="https://www.instagram.com/sipnplaynyc/?hl=en">
            <Instagram className="w-[1.5em] h-[1.5em]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center gap-2">
          <Menu />
          <Link href="/">
            {/* <img src="/sipnplay.png" alt="sipnplay logo" className="w-24" /> */}
            <h1 className="text-bold text-xl">Sip & Play</h1>
          </Link>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col items-center">
          <Link href="/">
            {/* <img src="/sipnplay.png" alt="sipnplay logo" className="w-24" /> */}
            <h1 className="text-bold text-xl">Sip & Play</h1>
          </Link>
          {links.map(({ name, href }, i) => (
            <NavLink href={href} key={i}>
              {name}
            </NavLink>
          ))}
          <div className="flex gap-2 items-center">
            <NavLink href="https://www.facebook.com/sipnplaynyc/">
              <Facebook className="w-[1.5em] h-[1.5em]" />
            </NavLink>
            <NavLink href="https://www.instagram.com/sipnplaynyc/?hl=en">
              <Instagram className="w-[1.5em] h-[1.5em]" />
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();

  return (
    <Button
      variant={path == href ? "outline" : "ghost"}
      className="py-2 px-4"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default NavBar;
