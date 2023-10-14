import React from "react";

const Marquee = () => {
  return (
    <div className="my-52 bg-[#B98B7A]">
      <div className="relative flex overflow-x-hidden text-white font-serif">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
          <span className="text-4xl mx-4">Your Product</span>
        </div>
      </div>

      <div className="h-[40vh] flex justify-center">
        <div className="container mt-12 flex flex-col items-center">
          <label className="text-xs text-white font-light self-start">
            FROM THE POEPLE
          </label>
          <div className="flex justify-between w-[95%] gap-8 mt-20 text-white text-xl font-serif">
            <div className="w-[40%] flex flex-col">
              I love this so much. See too many diaspora homes with the same
              pictures of elephants. People are craving touches of heritage, and
              this is so inspiring!
              <br />
              <div className="h-8" />
              <span className="text-sm">
                - Han Sy, originally from Sri Lanka, living in the US
              </span>
            </div>
            <div className="w-[40%] flex flex-col">
              I am always looking for decor and furniture that speaks to both my
              Indian heritage and modern taste. I cant wait to fill my home with
              Marble Lotus touches. Very excited for the launch of Marble Lotus!
              <br />
              <div className="h-8" />
              <span className="text-sm">
                - Megha Tiwari, Bay Area, California
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
