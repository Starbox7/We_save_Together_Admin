/** librarys */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
import IntroProject from "./pages/IntroProject";
import IntroTeam from "./pages/IntroTeam";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/introproject" element={<IntroProject />} />
        <Route path="/introteam" element={<IntroTeam />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
