import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { personalInfo, projects } from "../constants";
import { X, Plus, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ name, description, tags, image, source_code_link, hosted_link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      layout
      className={`bg-tertiary rounded-2xl overflow-hidden ${isExpanded ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="relative h-full">
        {/* Main Card Content */}
        <div className={`relative ${isExpanded ? 'h-[400px]' : 'h-[300px]'}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Card Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white text-xl font-bold">{name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.slice(0, isExpanded ? undefined : 3).map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {isExpanded ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 bg-tertiary"
          >
            <p className="text-secondary text-sm leading-relaxed mb-4">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative z-0">
      <div className="mb-12">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {personalInfo.projectsIntro}
        </p>
      </div>

      <LayoutGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              {...project}
            />
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default SectionWrapper(Works, "work");