import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ isAuthenticated, children }) => {
  // Simple check for authentication
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
