import React from "react";
import myproj from "../assets/myProjects";
import CodeIcon from "@mui/icons-material/Code";
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { motion } from "motion/react"

const Projects = () => {
  return (
    <motion.div initial='hidden'
    whileInView='visible'
    viewport={{once:true}}
    transition={{staggerChildren:0.2}} id="projects">
      <div className="text-center text-4xl mt-36 mb-2">Projects</div>
      <div className="projects flex flex-wrap gap-10 items-center p-12">
        {myproj.map((proj, index) => {
          return (
            <motion.div initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5,delay:index*0.2}}
                    viewport={{once:true}} key={index} className="w-[400px] relative flex flex-col gap-2 border-1 items-center bg-[#242434] border-gray-600 hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden shadow-md shadow-gray-500">
              <div
      className='w-[400px] relative flex flex-col gap-2 
                 border border-gray-600 bg-[#242434] 
                 hover:scale-105 transition-all duration-300 
                 rounded-xl overflow-hidden shadow-md shadow-gray-500 group' 
    >

      <div className="relative overflow-hidden"> 
        
        {/* The Image */}
        <img 
          src={proj.w_img} 
          alt={proj.title} 
          className='w-full border-b border-gray-600'
        />
        <div 
          className="
            absolute inset-0 
            bg-gray-900 opacity-0 group-hover:opacity-80
            transition-opacity duration-300 
            flex justify-center items-center 
            pointer-events-none // Allows hover to work on the parent
          "
        >
          {/* The Centered Navigation Button (Anchor Tag) */}
          <a 
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            // Button styles: Hidden by default, appears on hover
            className="
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 
              bg-white text-black font-semibold 
              py-2 px-4 rounded-full flex items-center gap-2
              hover:shadow-lg hover:bg-gray-100 
              pointer-events-auto // Ensures the link is clickable
            "
          >
            <LaunchOutlinedIcon fontSize="small" /> View Site
          </a>
        </div>
        </div>
    </div>
              <h2 className="font-bold text-xl">{proj.title}</h2>
              <p className="p-2 tracking-tighter">{proj.description}</p>
              <a
                href={proj.repo}
                className="border-2 border-white w-32 p-1 mb-2 items-center justify-center 
             transition-all duration-300 hover:tracking-wide hover:bg-white 
             hover:text-black cursor-pointer inline-block text-center"
              >
                <CodeIcon /> View Code
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
