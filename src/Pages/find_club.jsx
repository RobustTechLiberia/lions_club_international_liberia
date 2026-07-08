import React from "react";
import NavBar from "../components/navbar";
import RegionalClubs from "../components/clubs";
import ChatbotWidget from "../components/ChatbotWidget";

class FindClub extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <RegionalClubs />
        <ChatbotWidget />
      </>
    );
  }
}

export default FindClub;
