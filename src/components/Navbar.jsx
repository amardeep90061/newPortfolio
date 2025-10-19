import { React, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-50 navbar flex justify-between items-center px-2 py-5 text-[#6c7580] text-xl h-20"
    >
      <div className="flex justify-center items-center">
        <div className="w-2 h-6 bg-white mr-2"></div>{" "}
        <div className="cursor-pointer hover:text-white">
          <AnchorLink href="#hero">AP</AnchorLink>
        </div>
      </div>

      <div
        className={`text-gray-700 dark:text-white lg:text-bg ${
          sidebarOpen
            ? "max-lg:w-100 max-lg:pl-8"
            : "max-lg:w-0 max-lg:overflow-hidden"
        } transition-all duration-300 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:min-h-screen
                 max-lg:bg-[rgba(36,36,52,0.9)] max-lg:text-white max-lg:z-40
                max-lg:flex max-lg:flex-col max-lg:pt-20 
                max-lg:items-start max-lg:gap-4 flex lg:items-center lg:gap-5`}
      >
        {sidebarOpen && (
          <CloseOutlinedIcon
            className="absolute top-6 left-2 !text-4xl"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`${
            sidebarOpen
              ? "flex flex-col gap-4 text-3xl mt-10"
              : "flex gap-10 font-bold"
          }`}
        >
          <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}>
            <AnchorLink href="#hero">Home</AnchorLink>
          </a>
          <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}>
            <AnchorLink offset={50} href="#about">
              About Me
            </AnchorLink>
          </a>
          <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}>
            <AnchorLink offset={50} href="#experience">
              Experience
            </AnchorLink>
          </a>
          <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}>
            <AnchorLink offset={50} href="#skills">
              Skills
            </AnchorLink>
          </a>
          <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}>
            <AnchorLink offset={50} href="#projects">
              Projects
            </AnchorLink>
          </a>
          {sidebarOpen && <a className="cursor-pointer hover:text-white" onClick={()=>setSidebarOpen(false)}><AnchorLink offset={40} href="#contact">
            Contact
          </AnchorLink></a>}
        </div>
      </div>
      <div>
        <button className="hidden lg:block border-1 border-white rounded-full px-10 py-1 cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">
          <AnchorLink offset={40} href="#contact">
            Contact
          </AnchorLink>
        </button>
      </div>
      <div className="block lg:hidden !text-4xl text-white cursor-pointer">
        <MenuOutlinedIcon onClick={() => setSidebarOpen(true)} />
      </div>
    </motion.div>
  );
};

export default Navbar;
