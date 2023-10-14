import Image from "next/image";
import React from "react";
import { BiLeaf } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiRulerBold } from "react-icons/pi";

const Instagram = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="font-serif text-xl">Follow us on Instagram</div>
      <div className="mt-8 flex gap-3">
        <div className="h-40 w-40 rounded-sm overflow-hidden ">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-40 w-40 rounded-sm overflow-hidden">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-40 w-40 rounded-sm overflow-hidden">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-40 w-40 rounded-sm overflow-hidden">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-40 w-40 rounded-sm overflow-hidden">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-40 w-40 rounded-sm overflow-hidden">
          <Image
            src="/0x0.webp"
            alt="image"
            width={500}
            height={500}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-40 bg-[#692515] w-full flex justify-center font-serif text-white p-4">
        <div className="container flex justify-evenly">
          <div className="flex flex-col justify-center items-center gap-1">
            <BiLeaf color="white" size={30} />
            <div>Natural Materials</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <AiOutlineHeart color="white" size={30} />
            <div>Artisan Appreciation</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <HiOutlineLocationMarker color="white" size={30} />
            <div>Designed in California</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <PiRulerBold color="white" size={30} />
            <div>Made in India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
