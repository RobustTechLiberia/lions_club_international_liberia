import React from "react";

class OurMission extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-auto md:mx-16">
          <h1 className="text-3xl font-sans capitalize md:mx-20 mx-5 md:mt-20  mt-8 font-semibold">
            our mission
            <div className="bg-yellow-500 h-1 w-16 mt-3 mx-2"></div>
          </h1>
          <p className="font-sans text-gray-900 md:mx-20 mx-5 mt-5 text-lg leading-7">
            Our mission is to empower Lions clubs, volunteers and partners to
            improve health and wellbeing, strengthen communities, and support
            those in need through humanitarian service and grants that impact
            lives globally, and encourage peace and international understanding.
          </p>
        </div>
      </>
    );
  }
}

export default OurMission;
