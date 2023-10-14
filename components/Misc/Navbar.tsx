"use client";
import React, { useRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsBasket3, BsSearch } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
const Navbar: React.FC = () => {
  const [navbarRef, setNavbarRef] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);
  const stickyDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyDivRef.current) {
        const { top } = stickyDivRef.current.getBoundingClientRect();

        if (top <= 0) {
          setNavbarRef(true);
          setNavbarHovered(true);
        } else {
          setNavbarRef(false);
          setNavbarHovered(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={stickyDivRef}
      className={twMerge(
        "sticky top-0 z-[9999999] flex justify-center h-20 hover:bg-green-400 hover:border-b hover:border-black transition-all duration-700",
        navbarHovered ? "bg-green-400 border-b border-black" : "bg-transparent"
      )}
      onMouseEnter={() => setNavbarHovered(true)}
      onMouseLeave={() => setNavbarHovered(false)}
    >
      <div className="h-full w-[95%] flex justify-between items-center relative">
        <div className="text-4xl font-extrabold">LOGO</div>
        <div
          className=""
          style={{ visibility: navbarHovered ? "visible" : "hidden" }}
        >
          <ul className="hidden md:flex space-x-10">
            <li className="border-expand text-sm">Item 1</li>
            <li className="border-expand text-sm">Item 2</li>
            <li className="border-expand text-sm">Item 3</li>
            <li className="border-expand text-sm">Item 4</li>
            <li className="border-expand text-sm">Item 5</li>
          </ul>
        </div>
        <div
          className="flex gap-8"
          style={{ visibility: navbarHovered ? "visible" : "hidden" }}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            Search
            <BsSearch />
          </div>
          <Sheet>
            <SheetTrigger className="flex gap-2 items-center cursor-pointer">
              Cart
              <BsBasket3 />
            </SheetTrigger>
            <SheetContent>
              <div className="w-full flex-col h-full flex justify-center items-center">
                <BsBasket3 size="40" />
                <div className="text-2xl mt-3 font-medium">
                  Your cart is empty
                </div>
                <Button className="w-2/3 mt-6 text-xl font-extralight">
                  Start Shopping
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
