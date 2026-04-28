import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/10_01KGJ891CDH084MA4B4GPS3D4J+linkedin+default.webp";

class MiddleNav extends React.Component {
  render() {
    return (
      <nav className="flex flex-wrap md:flex-row justify-evenly mt-2 gap-2 h-20">
        <div className="flex md:mx-8 mx-1 justify-space  space-x-8">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Lions International Logo"
              className="mx-2 md:mx-8"
            />
            <span className="w-auto md:w-auto font-lions font-bold capitalize mx-2 md:mx-0 text-3xl md:text-3xl text-gray-600">
              lions club liberia
              <br />
              <span className="text-sm font-normal">Region 34 , 403A</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-row flex-nowrap items-center md:justify-end justify-start gap-5 max-w-7xl md:py-0 py-8 px-2 mx-auto text-heading sm:flex-row md:flex-row md:px-6">
          <Link
            to="/join"
            className="px-12 text-center py-3 bg-blue-900 text-xl text-white font-semibold rounded hover:bg-blue-800 capitalize hover:cursor-pointer hover:transform hover:duration hover:delay-1000"
          >
            join
          </Link>
          <Link
            to="/donate"
            className="px-10 py-3 bg-yellow-500 text-center text-xl text-black font-semibold rounded capitalize hover:cursor-pointer hover:bg-yellow-400 hover:transform hover:duration hover:delay-1000"
          >
            Donate
          </Link>
        </div>
      </nav>
    );
  }
}

export default MiddleNav;
