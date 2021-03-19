import React from "react";
import Slider from "react-slick";

export default function CustomPagging({ images }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a href="#endregion">
          <img src={images[i + 1] + "&w=300"} alt="img-ssss" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: "absolute", left: 0, right: 0 }}>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url + "&w=100"} alt="item" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
