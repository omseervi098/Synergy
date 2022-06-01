import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Calender from "./pages/Calender/Calender";
import Stats from "./pages/Stats/Stats";
import Request from "./pages/Request/Request";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile"
import {  userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            
            </Route>
            <Route path="calender" element={<Calender/>}/>
            
            <Route path="stats" element={<Stats/>}/>
            <Route path="request" element={<Request/>}/>
            
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
