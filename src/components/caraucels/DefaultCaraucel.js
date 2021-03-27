import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SingleProduct from "../elements/SingleProduct";
// import useWindowWidth from "../../hooks/useWindowWidth";

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
  // const width = useWindowWidth();
  // const [sliderRight, setSliderRight] = useState(320);

  // useEffect(() => {
  //   if (width < 1000) {
  //     setSliderRight(30);
  //   }
  // }, [width]);

  return (
    <div
      style={{
        width: "99%",
      }}
    >
      <h2> Single Item</h2>
      <Slider {...settings}>
        {data.map((item, idx) => (
          <SingleProduct product={item} key={idx} />
        ))}
      </Slider>
    </div>
  );
};

export default DefaultCaraucel;
