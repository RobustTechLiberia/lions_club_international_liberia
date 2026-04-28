import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/1772807789909.jpg";
import img2 from "../assets/images/1772806368611.jpg";

class JoinUS extends React.Component {
  render() {
    return (
      <>
        <div className="bg-blue-950 md:h-dvh h-auto">
          <h1 className="text-white text-3xl md:mx-28 mx-5 md:py-10 font-sans font-semibold pt-10">
            Join us.
            <br />
            <div className="bg-yellow-500 h-1 w-20 "></div>
          </h1>
          <div className="flex flex-wrap justify-evenly gap-5 md:py-5 py-8 md:mx-0 mx-5">
            <div className="w-xl h-96 bg-white shadow-sm shadow-gray-200 rounded-1">
              <img
                src={img1}
                alt=""
                className="w-full object-cover h-72 px-5 py-5 cursor-pointer hover:brightness-90"
              />
              <span className="text-2xl text-blue-900 font-sans md:mx-5 font-semibold py-5 capitalize mx-5">
                member experience
              </span>
            </div>
            <div className="w-xl h-96 bg-white shadow-sm shadow-gray-200 rounded-1">
              <div className="w-full h-72">
                <img
                  src={img2}
                  alt=""
                  className="w-full object-cover h-72 px-5 py-5 cursor-pointer hover:brightness-90"
                />
              </div>
              <span className="text-2xl text-blue-900 font-sans md:mx-5 font-semibold py-5 capitalize mx-5">
                club &amp; membership types
              </span>
            </div>
          </div>
          <div className="flex flex-nowrap justify-center items-center py-14">
            <Link
              to="/find-a-club"
              className="px-3 py-2 capitalize border border-white rounded-md text-white font-sans text-lg"
            >
              find a club
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default JoinUS;
