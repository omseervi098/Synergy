import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Calender from "./pages/Calender/Calender";
import Stats from "./pages/Stats/Stats";
import Request from "./pages/Request/Request";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Signup from "./pages/Signup/signup";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const user = localStorage.getItem("token");
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <>
            { <Route path="/" exact element={<Home />} />}

            {<Route path="/calender" exact element={<Calender />} />}
            { <Route path="/stats" exact element={<Stats />} />}
            {<Route path="/request" exact element={<Request />} />}
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            { <Route path="/staff">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>}

             <Route path="/profile" element={<Profile />} />
            
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/calender" element={<Navigate replace to="/login" />} />
            <Route path="/stats" element={<Navigate replace to="/login" />} />
            <Route path="/request" element={<Navigate replace to="/login" />} />
      
            <Route path="/staff">
              <Route index element={<Navigate replace to="/login" />} />
              <Route path=":userId"  element={<Navigate replace to="/login" />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </>
          <Route path="/profile" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
