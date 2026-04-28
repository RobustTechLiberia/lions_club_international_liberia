import React from "react";
import lcifHeroImage from "../assets/images/banner.jpg";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div className="relative h-120 sm:h-128 md:h-110 overflow-hidden">
          <img
            src={lcifHeroImage}
            alt="LCIF hero"
            className="h-full brightness-90 w-full object-cover object-center [image-rendering:auto] contrast-110 saturate-125"
          />
          <div className="absolute inset-y-0 left-0 w-[82%] sm:w-[75%] lg:w-[65%] bg-linear-to-r from-[#041532]/72 via-[#0b2f69]/42 to-transparent" />
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="mx-6 md:mx-14 lg:mx-20 max-w-4xl text-white">
              <h1 className="font-lions text-4xl sm:text-5xl lg:text-5xl md:mx-10 font-semibold leading-tight">
                About Lions Clubs International Foundation (LCIF)
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/90 md:mx-10">
                LCIF is the global foundation dedicated to empowering Lions' and
                Leos' service so we can bring new possibilities to life
                together. Worldwide, LCIF grants and special programs help Lions
                and Leos realize their most inspiring and ambitious service
                projects. Since our foundation's inception in 1968, we've
                awarded more than US$1.3 billion in grant funding. One hundred
                percent of every donation supports LCIF grants and programs.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
