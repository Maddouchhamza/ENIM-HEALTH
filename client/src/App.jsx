import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Rendezvous from "./pages/Rendezvous";

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="dev-z6dv2cruhdh38gg6.us.auth0.com"
        clientId="1hi4h0cL8clszmKxqMJrUMzyMDxobcOU"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/rendezvous" element={<Rendezvous />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
