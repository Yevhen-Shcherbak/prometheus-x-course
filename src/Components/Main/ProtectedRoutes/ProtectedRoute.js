import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  if (!window.localStorage.currentUser) {
    return <Navigate to="signin" replace />;
  } 
  return (
    <Outlet />
  )
}

export default ProtectedRoute;