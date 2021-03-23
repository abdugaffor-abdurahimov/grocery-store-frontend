import useAuth from "../../hooks/useAuth";
import SingleProduct from "../../components/elements/SingleProduct";

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productsActions";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  useAuth();

  useEffect(() => {
    if (data.length < 1) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data.length]);

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  return (
    <Grid container className={classes.root}>
      <Container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {data.map((product, idx) => (
              <Grid key={idx} item>
                <SingleProduct product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
