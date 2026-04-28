import React from "react";
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="bg-white py-2 w-full font-sans z-20 top-0 start-0">
        <div className="max-w-7xl flex flex-wrap items-center justify-end mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body md:hidden hover:bg-white hover:text-heading"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={this.toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 font-light md:border-0 md:bg-white">
              <li>
                <Link
                  to="/lcif"
                  className="block py-2 px-3 text-black bg-white md:text-black md:p-0 font-normal font-sans uppercase"
                  aria-current="page"
                  onClick={this.closeMenu}
                >
                  lcif
                </Link>
              </li>
              <li>
                <Link
                  to="/lions-portal"
                  className="block py-2 px-3 text-black bg-white md:text-black md:p-0 font-normal font-sans uppercase"
                  onClick={this.closeMenu}
                >
                  lion portal
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-2 px-3 text-black bg-white md:text-black md:p-0 font-normal font-sans uppercase"
                  onClick={this.closeMenu}
                >
                  shop
                </Link>
              </li>
              <li>
                <Link
                  to="/convention"
                  className="block py-2 px-3 text-black bg-white md:text-black md:p-0 font-normal font-sans uppercase"
                  onClick={this.closeMenu}
                >
                  convention
                </Link>
              </li>
              <li>
                <Link
                  to="/find-a-club"
                  className="block py-2 px-3 text-black bg-white md:text-black md:p-0 font-normal font-sans uppercase"
                  onClick={this.closeMenu}
                >
                  find a club
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
