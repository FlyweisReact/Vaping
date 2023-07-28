/** @format */

import React from "react";

const Rating = ({ rating }) => {
  let ratingComp;

  if (rating === 0) {
    const Component = () => {
      return <i cloassName="fa-solid fa-star" style={{ color: "#fec806" }}></i>;
    };
    ratingComp = <Component />;
  } else if (rating === 0.5) {
    const Component = () => {
      return (
        <>
          <i cloassName="fa-solid fa-star" style={{ color: "#fec806" }}></i>
          <i cloassName="fa-solid fa-star-" style={{ color: "#fec806" }}></i>
            </>
      );
    };
    ratingComp = <Component />;
  }

  return ratingComp;
};

export default Rating;
