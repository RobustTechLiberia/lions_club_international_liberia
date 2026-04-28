import React from "react";

class RegionalClubs extends React.Component {
  render() {
    return (
      <>
        <div className="bg-gray-100 h-dvh md:pt-5">
          <div className="md:mx-10 bg-white  h-96">
            <h1 className="text-2xl font-semibold md:mx-10 mx-5 py-5 capitalize text-left font-sans">
              find a regional club
            </h1>
            <p className="md:mx-10 mx-5 py-5 text-left text-gray-600 font-sans md:w-5xl">
              Service starts with Lions. Whether you’re interested in becoming a
              Lion or Leo, or requesting service from a club, this is the place
              to do it. Simply type the location or club name into the search
              bar below, and let the service begin!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default RegionalClubs;
