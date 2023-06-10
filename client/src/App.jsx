import Home from "./pages/Home";
import Profile from "./components/Profile";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Rendezvous from "./pages/Rendezvous";
import Forum from "./pages/Forum";

import Auth from "./pages/Auth";

import { AuthContexts } from "./helpers/AuthContexts";

function App() {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  }, []);
  return (
    <AuthContexts.Provider value={{ authState, setAuthState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/rendezvous" element={<Rendezvous />} />
          <Route path="/dashboard/forum" element={<Forum />} />

          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthContexts.Provider>
  );
}

export default App;
