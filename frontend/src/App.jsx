import { useState } from "react";

import "./App.css";
import { HomeIcon } from "lucide-react";
import HomePage from "./component/Home";
import PawCursor from "./component/PawCursor";
import CreatePawAdhar from "./pages/CreatePawAdhar";
import PawAdharResult from "./pages/PawAdharResult";
import PetProfile from "./pages/PetProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PawCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/create" element={<CreatePawAdhar />} />

          <Route path="/result" element={<PawAdharResult />} />

          <Route path="/pet/:pawAdharId" element={<PetProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
