import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import Course from "./Course";
import Home from "./Home";

const Routing = () => {
  return (
    <HashRouter hashType='noslash'>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/home/course" element={<Course/>} />
      </Routes>
    </HashRouter>
  );
};

export default Routing;
