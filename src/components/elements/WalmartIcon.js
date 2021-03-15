import React from "react";

const WalmartIcon = ({ width = "100px" }) => (
  <img
    src={process.env.PUBLIC_URL + "walmart.png"}
    alt="walmart"
    style={{ width: "40px" }}
  />
);

export default WalmartIcon;
