import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const CAT = () => {
    return (
        <section>
             <BackgroundBeamsWithCollision>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Join Our{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Waiting List.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Waiting List.</span>
              </div>
            </div>
          </h2>
          <div className='absolute bottom-20'>
          <input
          type="text"
          placeholder="Enter Your Email To Join Our Waitlist"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-purple-500 w-[700px] h-[50px] relative z-10 mt-4  bg-gray-50 placeholder:text-neutral-700 text-center font-semibold p-3"
        />
        </div>
        </BackgroundBeamsWithCollision>
      

        </section>
       
      );
}

export default CAT
