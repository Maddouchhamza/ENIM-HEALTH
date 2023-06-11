import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/basicComponent/Navbar";
import Footer from "../components/basicComponent/Footer";

function Medicament() {
  const [medicament, setMedicament] = useState([]);

  useEffect(() => {
    async function fetchMedicament() {
      try {
        const response = await axios.get("http://localhost:3001/medicament");
        const medicamentData = response.data;
        setMedicament(medicamentData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des médicaments :",
          error
        );
      }
    }
    fetchMedicament();
  }, []);

  const handleCommande = async (medicamentId) => {
    try {
      const response = await axios.post("http://localhost:3001/commande", {
        medicamentId,
      });
      console.log("Commande effectuée avec succès", response.data);
    } catch (error) {
      console.error("Erreur lors de la commande :", error);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center text-xs">
          <input
            type="text"
            placeholder="Recherche"
            className="bg-blue-100 text-white px-4 py-2 rounded-2xl"
          />
        </div>
        <div>
          {medicament.map(({ idMedicament, nom, description }) => (
            <div
              key={idMedicament}
              className=" w-48 h-44 shadow-2xl rounded-2xl flex flex-col justify-center items-center"
            >
              <h1 className="pb-8">{nom}</h1>
              <h4 className="pb-8">{description}</h4>
              <button
                className="bg-blue-600 rounded-3xl text-white h-10 w-28"
                onClick={() => handleCommande(idMedicament)}
              >
                Commander
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Medicament;
