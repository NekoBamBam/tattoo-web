import {Route, Routes } from "react-router";
import Home from "./components/Home";
import { BrowserRouter } from "react-router";
import Layaout from "./layaouts/Layaout";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layaout/>}>
          <Route index element={<Home />} />
      </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
