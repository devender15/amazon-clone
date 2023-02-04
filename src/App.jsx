import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Address from "./pages/Address";

import Fetch from "./utils/FetchUser";

function App() {
  const user = Fetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/address" element={<Address />} />
    </Routes>
  );
}

export default App;
