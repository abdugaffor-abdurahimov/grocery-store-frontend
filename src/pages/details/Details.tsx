import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { setCurrentProduct } from "../../redux/actions/productsActions";
import { Carousel } from "react-responsive-carousel";
import ProductChangeInput from "../../components/elements/ProductChangeInput";
import { sendAddProductToCart } from "../../redux/actions/cartActions";
import client from "../../httpClient";

export default function Details() {
    const { products, user } = useSelector((state: IState) => state);
    const { currentProduct } = products;
    const { userInfos } = user;
    const { id: productId } = useParams<{ id: string }>();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!currentProduct._id) {
            const fetchCurrentProduct = async () => {
                client
                    .get("/api/products/" + productId)
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
    }, [dispatch, productId, currentProduct._id]);

    return (
        <>
            {currentProduct._id ? (
                <>
                    <Carousel showArrows={true}>
                        {currentProduct.images.map(
                            (image: any, index: number) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt="img-prd"
                                        style={{ maxWidth: "400px" }}
                                    />
                                </div>
                            )
                        )}
                    </Carousel>
                    <br />
                    {userInfos.cart.find(
                        (item: ICart) => item.product._id === productId
                    ) ? (
                        <ProductChangeInput
                            value={
                                // Tslint:disable-next-line:no-unused-expression
                                userInfos.cart.find(
                                    (item) => item.product._id === productId
                                )?.amount
                            }
                            userId={userInfos._id}
                            productId={productId}
                        />
                    ) : (
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => {
                                if (userInfos._id) {
                                    dispatch(
                                        sendAddProductToCart(
                                            productId,
                                            userInfos._id
                                        )
                                    );
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
        </>
    );
}
