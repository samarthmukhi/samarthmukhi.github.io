import { Routes, Route } from "react-router-dom";
import Document from "./pages/Document";

// The whole site is one document; every path renders it and old page
// routes scroll to their matching section.
function App() {
  return (
    <Routes>
      <Route path="*" element={<Document />} />
    </Routes>
  );
}

export default App;
