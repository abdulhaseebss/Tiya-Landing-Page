import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="flex justify-around mx-5 mb-11 mt-32 items-start flex-wrap">

      <div className="flex items-center gap-2 mb-5">
        <div>
          <img
            className="h-[48px]  transition-all"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="text-black text-center transition-all">
          <p className="text-2xl font-semibold">Tiya</p>
          <p className="text-[12px] font-medium">Golf Club</p>
        </div>
      </div>




    <div className="flex gap-16 flex-wrap mx-5">
        <div className="text-[#3d405b] max-[800px]:w-full">
            <p className="text-xl font-bold">Join Us</p>
            <p className="text-lg font-bold mt-4 flex justify-between">Mon-Fri <span className="font-medium ml-3">6:00 AM - 6:00 PM</span></p>
            <hr className="mt-4" />
            <p className="text-lg font-bold mt-4 flex justify-between">Sat-Sun <span className="font-medium ml-3">6:30 AM - 8:30 PM</span></p>
            <p className="mt-8 font-medium text-lg text-wrap">Copyright © Ah-Studio</p>
        </div>

        <div className="flex-col justify-start">
            <div className=" flex justify-start gap-3 text-[#81b29a]">
                <i className="fa-brands fa-instagram bg-[#3d405b] p-3 rounded-full hover:bg-[#81b29a] hover:text-white transition-all"  onClick={() => window.open('https://www.instagram.com/abdullhaseeb_/')}></i>
                <i className="fa-brands fa-twitter bg-[#3d405b] p-3 rounded-full hover:bg-[#81b29a] hover:text-white transition-all"></i>
                <i className="fa-brands fa-whatsapp bg-[#3d405b] p-3 rounded-full hover:bg-[#81b29a] hover:text-white transition-all" onClick={() => window.open('https://wa.me/03049254773')}></i>
            </div>
            <p className="text-[#3d405b] font-medium text-lg mt-5 text-start">Design by: <span className="hover:text-[#f2cc8f] cursor-pointer transition-all">Abdul Haseeb</span></p>
        </div>

    </div>



    </div>
    

    </>
  );
};

export default Footer;
