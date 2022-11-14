import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import SideFIlters from "./components/filters/SideFIlters";
import DisplayInfo from "./components/maincomponents/DisplayInfo";
import PriceForm from "./components/maincomponents/PriceForm";
import Kp1 from "./components/maincomponents/Kp1";
import Kp2 from "./components/maincomponents/Kp2";
import Kp3 from "./components/maincomponents/Kp3";
import Kp4 from "./components/maincomponents/Kp4";
import "./App.css";
import "./style/mainComp.css";
import "./index.css";
import { FaSearch, FaBars } from "react-icons/fa";
 import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import DemandPage from "./pages/Demand";
import DemandPost from "./components/Demand/DemandPost";
import DemandEdit from "./components/Demand/DemandEdit";

function App() {
  return (
    <>
      {" "}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demand" element={<DemandPage />} />
          <Route path="/demandpost" element={<DemandPost />} />
          <Route path="/demandedit" element={<DemandEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
