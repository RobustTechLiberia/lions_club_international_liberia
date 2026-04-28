import React from "react";
import img1 from "../assets/images/1772807583546.jpg";
import img2 from "../assets/images/1772807622571.jpg";
import img3 from "../assets/images/1772807539854.jpg";
import img4 from "../assets/images/1772807570008.jpg";

class Stories extends React.Component {
  render() {
    return (
      <>
        <div className="bg-blue-950 md:h-150 h-auto md:mt-20">
          <h1 className="md:text-left text-center text-white font-sans md:text-3xl text-3xl md:mx-20 mx-10 md:py-12 font-semibold py-8 capitalize">
            stories of service
            <div className="md:my-3 my-2 md:justify-normal md:gap-5 gap-10 flex flex-wrap justify-center">
              <div className="bg-amber-500 w-28 h-1"></div>
            </div>
            <div className="flex flex-wrap md:justify-start justify-evenly gap-10 md:my-10 my-10 md:gap-5 h-auto">
              <div className="w-66 md:h-80 h-96 bg-white shadow-sm shadow-gray-50">
                <div className="md:h-20 h-50 bg-white flex flex-wrap justify-start">
                  <img
                    src={img1}
                    alt=""
                    className="md:h-32 h-full  md:w-full w-60 mx-3 my-3 md:object-cover"
                  />
                  <div className="flex flex-wrap justify-start mx-3">
                    <h1 className="text-xl text-blue-950 font-sans font-semibold text-left mx-0">
                      change a life
                    </h1>
                    <p className="text-gray-700 text-sm md:text-xs text-left font-normal font-sans py-2 lowercase">
                      <span className="uppercase"> LCIF'</span>s impact is
                      measured by individual life transformed through your
                      support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-66 h-80 bg-white shadow-sm shadow-gray-50">
                <div className="w-66 md:h-auto h-96 my-5 bg-white">
                  <div className="md:h-20 h-50 bg-white">
                    <img
                      src={img2}
                      alt=""
                      className="md:h-32 h-full md:w-60  w-60 mx-3 my-3 md:object-cover"
                    />
                    <div className="flex flex-wrap justify-start mx-3">
                      <h1 className="text-xl text-blue-950 font-sans font-semibold text-left mx-0">
                        empowering youth across the globe
                      </h1>
                      <p className="text-gray-700 text-xs md:text-sm text-left font-normal font-sans lowercase">
                        over four years.
                        <span className="capitalize">lions quest </span>has
                        transformed youth,expanded globally and formed key
                        partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-66 h-80 bg-white shadow-sm shadow-gray-50">
                <div className="w-66 h-80 bg-white">
                  <div className="md:h-20 h-50 bg-white flex flex-wrap justify-center">
                    <img
                      src={img3}
                      alt=""
                      className="md:h-32 h-full  w-full mx-3 my-3 md:object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-66 h-80 bg-white shadow-sm shadow-gray-50">
                <div className="w-66 h-80 bg-white">
                  <div className="md:h-20 h-50 bg-white flex flex-wrap justify-center">
                    <img
                      src={img4}
                      alt=""
                      className="md:h-32 h-full  w-full mx-3 my-3 md:object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </>
    );
  }
}

export default Stories;
