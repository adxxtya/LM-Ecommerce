"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Product = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container flex">
        <div className="w-1/2  flex justify-center items-center">
          <Carousel
            showStatus={false}
            // showIndicators={false}
            // showThumbs={false}
            className="object-cover w-11/12 h-[80vh] "
          >
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
          </Carousel>
        </div>
        <div className="w-1/2 flex flex-col container">
          <div className="text-5xl w-[80%] mt-1 font-serif">
            Namesake White Marble Decorative Tray
          </div>
          <div className="mt-6 text-2xl font-medium">$85.00</div>
          <div className="mt-4">
            Pay in 4 interest-free installments of $21.25 with
          </div>
          <div className="mt-4">By Marble Lotus LLC</div>
          <div className="mt-6">
            <label className="font-bold text-sm">SIZE</label>
            <div className="flex space-x-4 mt-2">
              <div
                className={`cursor-pointer px-4 py-3 border rounded-sm ${
                  selectedOption === "10inch"
                    ? "border-black"
                    : "border-neutral-300"
                }`}
                onClick={() => handleOptionClick("10inch")}
              >
                10 inch
              </div>
              <div
                className={`cursor-pointer px-4 py-3 border rounded-sm ${
                  selectedOption === "12inch"
                    ? "border-black"
                    : "border-neutral-300"
                }`}
                onClick={() => handleOptionClick("12inch")}
              >
                12 inch
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="font-bold text-sm">QUANTITY</label>
            <div className="flex items-center space-x-2 mt-2">
              <button
                className="border border-neutral-400 hover:border-neutral-300 px-4 py-2 rounded"
                onClick={handleDecrement}
              >
                -
              </button>
              <div className="text-md border border-neutral-400 px-4 py-2 rounded">
                {count}
              </div>
              <button
                className="border border-neutral-400 hover:border-neutral-300 px-4 py-2 rounded"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <Button className="mt-8">ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
