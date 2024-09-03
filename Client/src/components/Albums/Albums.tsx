import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import albumCover from "../../assets/icons/cd-cover (1).png";
function Albums() {
  return (
    <>
      <InfoCard name="Albums" count={10} imageUrl={albumCover} />
      <InfoCard name="Albums" count={10} imageUrl={albumCover} />
      <InfoCard name="Albums" count={10} imageUrl={albumCover} />
    </>
  );
}

export default Albums;
