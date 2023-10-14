import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="h-auto">
      <div className="my-64 space-y-10">
        <div className="text-center text-4xl font-serif">A simple mission</div>
        <div className="text-center text-xl font-serif">
          To create spaces of belonging and connection by bringing South Asian
          heritage and culture into the modern home
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-8">
        <div className="flex w-full justify-center items-center ">
          <div className="flex justify-center items-center w-[70%]  gap-8">
            <div className="w-[40%] h-[50vh]">
              <Image
                src="/0x0.webp"
                alt="pic"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[60%] h-[50vh]">
              <Image
                src="/0x0.webp"
                alt="pic"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center ">
          <div className="flex justify-center items-center w-[70%]  gap-8">
            <div className="w-[60%] h-[50vh]">
              <Image
                src="/0x0.webp"
                alt="pic"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[40%] h-[50vh]">
              <Image
                src="/0x0.webp"
                alt="pic"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-64 space-y-10 flex flex-col justify-center items-center">
        <div className="text-center text-4xl font-serif">Subscribe to Us</div>
        <div className="text-center text-xl font-serif">
          By sharing your email you will be first to know about our new
          collections, Our stories for home inspiration, sales, event invites
          and more.
        </div>
        <div className="flex justify-center items-center w-[25%] gap-4">
          <Input placeholder="Enter email" />
          <Button className="text-sm font-light  whitespace-nowrap">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
