import React from "react";

class CenterRegion extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className="text-left md:mx-10 mx-5 md:my-5 text-3xl md:text-3xl font-sans font-semibold">
            Our nearby clubs
          </h1>

          <div className="md:mx-10 bg-white flex mx-5  md:py-5 py-5 flex-wrap md:justify-start justify-center gap-3">
            <div className="w-auto">
              {/* Omega Sinkor Lions Club */}
              <div className="shadow-sm bg-white rounded-none h-96 w-80">
                <div className="bg-blue-900 h-10 text-white text-lg capitalize w-auto">
                  central monrovia lion club
                </div>
                <div className="w-full bg-gray-500 h-50"></div>
                <ul className="md:mx-5 my-3">
                  <li className="font-semibold text-lg capitalize text-left font-sans">
                    omega sinkor lion club
                  </li>
                  <li className="my-1">
                    Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA
                  </li>
                  <li>Club President: Balveer Gehlot</li>
                </ul>
              </div>
            </div>
            {/* paynesvill oriented lion club */}
            <div className="w-auto">
              <div className="shadow-sm bg-white rounded-none h-96 w-80">
                <div className="bg-blue-900 h-10 text-white text-lg capitalize w-auto">
                  <h1 className="md:mx-5">central monrovia lion club</h1>
                </div>
                <div className="w-full bg-gray-500 h-50"></div>
                <ul className="md:mx-5 my-3">
                  <li className="font-semibold text-lg capitalize text-left font-sans">
                    paynesville oriented lion club
                  </li>
                  <li className="my-1">
                    Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA
                  </li>
                  <li>Club President: Balveer Gehlot</li>
                </ul>
              </div>
            </div>
            {/* paynesvill oriented lion club */}
            <div className="w-auto">
              <div className="shadow-sm bg-white rounded-none h-96 w-80">
                <div className="bg-blue-900 h-10 text-white text-lg capitalize w-auto">
                  <h1 className="md:mx-5">central monrovia lion club</h1>
                </div>
                <div className="w-full bg-gray-500 h-50"></div>
                <ul className="md:mx-5 my-3">
                  <li className="font-semibold text-lg capitalize text-left font-sans">
                    paynesville oriented lion club
                  </li>
                  <li className="my-1">
                    Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA
                  </li>
                  <li>Club President: Balveer Gehlot</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CenterRegion;
