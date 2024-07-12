import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-xs text-center space-y-4 absolute left-0 right-0 bottom-0 pb-6 cursor-pointer text-muted-foreground">
      <div className="space-y-2">
        <Link href="mailto:sipnplaynyc@gmail.com">sipnplaynyc@gmail.com</Link>
        <p>718-971-1684</p>
      </div>
      <p>©2020 by Sip & Play</p>
    </div>
  );
};

export default Footer;
