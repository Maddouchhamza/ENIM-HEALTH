import Menu from "../components/landingComponents/Menu";
import Apropos from "../components/landingComponents/Apropos";
import Fonctionnalites from "../components/landingComponents/Fonctionnalites";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Menu />
      <div id="apropos">
        <Apropos />
      </div>
      <div id="fonctionnalites">
        <Fonctionnalites />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
