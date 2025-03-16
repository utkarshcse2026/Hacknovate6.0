import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import AboutSectionMain from "./components/AboutSectionMain.jsx";
import Mentor from "./components/Mentor.jsx";
import Events from "./components/Events.jsx";
import Team from "./components/Team.jsx";
import NewspaperHeader from "./components/NewspaperHeader.jsx";
import Spnosor from "./components/Spnosor.jsx";
import CodeOfConduct from "./components/CodeOfConduct.jsx";
import Faq from "./components/Faq12.jsx";
// import CursorEffect from "./components/magicui/CursorEffect.jsx";

function App() {
  return (
    <Router>
      <>
      {/* <CursorEffect /> */}
     
        <NewspaperHeader />
        <Routes>
          <Route path="/" element={<AboutSectionMain />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsor" element={<Spnosor />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Chatbot />
        <BackgroundMusic />
        <Footer />
      </>
    </Router>
  );
}

export default App;
