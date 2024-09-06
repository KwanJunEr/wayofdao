"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ComponentProps{
    title:string;
    description:string;

}
export function FeatureCard({title,description}:ComponentProps) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100px] sm:w-[30rem] h-[250px] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white  "
        >
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm  mt-5  dark:text-neutral-300 text-justify "
        >
         {description}
        </CardItem>
        

        
        
      </CardBody>
    </CardContainer>
  );
}
