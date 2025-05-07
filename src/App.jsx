import "./App.css";
import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
      </Route>
      </Routes>
    </HashRouter> 
  );

}

export default App;
