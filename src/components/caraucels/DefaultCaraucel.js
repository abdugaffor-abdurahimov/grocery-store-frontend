import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import SingleProduct from "../elements/SingleProduct";
import useWindowWidth from "../../hooks/useWindowWidth";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DefaultCaraucel = ({ data }) => {
  const width = useWindowWidth();

  useEffect(() => {
    console.log(width);
  });

  return (
    <div style={{ position: "absolute", width: "100%", right: "320px" }}>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <SingleProduct product={item} />
        ))}
      </Slider>
    </div>
  );
};

export default DefaultCaraucel;
