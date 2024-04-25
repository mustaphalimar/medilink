import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./Layout/privateLayout";
import NotFoundPage from "./screens/notFoundPage";
import OverviewScreen from "./screens/OverviewScreen";
import PatientsScreen from "./screens/patients/PatientsScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/" element={<OverviewScreen />} />
          <Route path="patients" element={<PatientsScreen />} />
          <Route
            path="appointements"
            element={<>This is appointements page</>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
