import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

export default function NotFound() {
  const navigate = useNavigate();

  function backHome() {
    if (window.localStorage.currentUser) {
      navigate('/books', { replace: true });
    } else {
      navigate('/signin', { replace: true })
    }
  }

  return (
  <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column gap-2 text-center">
    <div className="h3 p-3">
        Oops, something went wrong. <span className="text-danger">404 error</span>
    </div>
    <Button 
      variant="outline-success border-3" 
      size="lg"
      onClick= {() => {backHome()}}
    >
        <span className="h4">
          Back home?
        </span>
    </Button>
  </div>
  )
}