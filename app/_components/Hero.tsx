"use client"

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { ArrowDown, Globe2, Landmark, Plane, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {

  const user = useUser();
  const router = useRouter();

  const onSend = () => {
    if(!user){
      router.push('/sign-in');
      return;
    }
  }

    const suggestions = [
        {
            title: "Create New Trip",
            icon: <Globe2 className="w-5 h-5 text-blue-400"/>
        },
        {
            title: 'Inspire me where to go',
            icon: <Plane className=" text-green-500 w-5 h-5"/>
        },
        {
            title: "Discover Hidden Gems",
            icon: <Landmark className="text-orange-400 h-5 w-5"/>
        },
        {
            title: "Adventure Destination",
            icon: <Globe2 className="w-5 h-5 text-yellow-600"/>
        }
    ]

  return (
    <div className="flex mt-24 justify-center w-full">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your personal{" "}
          <span className="text-primary">Trip Planner</span>
        </h1>
        <p className="text-lg text-gray-400">
          Tell me what you want, and I'll handle the rest: Flights, Hotels, Trip
          planning - All in seconds
        </p>

        {/* Input */}
        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              className="w-full h-28 border-none bg-transparent focus-visible:ring-0 shadow-none resize-none"
              placeholder="Create a trip from Paris to New york"
            />
            <Button onClick={() => onSend()} size={'icon'} className="absolute bottom-4 right-4">
                <Send className="h-4 w-4"/>
            </Button>
          </div>
        </div>

        {/* suggestion list */}
        <div className="flex gap-5">
            {suggestions.map((suggestions, index) => (
                <div key={index} className="flex items-center gap-2 rounded-full border p-2 cursor-pointer hover:bg-primary hover:text-white">
                    {suggestions.icon}
                    <h2 className="text-sm">{suggestions.title}</h2>
                </div>
            ))}
        </div>

        <h2 className="mt-14 my-7 flex gap-2 justify-center">Not sure where to start? <strong>See how it works</strong> <ArrowDown/></h2>

        {/* video */}
        <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
            thumbnailAlt="Dummy Video Thumbnail"
/>
      </div>
    </div>
  );
};

export default Hero;
