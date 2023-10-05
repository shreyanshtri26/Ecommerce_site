import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fillProducts } from "../features/cartSlice";

import { myAxios } from "../services/helper";
export default function Home() {
  const items = useSelector((state) => state.allCart.items);
  // const prodata = useSelector((state) => state.allCart.addProduct);/

  const dispatch = useDispatch();

  useEffect(() => {
    myAxios.get(`/api/products`).then(
      (response) => {
        console.log(response.data);
        dispatch(fillProducts(response.data));
      },
      (error) => {
        console.log(error);
      }
    );
  }, [dispatch]);
  return (
    <>
      <Box sx={{ paddingTop: "6rem" }}>
        <AppBar>
          <Toolbar
            style={{ backgroundColor: "green" }}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Link
              to="/Cart"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button color="inherit" dir="ltr">
                Cart
              </Button>
            </Link>
            <Link
              to="/Order"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button color="inherit" dir="ltr">
                Orders
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={item.productId}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.imageURI}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDescription}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Box>{item.price}</Box>
                  <Button
                    size="medium"
                    variant="outlined"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
