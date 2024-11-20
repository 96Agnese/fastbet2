// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./screens/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
