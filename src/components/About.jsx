import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = React.memo(({ index, title, description }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
        transition: true,
        axis: null,
        reset: true,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          className="bg-tertiary rounded-[20px] min-h-[200px] py-5 px-8 flex flex-col justify-center items-center"
          role="article"
          aria-label={`Service: ${title}`}
        >
          <h3 className="text-white text-[20px] font-bold text-center mb-4">
            {title}
          </h3>
          {description && (
            <p className="text-secondary text-center text-[14px]">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
});

ServiceCard.displayName = 'ServiceCard';

const About = () => {
  return (
    <section className="relative w-full text-justify" aria-label="About Section">
      <motion.div 
        variants={textVariant()}
        className="space-y-2"
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Overview.
        </h2>
      </motion.div>

      {/* New Hero Section with Text and Image */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className="flex flex-col space-y-6"
        >
          <motion.p
            className="text-secondary text-base sm:text-[17px] leading-[30px]"
          >
            {personalInfo.about}
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "", 0.1, 1)}
          className="lg:h-[450px] h-[350px] relative rounded-2xl overflow-hidden"
        >
          <img
            src={personalInfo.heroImage} // Make sure to add this to your constants
            alt="Profile or work representation"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          {/* Optional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="mt-20">
        <motion.div
          variants={fadeIn("up", "", 0.1, 1)}
          className="mb-12 text-center"
        >
          <h3 className="text-white text-[24px] font-bold">My Services</h3>
          <p className="text-secondary mt-2">Here's what I can do for you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {services.map((service, index) => (
            <ServiceCard 
              key={`service-${index}`}
              index={index} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionWrapper(About, navigationPaths.about));