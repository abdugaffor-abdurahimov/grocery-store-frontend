import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          borderRight: "1px solid black",
          marginRight: "10px",
          paddingRight: "10px",
        }}
      >
        404{" "}
      </p>
      <p> This page does not exist</p>
    </div>
  );
}
