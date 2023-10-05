import styled from "@emotion/styled";
import {
  Box,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Address } from "../services/user_services";
import { toast } from "react-toastify";
import { clearCart, getCartTotal } from "../features/cartSlice";


const StyledBody = styled(Box)`
  display: flex;
  padding: 1rem;
`;

const CheckoutDetails = styled(Box)`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const CheckoutDetailsWrapper = styled(Box)`
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  width: 80%;
`;

const CheckoutDetailsTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CheckoutDetailsInput = styled(TextField)`
  width: "100%";
`;
const ProductDetails = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const ButtonBot = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  
  const [data, setData] = useState({
    shipAdd: "",
    billAdd: "",
    quantity: totalQuantity,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", data);

    let payload = [];
    cart.map((product) => {
      payload.push({
        product: {
          productId: product.productId,
        },
        user: {
          id: 1,
        },
        quantity: data.quantity,
        billAdd: data.billAdd,
        shipAdd: data.shipAdd,
      });
    });
    Address(payload)
      .then((resp) => {
        console.log("payload", resp);
        console.log(resp);
        console.log("success");
        toast.success("Order Placed Successfully");
        navigate("/Success");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });

      clearCart()
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "green" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Link
              to="/Home"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Button color="inherit" dir="ltr">
                Home
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
      <StyledBody>
        <CheckoutDetails>
          <CheckoutDetailsWrapper>
            <CheckoutDetailsTitle>Shipping Address</CheckoutDetailsTitle>
            <TextField
              id="shipAdd"
              label="Shipping Address"
              type="text"
              onChange={(e) => handleChange(e, "shipAdd")}
              value={data.shipAdd}
              multiline
              maxRows={4}
              sx={{ width: "100%" }}
              required
            />
          </CheckoutDetailsWrapper>
          <CheckoutDetailsWrapper>
            <CheckoutDetailsTitle>Billing Address</CheckoutDetailsTitle>
            <TextField
              id="billAdd"
              label="Billing Address"
              type="text"
              onChange={(e) => handleChange(e, "billAdd")}
              value={data.billAdd}
              multiline
              maxRows={4}
              sx={{ width: "100%" }}
              required
            />
          </CheckoutDetailsWrapper>
        </CheckoutDetails>
        <ProductDetails>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Item</SummaryItemText>
              <SummaryItemPrice>{totalQuantity}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <ButtonBot onClick={handleSubmit}>Buy Now</ButtonBot>
          </Summary>
        </ProductDetails>
      </StyledBody>
    </>
  );
};

export default Checkout;
