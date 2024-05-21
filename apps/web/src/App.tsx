import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./Layout/privateLayout";
import NotFoundPage from "./screens/notFoundPage";
import OverviewScreen from "./screens/OverviewScreen";
import PatientsScreen from "./screens/patients/PatientsScreen";
import AppointementsScreen from "./screens/appointements";
import AdminsScreen from "./screens/admins/AdminsScreen";
import Login from "./screens/Login";
import RequestsScreen from "./screens/requests/RequestsScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path={"/login"} />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/" element={<OverviewScreen />} />
          <Route path="patients" element={<PatientsScreen />} />
          <Route path="appointements" element={<AppointementsScreen />} />
          <Route path="admins" element={<AdminsScreen />} />
          <Route path="requests" element={<RequestsScreen />} />
          <Route path="myprofile" element={<ProfileScreen />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
