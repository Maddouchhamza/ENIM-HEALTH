import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function Accueil() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <div className="flex flex-col justify-between items-center">
          <Navbar />
          <div className="flex items-center h-screen">
            <Dashboard />
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default Accueil;
