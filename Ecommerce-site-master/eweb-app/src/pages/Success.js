import React from 'react'
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

 const Success = () => {
  return (
    <>
    <Link to="/Home">
    <Button> Continue Shopping</Button>
    </Link>
    </>
  )
}
export default Success;
