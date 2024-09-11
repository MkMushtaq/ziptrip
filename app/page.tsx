'use client'
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000); // 3 seconds, adjust based on your needs

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.5 }}
          >
            <motion.h1
              className="text-white text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Welcome
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}