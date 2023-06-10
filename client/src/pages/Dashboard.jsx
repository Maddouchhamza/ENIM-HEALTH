import Navbar from "../components/basicComponent/Navbar";
import Footer from "../components/basicComponent/Footer";
import { AuthContexts } from "../helpers/AuthContexts";
import { useContext } from "react";

function Dashboard() {
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
        <div className="flex items-center h-screen">Dashboard</div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
