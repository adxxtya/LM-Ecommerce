import React from "react";
import TextAnimation from "../Animations/TextAnimation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopBar = () => {
  return (
    <main className="relative text-center w-full text-sm bg-[#290301] p-2 text-white h-10">
      <TextAnimation />
      <div className="hidden  absolute inset-x-0 mr-20 md:flex justify-end">
        <Select>
          <SelectTrigger className="w-[120px]" defaultValue={"usd"}>
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem defaultChecked value="usd">
              USD
            </SelectItem>
            <SelectItem value="inr">INR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </main>
  );
};

export default TopBar;
