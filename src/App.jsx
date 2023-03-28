/** import library */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** import page */
import Home from "./page/visit/Home";


/** Route Area */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
