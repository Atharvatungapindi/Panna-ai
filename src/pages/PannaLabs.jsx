import React from "react";
import AboutPannaLab from "../components/PannaLabs/AboutPannaLab";
import EduTechAi from "../components/PannaLabs/EduTechAi";
import Chatbot from "../components/PannaLabs/Chatbot";
import PrachContent from "../components/PannaLabs/PrachContent";
import ChoosePannaLab from "../components/PannaLabs/ChoosePannaLab";

const PannaLabs = () => {
  return (
    <div style={{ background: "#F6F8F9", padding: "0 50px" }}>
      <AboutPannaLab />
      <PrachContent />
      <EduTechAi />
      <Chatbot />
      <ChoosePannaLab />
    </div>
  );
};

export default PannaLabs;
