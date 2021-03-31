import { sendAddProductToCart } from "../../actions/cartActions";
import { setCurrentProduct } from "../../actions/productsActions";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProductChangeInput from "./ProductChangeInput";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SigleProduct({ product }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfos } = useSelector((state) => state.user);

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          dispatch(setCurrentProduct(product));
          history.push(`/details/${product._id}`);
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.images[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description.slice(0, 50)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {userInfos.cart.find((item) => item.product._id === product._id) ? (
          <ProductChangeInput
            value={
              userInfos.cart.find((item) => item.product._id === product._id)
                .amount
            }
            userId={userInfos._id}
            productId={product._id}
          />
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              if (userInfos._id) {
                dispatch(sendAddProductToCart(product._id, userInfos._id));
              } else {
                history.push("/login");
              }
            }}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
