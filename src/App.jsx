import React, { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Address from "./pages/Address";
import Verify from "./pages/Verify";

import Fetch from "./utils/FetchUser";

function App() {
  const user = Fetch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/login" element={<Login setOuterEmail={setEmail} />} />
      <Route exact path="/address" element={<Address />} />
      <Route exact path="/verify" element={<Verify email={email} />} />
    </Routes>
  );
}

export default App;
