import React from "react";
import img1 from "../assets/images/1772807663661.jpg";

class SupportService extends React.Component {
  render() {
    return (
      <>
        <section className="bg-white px-4 py-10 md:px-0 md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col overflow-hidden bg-white shadow-none  md:min-h-105 md:flex-row">
            <div className="relative h-auto w-full overflow-hidden md:h-96 md:w-[52%]">
              <img
                src={img1}
                alt="Support our service"
                className="md:h-96 w-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-amber-300/55 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)] md:w-32"></div>
              <div className="absolute inset-y-0 -right-px hidden w-28 bg-violet-500/55 [clip-path:polygon(100%_0,0_0,38%_100%,100%_100%)] md:block"></div>
            </div>

            <div className="flex w-full items-center px-6 py-10 md:w-[48%] md:px-12">
              <div className="max-w-xl">
                <h1 className="text-left text-4xl font-semibold capitalize leading-tight text-black">
                  Support our service
                </h1>
                <div className="mt-4 h-1 w-16 bg-amber-400"></div>
                <p className="pt-6 text-md text-neutral-700">
                  Giving empowers service. When you support LCIF, 100% of your
                  donation benefits the very grants and programs that empower
                  the compassionate service of Lions and Leos, and those who
                  need our help. Your generosity makes a powerful impact.
                </p>
                <div className="pt-8">
                  <a
                    href="#"
                    className="inline-flex rounded-sm bg-amber-400 px-7 py-3 text-lg font-semibold text-black transition hover:bg-amber-500"
                  >
                    Donate now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SupportService;
