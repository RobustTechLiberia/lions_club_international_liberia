import React from "react";
import UnitedForGood from "../assets/images/1772807105764.jpg";
import servingTogether from "../assets/images/1772807881019.jpg";

class ContentSection extends React.Component {
  render() {
    return (
      <section className="w-full bg-white px-4 md:pt-10 mt-20 pb-4 sm:px-5 lg:mt-20">
        <div className="mx-auto w-full max-w-300">
          <div className="flex w-full flex-col overflow-hidden bg-white lg:min-h-96 lg:flex-row">
            <div className="relative min-h-80 w-full shrink-0 lg:min-h-96 lg:w-1/2 lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
              <img
                className="block brightness-105 hover:cursor-pointer h-96 w-full object-cover"
                src={UnitedForGood}
                alt="Lions members cleaning a shoreline"
              />
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-0 w-32 bg-[rgba(8,56,152,0.74)] [clip-path:polygon(0_0,72%_0,36%_100%,0_100%)]"
                aria-hidden="true"
              ></div>
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-16 w-27 bg-[rgba(113,165,239,0.4)] [clip-path:polygon(0_0,72%_0,36%_100%,0_100%)]"
                aria-hidden="true"
              ></div>
            </div>

            <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:px-16 lg:py-12">
              <h2 className="m-0 text-4xl font-semibold">Uniting for good</h2>
              <span className="mt-3.5 mb-5.5 block h-1.25 w-15.5 bg-yellow-600"></span>
              <p className="m-2 max-w-full text-md l text-gray-900 lg:max-w-120">
                Lions and Leos make a difference every day, everywhere we serve.
                And with the support of our international association and our
                global foundation, we are changing lives, communities and the
                world we share.
              </p>
              <button
                type="button"
                className="mt-10 w-fit cursor-pointer rounded-[5px] border-0 bg-blue-900 px-7 py-6 text-[clamp(1rem,1.08vw,1.24rem)] leading-none font-bold text-white"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* second */}
        </div>
        <div className="mx-auto w-full max-w-305 md:pt-10 pt-5">
          <div className="relative flex w-full flex-col overflow-hidden bg-white lg:h-100 lg:flex-row">
            <div className="relative z-10 flex w-full flex-col justify-center bg-white px-8 py-10 sm:px-12 lg:h-full lg:w-[58%] lg:pr-28 lg:[clip-path:polygon(0_0,87%_0,100%_100%,0_100%)]">
              <h2 className="m-0 text-4xl font-semibold text-black">
                Serving with purpose
              </h2>
              <span className="mt-3.5 mb-5.5 block h-1 w-16 bg-[#f2bf1a]"></span>
              <p className="m-0 max-w-120 text-[clamp(1rem,1.25vw,1.95rem)] leading-[1.45] text-[#343434]">
                Lions serve their local communities in so many ways, and we’re
                uniting to serve key global causes and special initiatives to
                address some of the greatest challenges facing our world today.
              </p>
              <button
                type="button"
                className="mt-10 w-fit cursor-pointer rounded-xs border-0 bg-[#8428a8] px-8 py-6 text-[clamp(1.05rem,1.12vw,1.25rem)] leading-none font-bold text-white transition-colors hover:bg-[#6f1f8e]"
              >
                Learn more
              </button>
            </div>

            <div className="relative h-75 w-full lg:-ml-[8.5%] lg:h-full lg:w-[50.5%]">
              <img
                className="block brightness-105 hover:cursor-pointer h-full w-full object-cover"
                src={servingTogether}
                alt="Lions volunteers spending time with children"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-47.5 bg-[rgba(119,34,153,0.45)] [clip-path:polygon(100%_0,40%_100%,100%_100%)]"
                aria-hidden="true"
              ></div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[44%] w-52.5 bg-[rgba(91,17,122,0.45)] [clip-path:polygon(50%_0,100%_0,100%_100%,0_100%)]"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContentSection;
