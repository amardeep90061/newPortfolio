import React from "react";
import hm from "../assets/hm.png";
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from "motion/react"

const Experience = () => {
  return (
    <motion.div initial={{opacity:0, y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}} id="experience">
      <div className="text-center text-4xl mt-16">Experience</div>
        
      <motion.div initial={{opacity:0, x:200}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1}}
      viewport={{once:true, amount: 0.4 }} className="flex items-center py-10">
        <div className="data w-full lg:w-1/2">
        <div >
        <div className="flex gap-4">
          <img src={hm} width={200} className="hidden lg:block bg-gray-300" alt="" />
          <div className="flex flex-col lg:flex pl-10 lg:pl-0">
            <h1>Software Development Engineer in Test</h1>
          <div><BusinessIcon/> <span> Happiest Mind Technologies Limited</span></div>
          <p> <AccessTimeIcon/> Aug-2023 - Present</p>
          <h2><LocationOnIcon/> Bengaluru, Karnataka</h2>
          </div>
        </div>
        <br />
        <ul className="px-8">
            <div>Key Achievements:</div>
            <br />
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Developed and maintained 50+ API test cases across GET, POST, PUT,
            DELETE methods and JSON/XML data formats using Express.js & testing
            with RestAssured, resulting in a 20% reduction in API-related
            production issues.{" "}
          </li>
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Designed and built a Playwright automation framework from scratch,
            automating 120 web application test cases within a 10-week
            timeframe, significantly enhancing testing efficiency.{" "}
          </li>
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Engineered the front-end for an internal social media-style platform
            using React.js, enabling employees to share experiences and foster
            community within the company.{" "}
          </li>
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Developed and integrated over 30 reusable React UI components,
            creating a modular system that improved development efficiency by
            over 30%.{" "}
          </li>
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Reduced page load times by 20%, improving user engagement and
            retention rates with the help of Redux.
          </li>
          <li>
            <CheckCircleRoundedIcon className="text-green-500"/> 
            Streamlined development with Tailwind CSS (10% efficiency boost) &
            95% responsive design using Material UI.{" "}
          </li>
        </ul>
      </div>
      </div>
        <hr className='h-190 ml-4 lg:ml-0 lg:h-130 w-[3px] bg-white'/>
        <WorkIcon className="ml-4 !text-5xl border-2 border-white rounded-full p-2"/>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
