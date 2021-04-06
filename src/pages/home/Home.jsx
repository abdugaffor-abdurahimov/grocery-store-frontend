import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Paper } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { Alert } from "@material-ui/lab";
import fetchDefault from "../../clients";

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
  wrapper: {
    backgroundColor: "white",
    border: "1px solid #f5f5f5",
    padding: "30px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [preview, setPreview] = useState([]);
  const [error, setError] = useState(null);

  const fetchPreview = async () => {
    try {
      const response = await fetchDefault.get("");

      if (response.statusText === "ok") {
        setPreview(response.data);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPreview();
  }, []);

  return (
    <Grid container className={classes.root}>
      {error ? (
        <Alert severity="error">
          {error.message} please try to refresh the page.
        </Alert>
      ) : (
        <Container>
          <Carousel>
            <div>
              <img
                alt="sssssssss"
                src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626802/GROCERY/robert-bye-tG36rvCeqng-unsplash_rg0zlp.jpg"
              />{" "}
              <p className="legend">Buy now</p>
            </div>
            <div>
              <img
                alt="sssssssss"
                src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626806/GROCERY/denys-nevozhai-63Znf38gnXk-unsplash_rxknkt.jpg"
              />
              <p className="legend">Lorem, ipsum dolor.</p>
            </div>
            <div>
              <img
                alt="sssssssss"
                src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626810/GROCERY/clark-street-mercantile-P3pI6xzovu0-unsplash_v1lbxc.jpg"
              />{" "}
              <p className="legend">Lorem, ipsum dolor.</p>
            </div>
          </Carousel>

          <Grid item xs={12}>
            <Paper style={{ backgroundColor: "#f5f5f5", padding: "25px 0" }}>
              <Grid container justify="space-around" spacing={2}>
                <Grid item>
                  <div className={classes.wrapper}>
                    <div>Pickup or delivery</div>
                    <img
                      src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                      alt="ooo"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.wrapper}>
                    <div>Earn 3% cash back</div>
                    <img
                      src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                      alt="ooo"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.wrapper}>
                    <div>No order minimum shipping</div>
                    <img
                      src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                      alt="ooo"
                    />
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <Grid container>
              {preview.map((category) => (
                <Grid item>
                  <div className={classes.wrapper}>
                    <div>No order minimum shipping</div>
                    <img
                      src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
                      alt="ooo"
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </Grid>
  );
}
