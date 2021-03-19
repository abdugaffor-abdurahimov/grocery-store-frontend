import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import DefaultCaraucel from "../../components/caraucels/DefaultCaraucel";
import { Divider, Container } from "@material-ui/core";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  useAuth();

  useEffect(() => {
    if (data.length < 1) {
      dispatch(fetchProducts());
    }
  }, [dispatch, data.length]);
  return (
    <Container maxWidth="xl">
      <DefaultCaraucel data={data} />
      <Divider />
    </Container>
  );
};

export default Home;
