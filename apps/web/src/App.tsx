import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./Layout/privateLayout";
import NotFoundPage from "./screens/notFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="patients" element={<>This is patients</>} />
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
