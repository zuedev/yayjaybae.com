"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/reference", label: "Reference" },
    { href: "/fan-guide", label: "Fan Guide" },
    { href: "/credits", label: "Credits" },
    { href: "/merch", label: "Merch" },
  ];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  for (const link of links) {
    link.active = link.href === pathname;
  }

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50">
      {/* desktop navigation */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-10 px-8 py-3 bg-black/95 backdrop-blur text-white border-b-2 border-white">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`relative py-1 text-lg uppercase tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-pink-400 after:transition-all after:duration-300 ${link.active
                ? "text-pink-400 after:w-full"
                : "text-white hover:text-pink-400 after:w-0 hover:after:w-full"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* mobile navigation */}
      <div className="lg:hidden bg-black/95 backdrop-blur text-white border-b-2 border-white">
        <div className="flex flex-row items-center justify-center p-4">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
        </div>

        {/* slide-down menu panel */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="flex flex-col divide-y divide-white/10 border-t-2 border-white">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={`p-4 pl-6 text-xl uppercase border-l-4 transition-colors ${link.active
                    ? "text-pink-400 border-pink-400 bg-white/5"
                    : "border-transparent hover:text-pink-400 hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
