import { useContext } from "react";
import { AuthContexts } from "../helpers/AuthContexts";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { setAuthState } = useContext(AuthContexts);
  const navigateTo = useNavigate();

  return (
    <button
      onClick={() => {
        localStorage.removeItem("accessToken");
        setAuthState(false);
        navigateTo("/");
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
