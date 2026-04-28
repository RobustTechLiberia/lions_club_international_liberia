import React from "react";
import img1 from "../assets/images/1772807583546.jpg";
import img2 from "../assets/images/1772807622571.jpg";
import img3 from "../assets/images/1772807539854.jpg";
import img4 from "../assets/images/1772807570008.jpg";

class Stories extends React.Component {
  render() {
    return (
      <>
        <div className="bg-blue-950 md:h-dvh md:mt-20 mt-10">
          <h1 className="text-white font-sans text-3xl md:text-left text-center md:mx-20 mx-6 md:py-12 py-8 font-semibold capitalize">
            stories of service
          </h1>

          {/* underline */}
          <div className="flex md:justify-start justify-center md:mx-20 mx-6 mb-6">
            <div className="bg-amber-500 w-28 h-1"></div>
          </div>

          {/* description */}
          <div className="flex flex-wrap md:justify-start justify-center items-stretch gap-6 md:mx-20 mx-6 pb-10">
            {/* Card 1 */}
            <div className="w-full sm:w-72 md:w-64 bg-white shadow-sm flex flex-col">
              <img
                src={img1}
                alt=""
                className="w-full h-52 md:h-48 object-cover"
              />
              <div className="p-5 flex-1">
                <h1 className="text-xl text-blue-950 font-semibold capitalize">
                  change a life
                </h1>
                <p className="text-gray-700 text-sm mt-2 lowercase">
                  <span className="uppercase">LCIF'</span>s impact is measured
                  by individual lives transformed through your support. Since
                  1968, LCIF grants have empowered Lions globally, creating
                  profound change. See how your generosity can make a
                  difference, one life at a time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-72 md:w-64 bg-white shadow-sm flex flex-col">
              <img
                src={img2}
                alt=""
                className="w-full h-52 md:h-48 object-cover"
              />
              {/* description */}
              <div className="p-5 flex-1">
                <h1 className="text-xl text-blue-950 font-semibold capitalize">
                  empowering youth across the globe
                </h1>
                <p className="text-gray-700 text-sm mt-2 lowercase">
                  Over four decades, Lions Quest has transformed youth, expanded
                  globally and formed key partnerships. See how Lions Quest’s
                  40-year journey has shaped young
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-72 md:w-64 bg-white shadow-sm flex flex-col">
              <img
                src={img3}
                alt=""
                className="w-full h-52 md:h-48 object-cover"
              />
              {/* description */}
              <div className="p-5 flex-1">
                <h1 className="text-xl text-blue-950 font-semibold capitalize">
                  support after disaster
                </h1>
                <p className="text-gray-700 text-sm mt-2 lowercase">
                  When wildfires ravaged Texas, LCIF provided grants, enabling
                  Lions to deliver immediate relief, and we’re still supporting
                  these efforts. See the powerful impact we’re making together.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-72 md:w-64 bg-white shadow-sm flex flex-col">
              <img
                src={img4}
                alt=""
                className="w-full h-52 md:h-48 object-cover"
              />
              {/* description */}
              <div className="p-3 flex-1 bg-white">
                <h1 className="text-xl text-blue-950 font-semibold capitalize">
                  responding and rebuilding together
                </h1>
                <p className="text-gray-700 text-sm mt-2 lowercase">
                  When a magnitude 7.4 earthquake struck Hualien City, China
                  Taiwan in April 2024, LCIF acted quickly to empower Lions on
                  the ground. Lions delivered vital food, water and supplies to
                  those affected by this crisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stories;
