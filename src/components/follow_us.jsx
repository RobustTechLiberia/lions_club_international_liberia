import React from "react";
import Activity from "../components/activities";
import facebook from "../assets/images/Facebook LCIF circle.webp";
import linkedin from "../assets/images/LinkedIn circle.webp";
import twitter from "../assets/images/Twitter circle.webp";

class FollowUs extends React.Component {
  render() {
    return (
      <>
        <div className="md:min-h-dvh h-auto bg-white">
          <h1 className="md:text-4xl text-3xl mx-5 py-8 normal md:mx-20 md:py-20 font-semibold">
            Follow our progress.
            <br />
            <div className="bg-yellow-500 w-28 h-1"></div>
          </h1>
          <p className="font-sans md:mx-20 mx-6 normal text-lg">
            Join our conversation on
            <span className="text-blue-900 cursor-pointer md:mx-2">
              social media
            </span>
            and see the difference we’re making around the world.
          </p>
          <div className="py-2 bg-white">
            <div className="flex flex-wrap justify-start gap-5 md:py-5 py-8 md:mx-20 mx-5">
              <div>
                <a href="#">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-12 h-12 cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-12 h-12 cursor-pointer"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={twitter} alt="Twitter" className="w-12 h-12" />
                </a>
              </div>
            </div>
            <Activity />
          </div>
        </div>
      </>
    );
  }
}

export default FollowUs;
