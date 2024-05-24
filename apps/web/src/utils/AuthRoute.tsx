import { getUser } from "@/features/user/userSlice";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const user = useSelector(getUser);

  console.log(user);

  return user?.id ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
