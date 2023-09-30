"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = ["10% off on your next order", "New October Sale"];

const TextAnimation = () => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentOptionIndex}
        className="absolute inset-x-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.1 }}
      >
        {options[currentOptionIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default TextAnimation;
