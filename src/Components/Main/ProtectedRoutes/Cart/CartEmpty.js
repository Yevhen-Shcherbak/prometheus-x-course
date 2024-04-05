import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
		<Container className="d-flex justify-content-center align-items-center h-100">
			<Card className= "p-3 text-center w-50 ">
			<Card.Text>
				Cart Empty
			</Card.Text>
			<Button onClick={()=> backHome()} className="align-self-center">
				Back to shopping
			</Button>
			</Card>
		</Container>
	)
}