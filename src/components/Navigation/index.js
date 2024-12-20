"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/reference", label: "Reference" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/fan-guide", label: "Fan Guide" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const pathname = usePathname();

  for (const link of links) {
    link.active = link.url === pathname;
  }

  function handleSelectChange(event) {
    window.location.href = event.target.value;
  }

  return (
    <div className="sticky top-0">
      {/* desktop navigation */}
      <div className="flex flex-row justify-between p-4 bg-black text-white border-b-2 border-white hidden lg:flex">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="flex flex-row items-center space-x-2 hover:text-pink-400 transition-colors transform hover:scale-110 transition-transform"
          >
            <img src="/images/flower-heart.png" className="w-8 h-8" />
            <span className="text-xl uppercase">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* mobile navigation */}
      <div className="flex flex-row justify-between p-4 bg-black text-white border-b-2 border-white lg:hidden">
        <img src="/images/flower-heart.png" className="w-8 h-8" />
        <select
          className="text-xl uppercase bg-black text-white"
          onChange={handleSelectChange}
          defaultValue={pathname}
        >
          {links.map((link) => (
            <option key={link.label} value={link.href}>
              {link.label}
            </option>
          ))}
        </select>
        <img src="/images/flower-heart.png" className="w-8 h-8" />
      </div>
    </div>
  );
};
