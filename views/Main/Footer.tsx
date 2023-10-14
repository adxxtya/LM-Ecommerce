import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#290301] flex text-white w-full">
      <div className="flex justify-between w-full">
        <div className="w-[50%] p-12">
          <div className="text-lg font-serif font-light">
            Follow along on Socials
          </div>
          <div className="text-sm font-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            magnam. Maxime accusantium culpa sunt adipisci, et soluta facere
            neque saepe rerum omnis, magni explicabo error cum similique minima
            vel? Odio.
          </div>
          <div className="mt-4 flex gap-x-4">
            <BsInstagram size={25} />
            <BsTiktok size={25} />
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center p-12">
          <div className="text-lg font-serif">QUICK LINKS</div>
          <ul className="mt-6 text-sm cursor-pointer">
            <li className="m-2">Search</li>
            <li className="m-2">Shop</li>
            <li className="m-2">Support</li>
            <li className="m-2">Contact us</li>
            <li className="m-2">Share your feedback</li>
            <li className="m-2">Privacy Policy</li>
            <li className="m-2">Refund Policy</li>
            <li className="m-2">Terms of Services</li>
          </ul>
        </div>
        <div className="w-[50%] p-12">
          <div className="text-lg font-serif font-light">
            Sign up for the Company
          </div>
          <div className="text-sm font-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            magnam. Maxime accusantium culpa sunt adipisci, et soluta facere
            neque saepe rerum omnis, magni explicabo error cum similique minima
            vel? Odio.
          </div>
          <div className="mt-6">
            <Input placeholder="Enter email" className="bg-white" />
            <Button className="mt-4">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
