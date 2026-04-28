import React from "react";
import img from "../assets/images/1772807698357.jpg";

class Sponsor extends React.Component {
  render() {
    return (
      <>
        <div className="sponsor-section">
          <div className="sponsor-wrap">
            <div className="sponsor-text">
              <h1 className="pb-3 text-4xl font-semibold font-sans normal text-left">
                Our partners
              </h1>

              <div className="w-20 bg-yellow-500 h-1"></div>
              <p className="text-md font-sans py-8">
                Collaboration is key. And we keep good company. LCIF works with
                leading organizations and companies to amplify our service
                impact. Discover how our global partnerships make us stronger.
              </p>
              <div className="py-2 bg-white">
                <a
                  href="#"
                  className="bg-violet-900 rounded-sm py-4 px-5 text-white font-sans text-md normal"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* second div */}
            <div className="sponsor-image">
              <img src={img} alt="Our partners" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sponsor;
