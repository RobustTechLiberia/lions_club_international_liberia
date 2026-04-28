import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  componentDidMount() {
    if (!this.navRef.current) return;

    const $nav = $(this.navRef.current);
    const $topLinks = $nav.find(".js-top-nav-link");
    const $bottomNav = $nav.find(".js-bottom-nav");

    $topLinks.on("mouseenter.bottomNav", () => {
      $bottomNav.removeClass("hidden");
    });

    $nav.on("mouseleave.bottomNav", () => {
      $bottomNav.addClass("hidden");
    });
  }

  componentWillUnmount() {
    if (!this.navRef.current) return;

    const $nav = $(this.navRef.current);
    $nav.find(".js-top-nav-link").off(".bottomNav");
    $nav.off(".bottomNav");
  }

  render() {
    return (
      <>
        {/* top navigation links */}
        <nav
          ref={this.navRef}
          className="mt-36 md:mt-10 bg-white w-full z-20 top-0 start-0 font-sans mb-5"
        >
          <div className="flex flex-wrap justify-between items-end max-w-7xl p-4 md:border-0 md:mx-20">
            <div
              id="mega-menu-full"
              className="items-end justify-between w-full md:flex md:w-auto"
            >
              <ul className="flex flex-row font-medium md:space-x-2 rtl:space-x-reverse text-left">
                <li>
                  <Link
                    to="/about"
                    className="js-top-nav-link block px-1 py-3  capitalize md:text-xl text-lg font-semibold text-yellow-500"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-impact"
                    className="js-top-nav-link block px-3 py-3 text-heading capitalize md:text-xl text-lg"
                  >
                    our impact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved"
                    className="js-top-nav-link block px-3 py-3 text-heading capitalize md:text-xl text-lg"
                  >
                    get involved
                  </Link>
                </li>
                <li>
                  <Link
                    to="/membership-resources"
                    className="js-top-nav-link block px-3 py-3 text-violet-950 capitalize md:text-xl text-lg"
                  >
                    membership resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* bottom navigation */}
          <div className="js-bottom-nav hidden mt-1 bg-white">
            <div className="flex flex-row py-2 flex-wrap justify-start gap-5 max-w-7xl md:mx-20 text-heading">
              <ul className="mx-2 md:mx-0">
                <li>
                  <Link to="/our-organization" className="block p-3">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      our organization
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/lions-club-liberia" className="block p-3">
                    <div className="hover:text-yellow-500 font-semibold capitalize font-lions">
                      lions club liberia
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/our-core-values" className="block p-3">
                    <div className="hover:text-yellow-500 font-semibold capitalize font-sans">
                      our core values
                    </div>
                  </Link>
                </li>
              </ul>

              <ul className="md:mx-0 mx-2">
                <li>
                  <Link to="/our-leadership" className="block capitalize p-3">
                    <div className="hover:text-yellow-500 font-semibold">
                      our leadership
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/national-impact" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      national impact
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/how-membership-works" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      how membership works?
                    </div>
                  </Link>
                </li>
              </ul>

              <ul className="hidden md:block">
                <li>
                  <Link to="/what-is-lion" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      what is lion?
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/what-is-leo" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      what is leo?
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/membership-club-type" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      membership &amp; club type?
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="hidden md:block">
                <li>
                  <Link to="/partnership" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      partnership
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/lion-stories" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      lion stories
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/membership-benefits" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      membership &amp; benefits
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="hidden md:block">
                <li>
                  <Link to="/regional-clubs" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      regional clubs
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/news-media" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      news &amp; media
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/ways-to-give" className="block p-3 ">
                    <div className="hover:text-yellow-500 font-semibold capitalize">
                      ways to give
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default BottomNav;
