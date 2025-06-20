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

export default function Home() {
  return (
    // banner section with dummyimage and text center
    <div className="relative">
      {/* show video in background */}
      <video src="/video/child.mp4" controls className="w-full h-full object-cover" />
      <Carousel className="w-full h-full mt-5">
        <CarouselContent>
          {/* all images in folder /img */}
          {Array.from({ length: 11 }).map((_, index) => (
            <CarouselItem key={index}>
              <img src={`/img/${index + 1}.jpg`} alt="child" className="w-full h-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* display on top of carousel */}
        <CarouselPrevious className="absolute top-1/2 left-0" />
        <CarouselNext className="absolute top-1/2 right-0" />
      </Carousel>
    </div>
  );
}
