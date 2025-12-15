import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.tsx";
import { ekonomia } from "./components/ekonomia/ekonomia.tsx";
import { OchronaWlasnosci } from "./components/OchronaWlasnosci/OchronaWlasnosci.tsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ekonomia" element={<ekonomia />} />
        <Route path="/ochronaWlasnosci" element={<OchronaWlasnosci />} />
      </Routes>
    </>
  );
};
