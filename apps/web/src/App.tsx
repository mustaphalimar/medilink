import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./Layout/privateLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="about" element={<>This is about</>} />
          <Route path="contact" element={<>This is contact</>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
