import { useState, useEffect, useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CartContext from "../../../../Context/CartContext";

export default function Cart() {
  const {cartData, setCartData} = useContext(CartContext);

  const handlePurchase = () => {
    setCartData([]);
    localStorage.removeItem('cart');
  }

  return (
    <Container size= 'sm'>
      {cartData
      ? cartData.map((book) => (
        <Row key={book.id}>
          <Col>{book.bookName}</Col>
          <Col>{book.amount}</Col>
        </Row>))
      :<div>Cart empty</div>}
      <Button onClick={ handlePurchase }>Purchase</Button>
    </Container>
  )
}