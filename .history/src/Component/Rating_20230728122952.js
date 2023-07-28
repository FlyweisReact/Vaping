/** @format */

import React from "react";

const Rating = ({ rating }) => {
  let ratingComp;

  if (rating === 0) {
    const Component = () => {
      return <i className="fa-solid fa-star" style={{ color: "#fec806" }}></i>;
    };
    ratingComp = <Component />;
  } else if (rating === 0.5) {
    const Component = () => {
      return (
        <>
          <i className="fa-solid fa-star" style={{ color: "#fec806" }}></i>
          <i
            className="fa-solid fa-star-half"
            style={{ color: "#fec806" }}
          ></i>
        </>
      );
    };
    else if (rating === 0.5) {
        const Component = () => {
          return (
            <>
              <i className="fa-solid fa-star" style={{ color: "#fec806" }}></i>
              <i
                className="fa-solid fa-star-half"
                style={{ color: "#fec806" }}
              ></i>
            </>
          );
        };
        else if (rating === 0.5) {
            const Component = () => {
              return (
                <>
                  <i className="fa-solid fa-star" style={{ color: "#fec806" }}></i>
                  <i
                    className="fa-solid fa-star-half"
                    style={{ color: "#fec806" }}
                  ></i>
                </>
              );
            };
    ratingComp = <Component />;
  }

  return ratingComp;
};

export default Rating;
