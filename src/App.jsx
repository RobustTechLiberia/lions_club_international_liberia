import React from "react";
import HomePage from "./Pages/home";
import Shop from "./Pages/shop";
import Convention from "./Pages/convention";
import LionsPortal from "./Pages/lions_portal";
import LCIF from "./Pages/lcif";
import FindClub from "./Pages/find_club";
import About from "./Pages/about";
import OurImpact from "./Pages/our_impact";
import GetInvolved from "./Pages/get_involved";
import MembershipResources from "./Pages/membership_resources";
import Join from "./Pages/join";
import Donate from "./Pages/donate";
import PressCenter from "./Pages/press_center";
import LionsBlog from "./Pages/lions_blog";
import LionsMagazine from "./Pages/lions_magazine";
import VideoCenter from "./Pages/video_center";
import Logos from "./Pages/logos";
import BrandGuideline from "./Pages/brand_guideline";
import Careers from "./Pages/careers";
import ContactLci from "./Pages/contact_lci";
import ContactLcif from "./Pages/contact_lcif";
import YourSupport from "./Pages/your_support";
import OurOrganization from "./Pages/our_organization";
import LionsClubLiberia from "./Pages/lions_club_liberia";
import OurCoreValues from "./Pages/our_core_values";
import OurLeadership from "./Pages/our_leadership";
import NationalImpact from "./Pages/national_impact";
import HowMembershipWorks from "./Pages/how_membership_works";
import WhatIsLion from "./Pages/what_is_lion";
import WhatIsLeo from "./Pages/what_is_leo";
import MembershipClubType from "./Pages/membership_club_type";
import Partnership from "./Pages/partnership";
import LionStories from "./Pages/lion_stories";
import MembershipBenefits from "./Pages/membership_benefits";
import RegionalClubs from "./Pages/regional_clubs";
import NewsMedia from "./Pages/news_media";
import WaysToGive from "./Pages/ways_to_give";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "../style.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/convention" element={<Convention />} />
          <Route path="/lions-portal" element={<LionsPortal />} />
          <Route path="/find-a-club" element={<FindClub />} />
          <Route path="/lcif" element={<LCIF />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/membership-resources" element={<MembershipResources />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/press-center" element={<PressCenter />} />
          <Route path="/lions-blog" element={<LionsBlog />} />
          <Route path="/lions-magazine" element={<LionsMagazine />} />
          <Route path="/video-center" element={<VideoCenter />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/brand-guideline" element={<BrandGuideline />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-lci" element={<ContactLci />} />
          <Route path="/contact-lcif" element={<ContactLcif />} />
          <Route path="/your-support" element={<YourSupport />} />
          <Route path="/our-organization" element={<OurOrganization />} />
          <Route path="/lions-club-liberia" element={<LionsClubLiberia />} />
          <Route path="/our-core-values" element={<OurCoreValues />} />
          <Route path="/our-leadership" element={<OurLeadership />} />
          <Route path="/national-impact" element={<NationalImpact />} />
          <Route path="/how-membership-works" element={<HowMembershipWorks />} />
          <Route path="/what-is-lion" element={<WhatIsLion />} />
          <Route path="/what-is-leo" element={<WhatIsLeo />} />
          <Route path="/membership-club-type" element={<MembershipClubType />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/lion-stories" element={<LionStories />} />
          <Route path="/membership-benefits" element={<MembershipBenefits />} />
          <Route path="/regional-clubs" element={<RegionalClubs />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/ways-to-give" element={<WaysToGive />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    );
  }
}
export default App;
