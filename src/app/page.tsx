"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";
import { VideoJS } from "@/components/video";

export default function Home() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
  };

  return (
    // banner section with dummyimage and text center
    <div className="relative w-full h-full">
      {/* different video sources */}
      <VideoJS options={{
        ...videoJsOptions,
        sources: [{
          src: "https://r46tfhsyx9bcfmzw.public.blob.vercel-storage.com/video/class_video-bAtHSAyCyrocTU0JI5GzXkdPpHfmEM.mp4",
          type: "video/mp4"
        }]
      }} />
      <br />
      <VideoJS options={{
        ...videoJsOptions,
        sources: [{
          src: "video/graduate.mp4",
          type: "video/mp4"
        }]
      }} />
      {/* <Carousel className="w-full h-full mt-5">
        <CarouselContent>
          {Array.from({ length: 11 }).map((_, index) => (
            <CarouselItem key={index}>
              <Image
                src={`/img/${index + 1}.jpg`}
                alt="My Image"
                layout="fill"
                objectFit="cover" // 可选值有 'contain'、'cover'、'fill'、'scale-down' 和 'none'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0" />
        <CarouselNext className="absolute top-1/2 right-0" />
      </Carousel> */}
    </div>
  );
}
