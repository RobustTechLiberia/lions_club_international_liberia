import React from "react";
import img1 from "../assets/images/Shopify_ExpMore_1800x800_1_1800x800.jpg";
import img2 from "../assets/images/Banner-Home4_1800x900_copy_1800x750.png";

class ShopCarousel extends React.Component {
  render() {
    return (
      <>
        <div
          id="default-carousel"
          className="relative w-full md:px-10 px-2"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-44 sm:h-56 overflow-hidden md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img1}
                className="absolute block w-full h-full object-cover top-0 left-0"
                alt="slide 1"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-lg sm:text-2xl md:text-5xl font-light mb-3 sm:mb-6">
                  Shop the Experience More collection
                </h2>
                <button
                  type="button"
                  className="bg-blue-800 text-white font-semibold px-5 py-2 sm:px-8 sm:py-4 text-base sm:text-lg"
                >
                  Shop the Collection
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={img2}
                className="absolute block w-full h-full object-cover top-0 left-0"
                alt="slide 2"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-lg sm:text-2xl md:text-5xl font-light mb-3 sm:mb-6">
                  Welcome to everything Lions!
                </h2>
                <button
                  type="button"
                  className="bg-blue-800 text-white font-semibold px-5 py-2 sm:px-8 sm:py-4 text-base sm:text-lg"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white/50"
              data-carousel-slide-to="1"
            ></button>
          </div>

          {/* Controls */}
          {/* <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
              ❮
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
              ❯
            </span>
          </button> */}
        </div>
      </>
    );
  }
}

export default ShopCarousel;
