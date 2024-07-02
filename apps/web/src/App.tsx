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
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthRoute from "./utils/AuthRoute";
import TodaysPatientScreen from "./screens/todaysPatient/TodaysPatientScreen";
import { Toaster } from "./components/ui/sonner";
import ConsulationPage from "./screens/consulation/ConsultationPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Login />} path={"/login"} />
            <Route element={<AuthRoute />}>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="/" element={<OverviewScreen />} />
                <Route path="patients" element={<PatientsScreen />} />
                <Route path="appointments" element={<AppointementsScreen />} />
                <Route
                  path="today-appointments"
                  element={<TodaysPatientScreen />}
                />
                <Route
                  path="consultation/:patientId"
                  element={<ConsulationPage />}
                />
                <Route path="admins" element={<AdminsScreen />} />
                <Route path="requests" element={<RequestsScreen />} />
                <Route path="myprofile" element={<ProfileScreen />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
      <Toaster />
    </div>
  );
}

export default App;
