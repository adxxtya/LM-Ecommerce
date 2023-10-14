"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BestSelling = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="bg-gray-200 p-4 h-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center">
          Best Selling Products
        </h2>
        <p className="text-sm underline mt-1 text-center cursor-pointer text-neutral-400">
          VIEW ALL
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-0 place-content-center place-items-center bg-lime-300">
          <div className="relative flex flex-col items-center space-x-7 w-full">
            <Image
              src="/0x0.webp"
              alt="Image"
              width={1000}
              height={1000}
              className="w-11/12 object-cover h-[80vh]"
            />
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className="absolute z-[99] left-0 top-0 object-cover w-11/12 h-[80vh] bg-slate-600 opacity-0 hover:opacity-100"
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
            </Carousel>

            <div className="self-start">Item name</div>
            <div className="text-sm self-start">Item price</div>
          </div>
          <div className="flex flex-col items-center space-x-7 w-full">
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className="w-11/12 object-cover h-[80vh]"
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
            </Carousel>
            <div className="self-start">Item name</div>
            <div className="text-sm self-start">Item price</div>
          </div>
          <div className="flex flex-col items-center h-full space-x-7 w-full">
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className="w-11/12 object-cover h-[80vh]"
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
            </Carousel>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BestSelling;
