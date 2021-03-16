import React from "react";
import { useSelector } from "react-redux";

export default function Details() {
  const { currentProduct } = useSelector((state) => state.products);

  return (
    <div>
      <img src={currentProduct.images[0]} alt="product-img" />
      <br />
      {currentProduct.description}
    </div>
  );
}
