import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AboutPannaLab = () => {
  const textStyle = {
    font: {
      xs: "normal 600 12px/normal OpenSans",
      sm: "normal 600 16px/normal OpenSans",
      md: "normal 600 24px/normal OpenSans",
      lg: "normal 600 35px/normal OpenSans",
    },
    color: "#9FA5A7",
    letterSpacing: "0.088px",
  };
  const subTextStyle = {
    color: "#252525",
    font: {
      xs: "normal 600 12px/normal OpenSans",
      sm: "normal 600 16px/normal OpenSans",
      md: "normal 600 24px/normal OpenSans",
      lg: "normal 600 34px/normal OpenSans",
    },
    letterSpacing: "0.085px",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Button
          sx={{
            border: "1px solid #1B3139",
            color: "#000000",
            borderRadius: "20px",
            width: { xs: "150px", sm: "200px" },
            height: { xs: "40px", sm: "50px" },
            marginTop: { xs: "30px", md: "60px", lg: "80px" },
            textTransform: "none",
          }}
        >
          How it works
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "32px",
          marginBottom: "8px",
        }}
      >
        <Typography sx={textStyle}>
          Pannalabs, your expert solution provider in Education and Neurodiverse{" "}
        </Typography>
        <Typography sx={textStyle}>
          and your intelligent 24X7 chatbot support provider by harnessing
        </Typography>
        <Typography sx={textStyle}>advanced AI technology</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { xs: "50px", md: "80px", lg: "120px" },
        }}
      >
        <Typography sx={subTextStyle}>Find what you need,</Typography>
        <Typography sx={subTextStyle}>when you need it</Typography>
      </Box>
    </Box>
  );
};

export default AboutPannaLab;
