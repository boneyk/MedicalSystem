import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./Auth";
import { NotFound } from "./pages_user/NotFound";
import { MainPage } from "./pages_user/MainPage"
import Header from "./components/Header";
import { Info } from "./pages_user/Info";
import { CreateAcc } from "./pages_manager/CreateAcc";
import { EditAcc } from "./pages_manager/EditAcc";
import { DelAcc } from "./pages_manager/DelAcc";

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
          <Route path="/manager/create" element={<CreateAcc />} />
          <Route path="/manager/edit" element={<EditAcc />} />
          <Route path="/manager/delete" element={<DelAcc />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
