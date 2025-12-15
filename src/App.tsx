import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.tsx";
import { OchronaWlasnosci } from "./components/OchronaWlasnosci/OchronaWlasnosci.tsx";
import { Ekonomia } from "./components/Ekonomia1/Ekonomia1.tsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ekonomia" element={<Ekonomia />} />
        <Route path="/ochronaWlasnosci" element={<OchronaWlasnosci />} />
      </Routes>
    </>
  );
};
