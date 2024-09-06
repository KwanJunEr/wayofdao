import React from "react";
import Image from "next/image";
import './extra.css'; 

const AboutUs = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-32 bg-white">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[130px] mt-12  justify-center items-center">
          <Image
            src={"/aboutus.png"}
            alt="About Us Image"
            width={400}
            height={250}
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="max-w-[700px] text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 space-y-2 extra text-justify">
              Welcome to a new era of Solana Inter-DAO collaboration. Our innovative
              platform seamlessly integrates diverse Solana DAOs, providing a unified
              solution for member management, rewards, contributions tracking,
              goal alignment, collaborative investments, and activity management.
              Empower your DAO collaboration to drive creativity, achieve shared goals, and
              maintain transparency with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
