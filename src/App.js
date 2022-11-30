import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ConvertorPage from "./pages/ConvertorPage/ConvertorPage";
import Error404Page from "./pages/Error404Page";
import addAppBarToComponent from "./pages/templates/addAppBarToComponent";
const App = () => {
  const AppBarConvertor = addAppBarToComponent(ConvertorPage);
  return (
    <Routes>
      <Route path="/" element={<AppBarConvertor />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default App;
