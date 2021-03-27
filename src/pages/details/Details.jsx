import { CircularProgress, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setCurrentProduct } from "../../actions/productsActions";
import fetchDefault from "../../clients";

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
          <img src={currentProduct.images[0]} alt="product-img" />
          <br />
          {currentProduct.description}
        </>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Container>
  );
}
