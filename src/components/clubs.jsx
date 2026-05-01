import React from "react";
import CenterRegion from "./central_region";

class RegionalClubs extends React.Component {
  render() {
    return (
      <>
        <div className="bg-gray-100 h-full md:pt-2 md:pb-5">
          <div className="md:mx-5 bg-white h-auto  md:mb-20 ">
            <h1 className="text-3xl font-semibold md:mx-10 mx-5 pt-10 capitalize text-left font-sans">
              find a regional club
            </h1>
            <p className="md:mx-10 mx-5 py-5 text-left text-gray-600 font-sans md:w-5xl">
              Service starts with Lions. Whether you’re interested in becoming a
              Lion or Leo, or requesting service from a club, this is the place
              to do it. Simply type the location or club name into the search
              bar below, and let the service begin!
            </p>
            <div className="py-5 md:mx-10 mx-5 bg-white h-auto flex flex-wrap justify-start items-center md:gap-5 gap-8">
              <div className="w-auto">
                <select className="w-auto py-3 border border-gray-500 bg-white">
                  <option value="Location">Location</option>
                  <option value="Keyword">Keyword</option>
                </select>
              </div>
              <div className="w-auto">
                <form action="#" method="GET">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="border border-gray-500 md:py-3 px-3 py-4 md:w-lg w-md"
                  />
                  <button
                    type="submit"
                    className="bg-gray-500 py-3 capitalize  w-50 text-white"
                  >
                    search
                  </button>
                </form>
              </div>
            </div>
            <CenterRegion />
          </div>
        </div>
      </>
    );
  }
}

export default RegionalClubs;
