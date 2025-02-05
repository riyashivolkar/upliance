"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderProps, NavItemProps } from "../types";

function NavItem({ children }: NavItemProps) {
  return (
    <li className="text-blue-gray-700  cursor-pointer flex items-center gap-2 font-medium">
      <a href="#">{children}</a>
    </li>
  );
}

const Header: React.FC<HeaderProps> = ({ onSignInClick }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full border-b  bg-gray-900 border-gray-800/10 shadow-sm p-4 sm:px-12 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">Upliance</h1>
        <ul className="hidden lg:flex px-10 items-center gap-6 text-white">
          <NavItem>Pages</NavItem>
          <NavItem>Account</NavItem>
          <NavItem>Blocks</NavItem>
          <NavItem>Docs</NavItem>
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onSignInClick}
            className="text-gray-100 cursor-pointer"
          >
            Sign in
          </button>

          <button className="bg-gray-100 text-black px-4 py-2 cursor-pointer rounded">
            Buy now{" "}
          </button>
        </div>
        <button onClick={handleOpen} className="lg:hidden">
          {open ? (
            <XMarkIcon className="h-6 w-6 cursor-pointer text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 cursor-pointer text-white" />
          )}
        </button>
      </div>
      {open && (
        <div className="mt-3 border-t border-gray-800/10  px-2 pt-4">
          <ul className="flex flex-col gap-4 md:px-6 text-white">
            <NavItem>Pages</NavItem>
            <NavItem>Account</NavItem>
            <NavItem>Blocks</NavItem>
            <NavItem>Docs</NavItem>
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-4">
            <button
              onClick={onSignInClick}
              className="text-gray-700 cursor-pointer"
            >
              Sign in
            </button>
            <button className="bg-gray-100 text-black px-4 cursor-pointer py-2 rounded">
              Buy now{" "}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
