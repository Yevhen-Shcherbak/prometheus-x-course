import { lazy } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import svg from "./cart.svg";



export default function CartEmpty() {

	const navigate = useNavigate();

	function backHome() {
		if (window.localStorage.currentUser) {
		navigate('/books', { replace: true });
		} else {
		navigate('/signin', { replace: true })
		}
	}

	return (
			<Container fluid className="d-flex justify-content-center align-items-center h-100">
				<Card className= "p-5 text-center rounded-5">
						<Card.Img
						style= {{ minWidth: "10rem" }}
						src= { svg }/>
					<Button 
						onClick={()=> backHome()} 
						className="align-self-center border-2 fs-4"
						variant= "outline-primary"
					>
						Back to shopping
					</Button>
				</Card>
			</Container>
	)
}