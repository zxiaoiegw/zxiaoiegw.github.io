import React from "react";
import { Profile } from "../assets";
import { FaUserAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row lg:items-center px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full lg:w-1/3 flex flex-col items-center'>
        <img
          src={Profile}
          className='h-[400px] w-[400px] object-cover rounded-full ease-in-out duration-300 hover:scale-110'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white  '>
          A Bit About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          I'm pursuing my Master's in Computer Science at Georgia Tech with a focus on AI and Machine Learning. 
          I love combining what I learn in my studies with real-world projects—building intelligent applications 
          using frameworks like LangChain, CrewAI, and other cutting-edge AI tools.
        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <a 
            href="https://github.com/zxiaoiegw"  
            target="_blank"
            rel="noopener noreferrer"
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <FaGithub size={14} /> Github
          </a>
          <a            
            href="https://www.linkedin.com/in/zhen-xiao" 
            target="_blank"
            rel="noopener noreferrer"
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <FaLinkedin size={14} /> Linkedin
          </a>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdOutlineAlternateEmail size={14} /> zxiaoiegw@gmail.com
          </p>
          <a
            href='https://wa.me/+11 234 567 897'
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +1 785-829-1574
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;