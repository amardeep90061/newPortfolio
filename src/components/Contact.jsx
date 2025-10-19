import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import { motion } from "motion/react"

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0921a9dd-d706-43e8-9e36-11936cc00551");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  }
  return (
    <div id='contact' className='contact flex flex-col items-center'>
        <div className="contact-title">
                  <div className="text-center text-4xl mt-2 mb-2">Get in Touch</div>

        </div>
        <div className="contact-section flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around p-1 lg:p-4 mt-5">
            <motion.div initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.4,delay:0.3}}
        viewport={{once:true}} className="contact-left w-full lg:text-left lg:w-1/2 p-1 lg:p-4">
                <h1 className='text-6xl font-bold mb-2'>Let's talk</h1>
                <p className='text-xl mt-6'><i>I'm actively seeking new opportunities as a Full Stack Developer and for SDE (Software Development Engineer) roles. Please feel free to reach out to me anytime to discuss potential collaborations..</i></p>
                <div className="contact-details">
                    <div className="contact-detail flex mt-6  tracking-wider">
                        <EmailOutlinedIcon/>
                        &nbsp;
                        <p>amardeep90061@gmail.com</p>
                    </div>
                    <div className="contact-detail flex mt-4 tracking-widest">
                        <AddIcCallOutlinedIcon/>
                        &nbsp;
                        <p>+91 8210516571</p>
                    </div>
                    <div className="contact-detail flex mt-4 tracking-widest">
                        <LocationOnOutlinedIcon/>
                        &nbsp;
                        <p>Bhubaneshwar, Odisha, IN</p>
                    </div>
                </div>
            </motion.div>
            <motion.form initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:true}} onSubmit={onSubmit} className="contact-right flex flex-col w-full lg:w-1/2 p-1 lg:p-4 gap-4">
                <label htmlFor="" className='text-2xl'>Your Name</label>
                <input type="text" className='border-none w-[500px] lg:w-[600px] h-[60px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-outfit text-xl' placeholder='Enter your name' name='name'/>
                <label htmlFor="" className='text-2xl'>Your Email</label>
                <input type="eamil" className='border-none w-[500px] lg:w-[600px] h-[60px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-outfit text-xl' placeholder='Enter your email' name='email'/>
                <label htmlFor="" className='text-2xl'>Write your message here</label>
                <textarea type="text" rows="5"className="w-[500px] lg:w-[600px] border-none p-6 rounded bg-[#32323c] text-[#A0A0A0] font-outfit text-xl" placeholder='Enter your message' name='message'></textarea>
                <button type="submit" className="contact-submit border-2 border-white rounded-full w-44 px-10 py-2 mx-4 mt-4 hover:scale-105 transition-all duration-300 cursor-pointer">Submit now</button>
            </motion.form>
        </div>
    </div>
  )
}

export default Contact 
