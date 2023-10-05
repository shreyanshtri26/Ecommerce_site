import { Add, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import { AppBar, Box, Toolbar, Typography,Button } from "@mui/material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;



const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
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

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const handle=(e,v)=>{
    if(v===1)
    {
      dispatch(removeItem(e))
    }
    dispatch(decreaseItemQuantity(e))
  }
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
          </Toolbar>
        </AppBar>
      </Box>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Info>
            {cart?.map((data) => (
              <Product>
                <ProductDetail>
                  <Image src={data.imageURI} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {data.productName}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {data.productId}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                  <Remove
                      onClick={() => handle(data.productId,data.quantity)}
                    />

                    <ProductAmount>{data.quantity}</ProductAmount>
                    <Add
                      onClick={() => dispatch(increaseItemQuantity(data.productId))}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>{data.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
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
            <Link to ="/Checkout">
            <ButtonBot>CHECKOUT NOW</ButtonBot>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Cart;
