// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./screens/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Sport from "./screens/Sport/Sport";
import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Funzione per determinare se lo schermo è mobile
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 1200); // Impostiamo una larghezza per il cambio, puoi usare 768 per mobile
  };

  // Usa useEffect per eseguire il controllo al primo render e quando la finestra cambia dimensione
  useEffect(() => {
    // Esegui il controllo all'inizio
    checkMobileView();

    // Aggiungi un event listener per monitorare il resize della finestra
    window.addEventListener("resize", checkMobileView);

    // Cleanup: rimuovi il listener quando il componente è smontato
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  return (
    <Router>
      <div className="app-container">
        {/* Mostra l'header desktop se non è mobile */}
        {isMobile ? <HeaderMobile /> : <Header />}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items-header/sport" element={<Sport />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* <LayoutPage>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items-header/sport" element={<Sport />} />
        </Routes>
      </LayoutPage> */}
    </Router>
  );
}

export default App;
