import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { publicUrls } from "../constants";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex items-center gap-6">
          {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
            const profile = publicUrls.socialProfiles[socialProfile];
            return (
              <div
                key={`social_${profile.title}`}
                onClick={() => window.open(profile.link, "_blank")}
                className="green-pink-gradient lg:w-14 lg:h-14 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={profile.icon}
                  alt={`social_${profile.title}`}
                  className="w-4/6 h-4/6 object-contain"
                />
              </div>
            );
          })}
        </div>
        
        <p className="mt-8 text-white text-[18px]">
          Feel free to connect with me on LinkedIn or check out my projects on GitHub!
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");