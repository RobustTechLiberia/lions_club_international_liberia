import React from "react";
import heading_image from "../assets/images/SelfRegistrationPageLogoV2_1 .png";

class EportalForm extends React.Component {
  render() {
    return (
      <>
        <div
          className="bg-cover bg-no-repeat md:h-dvh h-dvh mx-0"
          id="form-background"
        >
          <div className="md:pt-14 py-14 flex flex-wrap justify-center">
            <img src={heading_image} className=" md:w-lg w-72"></img>
          </div>
          <div className="flex flex-1 flex-wrap justify-center">
            <form action="#" method="GET">
              {/* username */}
              <div className="py-5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="bg-white  rounded-none md:py-5 py-3 md:w-96 w-80 px-3 text-start text-gray-900 font-sans lowercase"
                />
              </div>
              {/* password */}
              <div className="py-5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white md:py-5 rounded-none py-3 md:w-96 w-80 px-3 text-start text-gray-900 font-sans lowercase"
                />
              </div>
              {/* submit button */}

              <div className="py-5">
                <input
                  type="submit"
                  value="login"
                  className="py-4 bg-blue-500 md:px-44 px-36 cursor-pointer text-white capitalize font-sans rounded-none"
                />
              </div>
              {/* forget password */}
              <div className="py-3">
                <a
                  href="#"
                  className="text-white font-sans capitalize text-xl text-start"
                >
                  forgot your password
                </a>
              </div>
              {/* create an account */}
              <div className="md:py-3 py-3">
                <a
                  href="#"
                  className="text-white font-sans capitalize text-xl text-start"
                >
                  don't have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default EportalForm;
