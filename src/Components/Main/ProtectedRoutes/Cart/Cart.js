import { useState, useEffect, useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import CartContext from "../../../../Context/CartContext";
import CartEmpty from "./CartEmpty";

export default function Cart() {
  const {cartData, setCartData} = useContext(CartContext);

  const handlePurchase = () => {
    setCartData([]);
    localStorage.removeItem('cart');
  }
  if (cartData.length !=0) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <Card className="w-100 p-3">
          {cartData.map((book) => (
            <Row 
              key={book.id}
              className="p-2 border rounded m-1 bg-secondary"
            >
              <Col>{book.bookName}</Col>
              <Col>{book.amount}</Col>
            </Row>))}
            <Button 
              onClick= {()=> handlePurchase()}
              className= "w-50 d-block m-auto mt-3"
            >
              Purchase
            </Button>
          </Card>
      </Container>)
  } else {
    return (<CartEmpty />)
  }
}