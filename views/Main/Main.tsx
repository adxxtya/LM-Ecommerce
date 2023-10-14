import Navbar from "@/components/Misc/Navbar";
import TopBar from "@/components/Misc/Topbar";
import React from "react";
import BestSelling from "./BestSelling";
import Mission from "./Mission";
import Product from "./Product";
import Marquee from "./Marquee";
import Instagram from "./Instagram";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="h-[100vh] w-full">hi</div>
      <BestSelling />
      <Mission />
      <Product />
      <Marquee />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Main;
