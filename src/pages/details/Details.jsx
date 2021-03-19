// import { CircularProgress } from "@material-ui/core";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { setCurrentProduct } from "../../actions/productsActions";
// import fetchDefault from "../../clients";
// import CustomPagging from "../../components/caraucels/CustomPagging";

// export default function Details() {
//   const { currentProduct } = useSelector((state) => state.products);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!currentProduct._id) {
//       const fetchCurrentProduct = async () => {
//         fetchDefault
//           .get("/api/products/" + id)
//           .then((response) => {
//             if (response.statusText === "OK") {
//               dispatch(setCurrentProduct(response.data));
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//       fetchCurrentProduct();
//     }
//   }, [dispatch, id, currentProduct._id]);

//   return (
//     <div>
//       {currentProduct._id ? (
//         <>
//           {/* <img src={currentProduct.images[0] + "&w=500"} alt="product-img" /> */}
//           {<CustomPagging images={currentProduct.images} />}
//           <br />
//           {currentProduct.description}
//         </>
//       ) : (
//         <CircularProgress color="secondary" />
//       )}
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SimpleSlider = () => {
  const useStyles = makeStyles(() => ({
    slickContainer: {
      width: "99%",
      border: "1px solid red",
    },
    container: {
      // width: "calc(100%-345px)",
    },
  }));
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <h2> Single Item</h2>
      <Slider {...settings} className={classes.slickContainer}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  );
};

export default SimpleSlider;
