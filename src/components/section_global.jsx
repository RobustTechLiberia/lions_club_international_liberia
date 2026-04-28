import React from "react";

class Global extends React.Component {
  render() {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Making a global impact
          </h1>
          <div className="mt-2 h-1 w-20 bg-amber-500"></div>
          <div className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-0">
            <div className="bg-blue-950 flex min-h-55 items-center justify-center px-6 text-center sm:min-h-65 lg:min-h-75">
              <h2 className="font-sans font-semibold text-yellow-500">
                <span className="block text-4xl sm:text-5xl">1.4</span>
                <span className="mt-1 block text-2xl sm:text-3xl">million</span>
                <span className="mt-2 block text-xl text-white sm:text-2xl">
                  Lions serving
                </span>
              </h2>
            </div>
            <div className="bg-violet-900 flex min-h-55 items-center justify-center px-6 text-center sm:min-h-65 lg:min-h-75">
              <h2 className="font-sans font-semibold text-yellow-500">
                <span className="block text-4xl sm:text-5xl">14</span>
                <span className="mt-1 block text-2xl sm:text-3xl">
                  Lions Clubs
                </span>
                <span className="mt-2 block text-xl text-white sm:text-2xl">
                  nationwide
                </span>
              </h2>
            </div>
            <div className="bg-blue-600 flex min-h-55 items-center justify-center px-6 text-center sm:min-h-65 lg:min-h-75">
              <h2 className="font-sans font-semibold text-yellow-500">
                <span className="block text-4xl sm:text-5xl">15</span>
                <span className="mt-1 block text-2xl sm:text-3xl">
                  counties
                </span>
                <span className="mt-2 block text-xl text-white sm:text-2xl">
                  and region served
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Global;
