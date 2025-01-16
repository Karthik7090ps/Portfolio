import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import FloatingElement from "./FloatingElement";
import ScrollIndicator from "./ScrollIndicator";
import { personalInfo } from "../constants";

const Hero = () => {
  const backgroundVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate="animate"
          variants={backgroundVariants}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70" />
          <div className="absolute bottom-1/3 -right-12 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70" />
          <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70" />
        </motion.div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
        {/* Role Badge */}
        <FloatingElement delay={0.2} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-xl hover:shadow-purple-500/20 transition-all"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            {personalInfo.role}
          </motion.div>
        </FloatingElement>

        {/* Main Title */}
        <FloatingElement delay={0.4} className="text-center mb-6">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                {personalInfo.name}
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 -z-10 rounded-full blur-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </h1>
        </FloatingElement>

        {/* Subtitle */}
        <FloatingElement delay={0.6} className="max-w-2xl text-center mb-12">
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              Freelancing {personalInfo.role}
            </span>
            <br className="sm:block hidden" />
            Crafting exceptional digital experiences through innovative projects
          </p>
        </FloatingElement>

        {/* CTA Buttons */}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;