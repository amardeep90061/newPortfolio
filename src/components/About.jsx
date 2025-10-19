import React from 'react'
import profilePhoto from '../assets/photo.jpeg'
import java from '../assets/Java.png'
import mongo from '../assets/MongoDB.png'
import express from '../assets/Express.png'
import react from '../assets/React.png'
import node from '../assets/Node.js.png'
import mysql from '../assets/MySQL.png'
import pw from '../assets/Playwrite.png'
import { motion } from "motion/react"

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.div initial={{opacity:0, y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}} id='about'>
        <div className='text-center text-4xl mt-18'>About Me</div>
    <div className='flex justify-between p-2 sm:py-10 sm:px-20'>
      <div className="right">
        <div className="about-para w-full mt-16">
            <p>An experienced Full Stack Developer and technologist, I specialize in delivering stable, high-impact solutions across the full development lifecycle. With a decade of expertise in development and critical testing, I've successfully partnered with numerous prestigious clients, ensuring the reliability and organizational success of every application</p>
            <br /> <br />
            <p>My extensive experience across the entire technology stack speaks to my passion for building solutions, which is further amplified by the enthusiasm and dedication I bring to each project.</p>
            <br />
            <motion.div initial='hidden'
      whileInView='visible'
      transition={{staggerChildren:0.1}}
      viewport={{once:true}} className='flex flex-wrap gap-5 mt-10 justify-center'>
                <motion.img src={java} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={mongo} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={express} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={react } variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={node} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={mysql} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                <motion.img src={pw} variants={iconVariants} width={70} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
            </motion.div>
            <motion.div initial={{opacity:0, y:40}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}} className="about-achivements flex justify-center gap-14 mt-26 text-center">
                <div className="about-achievement">
                    <h1 className='text-3xl font-bold mb-2'>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr className='h-16 w-[1px] bg-white'/>
                <div className="about-achievement">
                    <h1 className='text-3xl font-bold mb-2'>5+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr className='h-16 w-[1px] bg-white'/>
                <div className="about-achievement">
                    <h1 className='text-3xl font-bold mb-2'>2+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </motion.div>
        </div>

      </div>
    </div>
    </motion.div>
  )
}

export default About
