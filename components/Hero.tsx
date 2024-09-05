import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full h-full bg-gradient-to-r from-[#180147] via-[#44016E] to-[#87018C]'>
        <div className='flex flex-row py-10 px-5 justify-between items-center'>
            <div>

            </div>

            <div>
                <Image src ={'/collabimage0.png'} alt= {'collaborationImage'} height={200} width={300} className='object-contain'/>
            </div>
        </div>
    </section>
     
  )
}

export default Hero
