import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { CircularProgress } from "@mui/material";

export default function AuthProtectedRoute({ children }) {
  const { isAuthenticated, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return <div style={{marginLeft:'auto', marginRight:'auto'}}><CircularProgress /></div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}