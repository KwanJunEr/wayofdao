import React from 'react'
import Image from 'next/image'
import { Tag } from 'antd'
import FlipText from "@/components/magicui/flip-text";
import './extra.css'

const Hero = () => {
  return (
    <section className='w-full h-[500px] bg-gradient-to-r from-[#180147] via-[#44016E] to-[#87018C] flex items-center'>
      <div className='container mx-auto flex flex-col md:flex-row py-10 px-16 space-y-10 md:space-y-0 md:space-x-10 justify-between'>
        
        {/* Text Content */}
        <div className='flex flex-col text-white space-y-10 my-auto max-w-[900px]'>
        <Tag color="purple" style={{width:320}}><p className='text-base font-bold'>A Proud Solana Project Presented to You</p></Tag>
          <FlipText word="The Way of DAO" className='text-6xl font-bold  text-left'/>
          <p className='text-2xl mb-6 text-justify'>
          Empowering Solana Inter-DAO
          Collaboration
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
          <Image src={'/collabimage0.png'} alt={'collaborationImage'} height={300} width={400} className='object-contain rotate-image'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
