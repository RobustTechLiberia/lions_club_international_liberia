import React from "react";
import NavBar from "../components/navbar";
import RegionalClubs from "../components/clubs";

class FindClub extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <RegionalClubs />
      </>
    );
  }
}

export default FindClub;
