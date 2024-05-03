import { Home } from "@pages/Home";
import { TheoreticalMachine } from "@pages/TheoreticalMachine";
import { Route, Routes } from "react-router-dom";

export const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theoretical-machine" element={<TheoreticalMachine />} />
    </Routes>
  );
};
