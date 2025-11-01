"use client";

import FeaturesLeft from "./features-left";
import OurMission from "./our-mission";
import ServicesV2 from "./services-v2";

const VideoSectionsWrapper = () => {
  return (
    <div className="relative">
      {/* Sticky Background Video Container */}
      <div className="sticky top-0 -z-10 h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Three sections with video background */}
      <div className="relative z-10 -mt-[100vh]">
        <FeaturesLeft />
        <OurMission />
        <ServicesV2 />
      </div>
    </div>
  );
};

export default VideoSectionsWrapper;
