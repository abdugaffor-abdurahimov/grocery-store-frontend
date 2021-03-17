import React from "react";

const WalmartIcon = ({ width = "40px" }) => (
  <img
    src={process.env.PUBLIC_URL + "walmart.png"}
    alt="walmart"
    style={{ width: width }}
    className="App-logo"
  />
);

export default WalmartIcon;
