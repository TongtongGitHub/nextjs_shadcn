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
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/video/child.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  return (
    // banner section with dummyimage and text center
    <div className="relative w-full h-full">
      {/* show video in background */}
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
