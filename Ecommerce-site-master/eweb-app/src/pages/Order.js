import React,{useEffect, useState} from 'react'
import { BASE_URL } from '../services/helper';
import {myAxios} from "../services/helper";
import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography,Button } from "@mui/material";


const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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



const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;



const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

;
export default function Order () {
    
    useEffect(()=>{
    myAxios.get(`${BASE_URL}/api/orders`).then(
        (response) => {
          console.log(response.data);
          setProduct(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }, []);
    const[product,setProduct]=useState([]);
    
    return (
    <>
          <Wrapper>
        <Title>YOUR ORDERS</Title>
        <Bottom>
          <Info>
            {product?.map((item) => (
              <Product>
                <ProductDetail>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.product.productName}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.product.productId}
                    </ProductId>
                    <div>
                        <b>Shiping Address:</b>{item.shipAdd}
                    </div>
                    <div>
                        <b>Bill Address:</b>{item.billAdd}
                    </div>
                  </Details>
                </ProductDetail>
              </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
    </>
  )
}
