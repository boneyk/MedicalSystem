import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { NotFound } from "./pages/NotFound";
import { MainPage } from "./pages/MainPage"
import Header from "./components/Header";
import { Info } from "./pages/Info";


function App() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/patients" element={<MainPage />} />
          <Route path="/patient/info" element={<Info />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
