import React from "react";

class Products extends React.Component {
  render() {
    return (
      <>
        <div className="fixed w-full bg-white h-auto">
          <div className="flex flex-wrap justify-evenly gap-5">
            <h1 className="text-center capitalize text-2xl my-10 font-sans font-semibold">
              new products!
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
