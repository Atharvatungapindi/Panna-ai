import { Box } from "@mui/material";
import Assistant from "../components/AboutPannaLabs/Assistant";
import Contact from "../components/AboutPannaLabs/Contact";
import MeasurableResults from "../components/AboutPannaLabs/MeasurableResults";

const PannaLabsAssistance = () => {
  return (
    <Box
      sx={{ background: "#F6F8F9", padding: { xs: "0 20px", md: "0 50px" } }}
    >
      <Assistant />
      <Contact />
      <MeasurableResults />
    </Box>
  );
};

export default PannaLabsAssistance;
