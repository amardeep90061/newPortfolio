import React from "react";
import profileImage from "../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col lg:flex-row justify-around items-center p-20">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        src={profileImage}
        width={500}
        alt=""
      />
      <div className="content text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-6xl font-semibold mt-8 lg:mt-0 mb-4 font-outfit text-[#6c7580]"
        >
          <span>I'm Amardeep Prajapati</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#3c4244]"
        >
          <span>A Full Stack Developer</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="w-120 sm:w-150 mt-4 text-[#586065]"
        >
          I am a full stack developer with the experince of 2+ years working
          with Happiest Mind Technologies Limited.
        </motion.p>
        <div>
          <div className="flex mt-8 gap-14 justify-center">
            <div>
              <motion.button initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }} className="border-2 border-white rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all duration-300">
                <AnchorLink offset={40} href="#contact">
                  Connect with Me
                </AnchorLink>
              </motion.button>
            </div>
            <motion.a initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
              href="src/assets/Amardeep_Prajapati_SDE.pdf"
              className="border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:scale-105 transition-all duration-300"
              download
            >
              <div className="hero-resume">My resume</div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
