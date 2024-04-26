import React from "react";

import mapimg from "../assets/WorldMap.svg"


const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-around mx-20 mt-20 flex-wrap max-[600px]:mx-3">

        <div className="animate__animated animate__fadeInBottomLeft">
          <p className=" font-semibold text-4xl text-black max-[650px]:text-center transition-all  ">Contact Tiya</p>
        <div className="mt-8">
          <input className="h-5 border-2 p-6 rounded-full transition-all hover:border-black border-[#8a8b8f] max-[650px]:w-full" type="text" placeholder="Full Name"/>
          <input className="ml-3 h-5 border-2 p-6 rounded-full transition-all hover:border-black border-[#8a8b8f] max-[650px]:w-full max-[650px]:ml-0 max-[650px]:mt-4" type="email" placeholder="Email Address"/>
        </div>
        <div>
          <textarea className=" w-full border-2 p-6 rounded-3xl transition-all mt-5 hover:border-black border-[#8a8b8f]" name="Message" id="" cols="40" rows="4" placeholder="Message"></textarea>
        </div>
        <div className="flex justify-center ">
        <button className=" text-center bg-[#f2cc8f] mt-4 p-3 text-white font-semibold w-full rounded-full hover:bg-[#e07a5f] transition-all mb-8">Submit Form</button>

        </div>

        </div>

   
        <div className="w-[90vh] flex justify-center bg-img-div max-[600px]:w-[40vh] transition-all animate__animated animate__fadeInDown" style={{backgroundImage:`url(${mapimg})` , backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
          {/* <img className="h-[35vh]" src={mapimg} alt="" /> */}
          <div className="text-center bg-[#3d405b] w-[45vh] text-white pt-5 rounded-3xl ">
            <p className="text-lg font-bold">London, United Kingdom</p>
            <p className="text-xl font-semibold">(020) 010-020-0340</p>
            <p className="text-xl font-semibold">info@company.com</p>
            <button className="font-bold bg-[#e07a5f] w-full mt-6 p-3 rounded-b-3xl hover:bg-[#f2cc8f] transition-all">Directions</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
