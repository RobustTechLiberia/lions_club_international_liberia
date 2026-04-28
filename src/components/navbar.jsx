import React from "react";
import TopNav from "../components/topnav";
import MiddleNav from "../components/middlenav";
import BottomNav from "../components/bottom_nav";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-auto">
          <TopNav />
          <MiddleNav />
          <BottomNav />
        </div>
      </>
    );
  }
}

export default NavBar;
