import { useState, useEffect, useContext } from "react";
import { Button, Table, Container } from "react-bootstrap";

import CartContext from "../../../../Context/CartContext";
import CartEmpty from "./CartEmpty";
import bookNameShortener from "../../../../project-utils/bookNameShortener";


import svg from "./delete-book-icon.svg";
import Image from "react-bootstrap/Image"

export default function Cart() {
  const {cartData, setCartData} = useContext(CartContext);

  const handlePurchase = () => {
    setCartData([]);
    localStorage.removeItem('cart');
  }
  if (cartData.length !=0) {
    return (
      <Container 
        className= "p-0 p-sm-3 d-flex justify-content-center align-items-center h-100 p-1"
        
      >
      <div className="p-1 bg-white border border rounded-3" style= {{width: "55rem"}}>
        <Table 
          hover 
          responsive
          className="m-0 align-middle"
        >
          <thead className="align-middle">
            <tr style= {{height: "55px"}}>
              <th>Book name</th>
              <th>Q-ty</th>
              <th>Total, $</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((book) => (
              <tr key= {book.id}>
                <th style={{fontWeight: "unset"}}>{bookNameShortener(book.bookName)}</th>
                <th style={{minWidth: "3.5rem", fontWeight: "unset"}}>{book.amount}</th>
                <th style={{fontWeight: "unset"}}>Total price</th>
                <th 
                  className="text-end"
                  style={{fontWeight: "unset"}}
                >
                  <Button
                    variant= "outline-success"
                    size= "sm"
                    className="border-2"
                  >
                    <Image src= {svg}></Image>
                  </Button>
                </th>
              </tr>))}
            </tbody>
            <tfoot>
              <tr>
                <th style={{borderBottom: "unset"}}></th>
                <th style={{borderBottom: "unset"}}></th>
                <th style={{borderBottom: "unset"}}></th>
                <th className="text-end p-1 p-sm-2"
                  style={{borderBottom: "unset"}}
                >
                  <Button
                    variant= 'primary'
                    onClick= {()=> handlePurchase()}
                    size= "sm"
                  >
                    Purchase
                  </Button>
                </th>
              </tr>
            </tfoot>
        </Table>
      </div>
      </Container>)
  } else {
    return (<CartEmpty />)
  }
}