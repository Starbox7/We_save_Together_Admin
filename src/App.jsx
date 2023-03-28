/** import library */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** import page */
import Home from './page/visit/Home';
import Team from './page/visit/Team';
import Project from './page/visit/Project';

/** Route Area */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
