import { Navigate } from "react-router-dom";

export default function Redirect () {

  if (!localStorage.currentUser) {
    return <Navigate to="signin" replace />;
  }

  return(
    <Navigate to="books" replace />
  )
}