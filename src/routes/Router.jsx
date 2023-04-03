/** import library */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** import page */
import Home from '../page/visit/Home';
import Team from '../page/visit/Team';
import Project from '../page/visit/Project';
import SignIn from '../page/admin/SignIn';
import SignInfo from '../page/admin/SignInfo';
import SignUp from '../page/admin/SignUp';

/** Route Area */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/up" element={<SignUp />} />
        <Route path="/info" element={<SignInfo />} />
        <Route path="/in" element={<SignIn />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
