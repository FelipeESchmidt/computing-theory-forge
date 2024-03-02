import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { TheoreticalMachine } from "../pages/TheoreticalMachine";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theoretical-machine" element={<TheoreticalMachine />} />
    </Routes>
  </BrowserRouter>
);
