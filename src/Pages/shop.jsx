import React from "react";
import Nav from "../components/shop_nav";
import ShopCarousel from "../components/carousel_shop.jsx";
import Products from "../components/products.jsx";

class Shop extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <ShopCarousel />
        <Products />
      </>
    );
  }
}

export default Shop;
