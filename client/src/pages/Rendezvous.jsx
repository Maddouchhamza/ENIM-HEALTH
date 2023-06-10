import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";

function Rendezvous() {
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
