import React, { Component } from "react";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div
          className="flex flex-wrap md:bg-fixed md:w-full object-cover object-center justify-center  h-100 md:h-110 bg-gray-400 mx-0 bg-no-repeat bg-cover bg-center"
          id="banner"
        >
          <div className="md:pt-32 pt-8 text-center mx-5">
            <h1 className="font-sans text-5xl text-white font-semibold">
              We are serving a world in need.
            </h1>
            <br />
            <br />
            <span className="font-sans text-center text-4xl font-normal text-yellow-500 capitalize">
              one act of kindness at a time
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
