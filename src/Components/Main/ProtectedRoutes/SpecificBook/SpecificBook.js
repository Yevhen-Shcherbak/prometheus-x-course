import { Suspense, useEffect, useState} from "react";

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../Books/Loading";


export default function SpecificBook({bookData}) {


  const [itemsNumber, setItemsNumber] = useState(1);
  const [minusButtonDisabled, setMinusButtonDisabled] = useState(false);
  const [plusButtonDisabled, setPlusButtonDisabled] = useState(false);

  useEffect(()=> {
    minusButtonStateManager();
    plusButtonStateManager();
  }, [itemsNumber]);

  function minusButtonStateManager() {
    if(itemsNumber < 2) {
      return setMinusButtonDisabled(true)
    } else {
      return setMinusButtonDisabled(false)
    }
  };

  function plusButtonStateManager() {
    if(itemsNumber > 41) {
      return setPlusButtonDisabled(true)
    } else {
      return setPlusButtonDisabled(false)
    }
  };

  const inputValueValidator = (value) => {
    if (value < 1 || !Number.isInteger(value)) {
      setItemsNumber(1);
    } else if (value > 42 || !Number.isInteger(value)) {
      setItemsNumber(42);
    } else setItemsNumber(value);
  }

  return (
    <Suspense fallback= {<Loading />}>
      <Container  className= "d-flex flex-wrap justify-content-evenly gap-5 p-2 p-sm-3 "
        expand= 'sm'>
            <Card className="p-2 p-sm-3 m-0" style={{ maxWidth: '40rem'}} >
              <Container className= "d-flex flex-column flex-lg-row p-0 border-bottom border-secondary">
                <div className="d-flex align-items-center">
                <Card.Img 
                  src={bookData.image || require('../../../../assets/imageNotFound.png')}
                  style={{ maxWidth: '18rem', maxHeight: '24rem' }}
                  className="object-fit-contain p-1 p-sm-3 m-auto"
                />
                </div>
                <Card.Body>
                  <Card.Title className="mb-3">
                    {bookData.title}
                  </Card.Title>
                  <Card.Text className="mb-2">
                    <span className="fw-semibold">
                      Author: 
                    </span> {bookData.author}
                  </Card.Text>
                  <Card.Text className="mb-2">
                    <span className="fw-semibold">
                      Book level: 
                    </span> {bookData.level}
                  </Card.Text>
                  <Card.Text className="mb-2">
                    <span className="fw-semibold">
                      Book tags: 
                    </span> {bookData.tags.join(', ')}
                  </Card.Text>
                </Card.Body>
              </Container>
              <Container>
                <Card.Text className="pt-3 pb-2">
                    {bookData.description}
                </Card.Text>
              </Container>            
            </Card>
            <Card 
              className="align-self-start p-2 p-sm-3 m-0 mb-4 gap-2"
              style={{ minWidth: '20rem'}}
            >
              <Row>
                <Col>
                  <Card.Title className="fs-5 m-0">Price, $</Card.Title>
                </Col>
                <Col>
                  <Card.Text className="m-0 text-end">{bookData.price}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Title className="fs-5 m-0 h-100 align-middle">Count</Card.Title>
                </Col>
                <Col className="d-flex justify-content-end">
                  <ButtonGroup aria-label="Basic example" size="sm">
                    <Button 
                      variant="primary" 
                      style={{ width: '2rem'}}
                      disabled={ minusButtonDisabled }
                      onClick={()=> setItemsNumber(itemsNumber - 1)}
                    >
                      -
                    </Button>
                    <input
                      className="books-input-number bg-secondary fs-5 m-0 text-center border-0"
                      style={{ width: '3rem'}}
                      type="number"
                      value={ itemsNumber }
                      onChange={(e)=> inputValueValidator(+e.target.value) }
                    />
                    <Button 
                      variant="primary" 
                      style={{ width: '2rem'}}
                      disabled={ plusButtonDisabled }
                      onClick={()=> setItemsNumber(itemsNumber + 1)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Title className="fs-5 m-0">Total price, $</Card.Title>
                </Col>
                <Col>
                  <Card.Text className="m-0 text-end">{(bookData.price * itemsNumber).toFixed(2)}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                <Button variant= 'primary' size="sm" className="w-50">Add to Cart</Button>
                </Col>
              </Row>
            </Card>          
          </Container>
    </Suspense>
  )
}

