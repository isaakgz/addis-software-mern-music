import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import artistIcon from "../../assets/icons/artist.png";

function Artists() {
  return (
    <>
      <InfoCard
        name="Artists"
        count={10}
        imageUrl={artistIcon}
      />
      <InfoCard
        name="Artists"
        count={10}
        imageUrl={artistIcon}
      />
      <InfoCard
        name="Artists"
        count={10}
        imageUrl={artistIcon}
      />
      <InfoCard
        name="Artists"
        count={10}
        imageUrl={artistIcon}
      />
    </>
  );
}

export default Artists;
