import React from "react";

class ChangeLife extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-auto md:mx-16">
          <h1 className="font-sans font-semibold text-3xl md:mx-20 mx-5 capitalize py-8">
            changing lives since 1968
            <div className="bg-yellow-500 h-1 w-16 mt-3 mx-2"></div>
          </h1>
        </div>
        <div className="bg-white h-auto">
          <div className="flex flex-wrap gap-0 py-8 justify-center items-center pb-10 px-4 sm:px-0">
            <div className="w-full max-w-sm sm:w-96 h-72 bg-blue-950 mx-auto sm:mx-0">
              <h1 className="text-center text-yellow-500 text-5xl py-20 font-semibold">
                24,000+
                <br />
                <span className="text-xl text-white font-sans font-normal py-5">
                  LCIF grants awarded
                </span>
              </h1>
            </div>
            {/* second div */}
            <div className="w-full max-w-sm sm:w-96 h-72 bg-purple-800 mx-auto sm:mx-0">
              <h1 className="text-center text-yellow-500 text-5xl py-20 font-semibold">
                173 <br />
                million
                <br />
                <span className="text-xl text-white font-sans font-normal py-5">
                  in disaster relief support
                </span>
              </h1>
            </div>
            {/* third div */}

            <div className="w-full max-w-sm sm:w-96 h-72  bg-blue-900 mx-auto sm:mx-0">
              <h1 className="text-center text-yellow-500 text-5xl py-20 mx-32 font-semibold">
                20 + million
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChangeLife;
