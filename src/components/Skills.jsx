import React from 'react'
import java from '../assets/Java.png'
import mongo from '../assets/MongoDB.png'
import express from '../assets/Express.png'
import react from '../assets/React.png'
import node from '../assets/Node.js.png'
import mysql from '../assets/MySQL.png'
import redux from '../assets/Redux.png'
import redis from '../assets/Redis.png'
import selenium from '../assets/Selenium.png'
import cucumber from '../assets/Cucumber.png'
import postman from '../assets/Postman.png'
import pw from '../assets/Playwrite.png'
import github from '../assets/GitHub.png'
import jenkins from '../assets/Jenkins.png'
import docker from '../assets/Docker.png'
import aws from '../assets/AWS.png'
import { motion } from "motion/react"

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const rowContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5, 
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      when: "beforeChildren", 
      staggerChildren: 0.1 
    } 
  },
};


const Skills = () => {
  return (
    <motion.div initial={{opacity:0, y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}} 
      id='skills'>
      <div className="text-center text-4xl mt-16">Professional Skills</div>
      <motion.div initial='hidden'
          whileInView='visible'
          variants={rowContainerVariants} 
          viewport={{once:true}}>
        <motion.div variants={rowVariants} className='flex flex-wrap gap-8 mt-16 justify-center px-1 sm:px-0'>
                       <motion.img src={java} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={mongo} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={express} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={react} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={node} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={mysql} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={redux} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={redis} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
        </motion.div>
        <motion.div variants={rowVariants}  className='flex flex-wrap gap-5 mt-16 justify-center'>
                       <motion.img src={selenium} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={cucumber} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={postman} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={pw} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
        </motion.div>
        <motion.div variants={rowVariants} className='flex flex-wrap gap-5 mt-16 justify-center'>
                       <motion.img src={github} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 bg-white hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={jenkins} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={docker} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
                       <motion.img src={aws} variants={iconVariants} width={110} className='border-2 border-gray-400 p-2 hover:scale-105 transition-all duration-300 cursor-pointer' alt="" />
        </motion.div>
      </motion.div>
      
    </motion.div>
  )
}

export default Skills
