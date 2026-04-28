import React from "react";
import NavBar from "../components/navbar";
import Banner from "../components/lcif_banner";
import OurMission from "../components/our_mission";
import ChangeLife from "../components/changing_life";
import Sponsor from "../components/sponsor";
import SupportService from "../components/support_our_service";
import Stories from "../components/stories";
import Footer from "../components/footer";

class LCIF extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Banner />
        <OurMission />
        <ChangeLife />
        <Stories />
        <Sponsor />
        <SupportService />
        <Footer />
      </>
    );
  }
}

export default LCIF;
