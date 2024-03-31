import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import { Container, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BooksContext from "../../../../Context/BooksContext";

export default function Books() {

  const books = useContext(BooksContext);
  
  const [searchFilteredBooks, setSearchFilteredBooks] = useState(books);
  const [priceFilteredBooks, setPriceFilteredBooks] = useState(books);
  const [resultBookList, setResultBookList] = useState(books);
  console.log(books)
  useEffect(()=> {
    setSearchFilteredBooks(books);
    setPriceFilteredBooks(books);
    setResultBookList(books);
    console.log(books)
  }, [books]);

  useEffect(()=>{
    const result = priceFilteredBooks.filter(value => searchFilteredBooks.includes(value));
    setResultBookList(result);
  },[searchFilteredBooks, priceFilteredBooks]);

  const priceBookFilter= (e)=> {
    const chosenDropdownValue = e.target.value;

    if (chosenDropdownValue === 'Up to $15') {
      const filtered = books.filter(book => book.price < 15);
      setPriceFilteredBooks(filtered);
    } else if (chosenDropdownValue === '$15 - $30') {
      const filtered = books.filter(book => (book.price >= 15 && book.price < 30));
      setPriceFilteredBooks(filtered);
    } else if (chosenDropdownValue === 'Over $30') {
      const filtered = books.filter(book => (book.price >= 30));
      setPriceFilteredBooks(filtered);
    } else {
      const filtered = books;
      setPriceFilteredBooks(filtered);
    }

  }

  const searchBookFilter= (e)=> {
    const searchFieldValue = e.target.value.toLowerCase();
    const filtered = (books).filter(book => book.title.toLowerCase().includes(searchFieldValue));
     
    filtered.length !== 0
    ? setSearchFilteredBooks(filtered)
    : setSearchFilteredBooks([])
  }

  const bookNameShortener = (string) => {
    if (string.length >= 24) {
      let shortenedString = string.substring(0, 24);
      return shortenedString += '...'
    }
    return string;
  };

  return (
    <>
      <Form className="pt-2 pt-sm-3 pb-2 pb-sm-3 d-flex justify-content-center flex-wrap w-50 m-auto gap-3">
        <Row>
          <Col className="pb-2 pb-lg-0">
            <Form.Control
              type="text"
              placeholder="Type to search"
              className=" mr-sm-2"
              onChange={searchBookFilter}
              style={{minWidth: '250px'}}
            />
          </Col>
          <Col>
            <Form.Select 
              aria-label="Default select example" 
              onChange={priceBookFilter}
              style={{minWidth: '120px'}}
            >
              <option value="Any price">Any price</option>
              <option value="Up to $15">{'Up to $15'}</option>
              <option value="$15 - $30">{'$15 - $30'}</option>
              <option value="Over $30">{'Over $30'}</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Container className="d-flex flex-wrap justify-content-center gap-2 gap-sm-4 p-2 p-sm-3 border-top border-secondary border-2" fluid>
        {resultBookList.length !== 0 ? resultBookList.map((book) => (
          <Card
            className="m-0"
            style={{ width: '18rem' }}
            key={book.id}
          >
            <Nav.Link
              as={NavLink}
              to={`${book.id}`}
              className='d-block p-1 p-sm-0 mt-3'
            >
              <Container
                style={{ maxWidth: '15.5rem', height: '23rem' }}
                className="g-0 d-flex align-items-center"
              >
                <Card.Img
                  variant="top"
                  src={book.image || require('../../../../assets/imageNotFound.png')}
                  alt="BookImg"
                  className="object-fit-fill border border-2 rounded"
                />
              </Container>
            </Nav.Link>
            <Card.Body>
              <Card.Title className="border-top">
                {bookNameShortener(book.title)}
              </Card.Title>
              <Card.Text
                style={{ height: '3.2rem' }}
                className="mb-1 border-bottom">
                {book.author}
              </Card.Text>
              <Container className="g-0 d-flex justify-content-between align-items-center">
                <Card.Text className="h4">
                  {'$' + book.price}
                </Card.Text>
                <Nav.Link
                  as={NavLink}
                  to={`${book.id}`}
                  className='d-block p-0 mt-3 d-flex'
                >
                  <Button>
                    View
                  </Button>
                </Nav.Link>
              </Container>
            </Card.Body>
          </Card>
          )
        )
        :<div>No books found</div>}
      </Container>
    </>
  );
}
