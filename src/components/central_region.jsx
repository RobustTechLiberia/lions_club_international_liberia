import React from "react";
import LionsIcon from "../assets/images/lions.png";

class CenterRegion extends React.Component {
  render() {
    const clubs = [
      {
        name: "central monrovia lion club",
        subname: "omega sinkor lion club",
        address: "Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA",
        president: "Balveer Gehlot",
      },
      {
        name: "central monrovia lion club",
        subname: "paynesville oriented lion club",
        address: "Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA",
        president: "Balveer Gehlot",
      },
      {
        name: "central monrovia lion club",
        subname: "paynesville oriented lion club",
        address: "Jodhpur Heritage On Rotation Basis Jodhpur RJ, 342001 INDIA",
        president: "Balveer Gehlot",
      },
    ];

    return (
      <>
        <div>
          <h1 className="text-left md:mx-10 mx-5 md:my-5 text-3xl font-sans font-semibold">
            Our nearby clubs
          </h1>

          {/*
            Laptop should match Desktop:
            - Keep fixed card width so wrapping happens only at the same breakpoints.
            - Remove breakpoint-dependent inner padding differences.
          */}
          <div className="md:mx-10 bg-white flex mx-5 md:py-5 py-5 flex-wrap md:justify-start justify-center md:gap-3 gap-5">
            {clubs.map((club, index) => (
              <div key={index} className="w-80">
                <div className="shadow-sm bg-white rounded-none h-96 w-80">
                  <div className="bg-blue-900 h-10 text-white text-lg capitalize w-auto">
                    <h1 className="mx-5">{club.name}</h1>
                  </div>

                  <div className="w-full bg-gray-500 h-40 flex justify-center items-center">
                    <img
                      src={LionsIcon}
                      alt="lions club logo"
                      className="w-32 object-fill"
                    />
                  </div>

                  <ul className="mx-5 my-3">
                    <li className="font-semibold text-lg capitalize text-left font-sans">
                      {club.subname}
                    </li>
                    <li className="my-1">{club.address}</li>
                    <li>Club President: {club.president}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default CenterRegion;
