import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const FloatingElement = ({ delay = 0, className = "", children }: FloatingElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={`animate-float ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;