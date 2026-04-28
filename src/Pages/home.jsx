import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import Global from "../components/section_global";
import JoinUS from "../components/join_us";
import FollowUs from "../components/follow_us";
import Footer from "../components/footer";
import ContentSection from "../components/content_section";
import favicon from "../assets/10_01KGJ891CDH084MA4B4GPS3D4J+linkedin+default.webp";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/webp" href={favicon} />
        </Helmet>
        <NavBar />
        <Banner />
        <Global />
        <ContentSection />
        <JoinUS />
        <FollowUs />
        <Footer />
      </>
    );
  }
}

export default HomePage;
