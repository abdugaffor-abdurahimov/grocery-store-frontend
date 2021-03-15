import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../components/elements/SingleProduct";
// import { makeStyles } from "@material-ui/core/styles";
import useAuth from "../../hooks/useAuth";
// import Progreses from "../../components/elements/Progreses";

// const useStyles = makeStyles((theme) => ({
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  useAuth();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {data &&
        data.map((product, idx) => (
          <SingleProduct product={product} key={idx} />
        ))}
    </div>
  );
};

export default Home;
