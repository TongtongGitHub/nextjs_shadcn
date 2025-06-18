import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // banner section with dummyimage and text center
    <div className="relative">
      <Image
        src="https://picsum.photos/1200/300"
        alt="image"
        width={1200}
        height={300}
        className="object-cover"
      />
    </div>
  );
}
