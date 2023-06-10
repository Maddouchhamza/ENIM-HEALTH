import Navbar from "../components/basicComponent/Navbar";
import Footer from "../components/basicComponent/Footer";

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
