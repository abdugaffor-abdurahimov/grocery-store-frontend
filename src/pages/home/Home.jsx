import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import DefaultCaraucel from "../../components/caraucels/DefaultCaraucel";

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
    <div>
      <DefaultCaraucel data={data} />
    </div>
  );
};

export default Home;
