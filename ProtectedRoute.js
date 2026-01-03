import { useContext } from "react";
import {Navigate } from "react-route-dom";
import {AuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthConntext);
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Naviagte to="/" />;
  return children;
};
export default ProtectedRoute;
