import { Routes, Route } from "react-router-dom";
import PasteCode from "./pages/PasteCode";
import Diagnosis from "./pages/Diagnosis";
import Solution from "./pages/Solution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PasteCode />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
      <Route path="/solution" element={<Solution />} />
    </Routes>
  );
}

export default App;