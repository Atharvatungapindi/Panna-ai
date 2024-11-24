import React from "react";
import AboutPannaLab from "../components/PannaLabs/AboutPannaLab";
import EduTechAi from "../components/PannaLabs/EduTechAi";
import Chatbot from "../components/PannaLabs/Chatbot";
import PrachContent from "../components/PannaLabs/PrachContent";
import ChoosePannaLab from "../components/PannaLabs/ChoosePannaLab";
import { Box } from "@mui/material";

const PannaLabs = () => {
  return (
    <Box
      sx={{ background: "#F6F8F9", padding: { xs: "0 20px", md: "0 50px" } }}
    >
      <AboutPannaLab />
      <PrachContent />
      <EduTechAi />
      <Chatbot />
      <ChoosePannaLab />
    </Box>
  );
};

export default PannaLabs;
