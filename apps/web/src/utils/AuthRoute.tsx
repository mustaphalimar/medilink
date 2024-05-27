import { getUser } from "@/features/user/userSlice";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const userState = useSelector(getUser);

  console.log(userState);

  return userState?.user?.id ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
