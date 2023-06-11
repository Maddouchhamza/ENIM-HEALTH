import Navbar from "../components/basicComponent/Navbar";
import Footer from "../components/basicComponent/Footer";
import { useContext } from "react";
import { AuthContexts } from "../helpers/AuthContexts";

function Rendezvous() {
  const { authState } = useContext(AuthContexts);
  if (!authState) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <Navbar />
        <div className="flex items-center h-screen">RDV</div>
      </div>
      <Footer />
    </>
  );
}

export default Rendezvous;
