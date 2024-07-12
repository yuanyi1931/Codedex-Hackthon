"use client";
import NavBar, { MobileNav } from "./_components/navbar";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-background border-b">
      <div className="p-6 px-8 lg:p-0">
        <MobileNav />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
