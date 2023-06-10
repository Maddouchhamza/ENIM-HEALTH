import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

function ButtonAuth() {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: "http://localhost:5173/accueil", // Remplacez par l'URL de la page de destination après la connexion
    });
  };
  return <button onClick={handleLogin}>S'authentifier</button>;
}

export default ButtonAuth;
