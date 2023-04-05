/** import library */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** import page */
import Home from '../page/visit/Home';
import Team from '../page/visit/Team';
import Project from '../page/visit/Project';
import SignIn from '../page/admin/SignIn';
import SignInfo from '../page/admin/SignInfo';
import SignUp from '../page/admin/SignUp';
import Console from '../page/admin/Console'
/** */
import authStore from '../store/authStore';
import { useEffect } from 'react';
import { useState } from 'react';

/** Route Area */
function Router() {
  const signState = authStore((state) => state.signState);
  const [state, setState] = useState(false);
  useEffect(() => {
    if (!signState) {

    } else {
      setState(true)
    }
  }, [signState])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/console' element={state ? <Console /> : <SignIn />} />
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
