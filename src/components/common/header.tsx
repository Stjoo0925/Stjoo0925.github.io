"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Cover Letter", path: "/cover-letter" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full h-[8vh] bg-[#1a1f36] z-50 border-b border-[#2d3555]">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Stjoo Portfolio
        </Link>

        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === item.path ? "text-blue-400 font-bold" : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
