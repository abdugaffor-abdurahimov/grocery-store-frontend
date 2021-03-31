import { CircularProgress, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setCurrentProduct } from "../../actions/productsActions";
import fetchDefault from "../../clients";
import { Carousel } from "react-responsive-carousel";
import ProductChangeInput from "../../components/elements/ProductChangeInput";

export const fixedWidth = () => <Carousel width="700px"></Carousel>;

export default function Details() {
  const { currentProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentProduct._id) {
      const fetchCurrentProduct = async () => {
        fetchDefault
          .get("/api/products/" + id)
          .then((response) => {
            if (response.statusText === "OK") {
              dispatch(setCurrentProduct(response.data));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

      fetchCurrentProduct();
    }
  }, [dispatch, id, currentProduct._id]);

  return (
    <Container>
      {currentProduct._id ? (
        <>
          <Carousel showArrows={true} width="400px">
            {currentProduct.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt="img-prd" />
              </div>
            ))}
          </Carousel>
          <br />
          <ProductChangeInput
            // value={amount}
            // userId={userInfos._id}
            productId={currentProduct._id}
          />
          <br />
          <></>
          <h1>Price: {currentProduct.price} $</h1>
          <p>{currentProduct.description}</p>
        </>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Container>
  );
}
