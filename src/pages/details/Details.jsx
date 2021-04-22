import { Button, CircularProgress, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { setCurrentProduct } from "../../redux/actions/productsActions";
import fetchDefault from "../../clients";
import { Carousel } from "react-responsive-carousel";
import ProductChangeInput from "../../components/elements/ProductChangeInput";
import { sendAddProductToCart } from "../../redux/actions/cartActions";

export default function Details() {
  const { products, user } = useSelector((state) => state);
  const { currentProduct } = products;
  const { userInfos } = user;
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

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
          {userInfos.cart.find((item) => item.product._id === id) ? (
            <ProductChangeInput
              value={
                userInfos.cart.find((item) => item.product._id === id).amount
              }
              userId={userInfos._id}
              productId={id}
            />
          ) : (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                if (userInfos._id) {
                  dispatch(sendAddProductToCart(id, userInfos._id));
                } else {
                  history.push("/login");
                }
              }}
            >
              Add to Cart
            </Button>
          )}
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
