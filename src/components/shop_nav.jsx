import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LCI-Shop-HomeMark_80x29.png";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="bg-gray-700 h-10 flex items-center px-4 md:px-20">
          <Link to="/" className="text-white text-sm md:text-base capitalize">
            lions club international
          </Link>
        </div>
        <div className="bg-blue-950 w-full px-4 md:px-10 py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <img src={Logo} alt="LOGO" className="h-7 md:h-8" />
              <Link
                to="/lions-portal"
                className="text-white text-sm md:text-lg md:hidden flex items-center gap-2 capitalize"
              >
                <i className="fa-solid fa-user text-xs" aria-hidden="true"></i>
                <span>login</span>
              </Link>
            </div>

            <div className="w-full md:flex-1 md:max-w-3xl md:mx-8">
              <input
                type="text"
                className="w-full h-10 md:h-12 bg-white px-4 text-sm md:text-base outline-none"
                placeholder="what are you looking for? "
              />
            </div>

            <div className="hidden md:block">
              <Link
                to="/lions-portal"
                className="text-white text-lg flex items-center gap-2 capitalize"
              >
                <i className="fa-solid fa-user text-sm" aria-hidden="true"></i>
                <span>login</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
