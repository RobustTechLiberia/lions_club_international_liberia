import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="bg-blue-950 md:h-full">
          <div className="flex flex-wrap justify-evenly gap-5">
            {/* news */}
            <div className="pt-8">
              <span className="text-yellow-500 font-sans font-semibold uppercase text-lg">
                news
              </span>
              <ul className="font-sans capitalize text-lg text-start text-white">
                <li className="py-3">
                  <Link to="/press-center">press center</Link>
                </li>
                <li className="py-3">
                  <Link to="/lions-blog">the lions blog</Link>
                </li>
                <li className="py-3">
                  <Link to="/lions-magazine">
                    <span className="uppercase">lions</span> magazine
                  </Link>
                </li>
              </ul>
            </div>
            {/* media */}
            <div className="pt-8">
              <span className="text-yellow-500 font-sans font-semibold uppercase text-lg">
                media
              </span>
              <ul className="font-sans capitalize text-md text-start text-white">
                <li className="py-3">
                  <Link to="/video-center">video center</Link>
                </li>
                <li className="py-3">
                  <Link to="/logos">logos</Link>
                </li>
                <li className="py-3">
                  <Link to="/brand-guideline">brand guideline</Link>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <span className="text-yellow-500 font-sans font-semibold uppercase text-lg">
                connect
              </span>
              <ul className="font-sans capitalize text-lg text-start text-white">
                <li className="py-3">
                  <Link to="/careers">careers</Link>
                </li>
                <li className="py-3">
                  <Link to="/contact-lci">
                    contact
                    <span className="uppercase"> lci</span>
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/contact-lcif">
                    contact
                    <span className="uppercase"> lcif</span>
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/your-support">your support</Link>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <span className="text-yellow-500 font-sans font-semibold uppercase text-lg">
                follow us
              </span>
            </div>
          </div>
          <div className="pt-12">
            <div className="bg-white md:mx-32 h-1 mx-5"></div>
          </div>
          <div className="flex flex-wrap justify-evenly gap-0 md:mx-0 mx-5 pt-8">
            <p className="text-md text-white text-start font-sans py-5 md:w-5xl md:mx-10">
              All donations accepted on lionsclubs.org support Lions Clubs
              International Foundation (LCIF), which is a 501(c)(3) tax-exempt
              public charitable organization. Lions Clubs International (LCI) is
              a 501(c)(4) tax-exempt social welfare organization and is not
              eligible to accept or solicit charitable donations. LCI and LCIF
              are EEO providers.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
