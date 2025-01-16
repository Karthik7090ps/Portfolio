import React from "react";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto p-4">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group relative flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
        >
          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {technology.name}
          </span>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur transition duration-300" />
        </div>
      ))}
    </div>
  );
};
export default Tech;