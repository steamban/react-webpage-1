import React from "react";

function Hero() {
   return (
      <div className="w-full h-screen">
         <img
            className="top-0 left-0 w-full h-screen object-cover"
            src="https://images.unsplash.com/photo-1679487660442-804ec2b61fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hero-bg"
         />
         <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
         <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
            <div className="md:left-[10%] max-w-[1100px] m-auto ablsolute p-4">
               <p className="px-2 text-xl">All Inclusive</p>
               <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches and Getaways</h1>
               <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis pariatur iusto quibusdam illum consequuntur et id
                  nulla. Ut, et odio!
               </p>
               <button className="bg-white text-black mt-2">Reserve Now</button>
            </div>
         </div>
      </div>
   );
}

export default Hero;
