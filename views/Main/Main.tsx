import Navbar from "@/components/Misc/Navbar";
import TopBar from "@/components/Misc/Topbar";
import React from "react";

const Main = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="h-[400vh] w-full">hi</div>
    </div>
  );
};

export default Main;
