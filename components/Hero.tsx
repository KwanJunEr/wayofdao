import React from 'react'
import Image from 'next/image'
import { Tag } from 'antd'
import FlipText from "@/components/magicui/flip-text";

const Hero = () => {
  return (
    <section className='w-full h-full bg-gradient-to-r from-[#180147] via-[#44016E] to-[#87018C] flex items-center'>
      <div className='container mx-auto flex flex-col md:flex-row py-10 px-28 space-y-10 md:space-y-0 md:space-x-10 justify-between'>
        
        {/* Text Content */}
        <div className='flex flex-col text-white space-y-10 my-auto max-w-[700px]'>
        <Tag color="purple" style={{width:320}}><p className='text-base font-bold'>A Proud Solana Project Presented to You</p></Tag>
          <FlipText word="The Way of DAO" className='text-6xl font-bold mb-4 text-left'/>
          <p className='text-lg mb-6 text-justify'>
            Welcome to a new era of Cross-DAO collaboration. Our innovative platform seamlessly integrates diverse DAOs, providing a unified solution for member management, contributions tracking, goal alignment, and collaborative investments. With our platform, you can drive creativity, achieve shared goals, and maintain transparency with precision.
          </p>
          <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5'>
            <button className='bg-white text-[#180147] px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300'>
              Explore Features
            </button>
            <button className='bg-[#87018C] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#6d0074] transition duration-300'>
              Join For Free
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='flex justify-center md:justify-end flex-shrink-0 mr-10'>
          <Image src={'/collabimage0.png'} alt={'collaborationImage'} height={250} width={350} className='object-contain'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
