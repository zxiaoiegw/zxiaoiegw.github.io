import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          {/* <a href='#home'>Home</a> */}
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>zxiaoiegw@gmail.com</p>
          <p>+1 785-829-1574</p>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;