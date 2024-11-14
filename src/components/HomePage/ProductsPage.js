import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import PannaLabsVideo from "../../assets/Images/PannaLabsVideo.mp4";
import PranicLogo from "../../assets/Images/pranic-logo.svg";
import AuticonLogo from "../../assets/Images/AUTICON-logo.svg";
import NeuroTechLogo from "../../assets/Images/neurotech-international-logo.svg";
import MindLogo from "../../assets/Images/mind_research_institute_logo.png";
import UnicusLogo from "../../assets/Images/unicus_logo.svg";
import ThinkTacIcon from "../../assets/Images/thinktac_logo.png";
import NeuroLogo from "../../assets/Images/neuro_logo.svg";

const ProductsPage = () => {
  const images = [
    { src: PranicLogo, alt: "PranicLogo" },
    { src: AuticonLogo, alt: "AuticonLogo" },
    { src: NeuroTechLogo, alt: "NeuroTechLogo" },
    { src: MindLogo, alt: "MindLogo" },
    { src: UnicusLogo, alt: "UnicusLogo" },
    { src: ThinkTacIcon, alt: "ThinkTacIcon" },
    { src: NeuroLogo, alt: "NeuroLogo" },
  ];

  return (
    <div
      style={{
        background: "#F6F8F9",
        padding: "0 50px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        <video width="100%" height="auto" autoPlay loop muted controls={false}>
          <source src={PannaLabsVideo} type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          marginTop: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: { md: 2 },
          }}
        >
          <Typography variant="h6">Trusted by 100+</Typography>
          <Typography variant="h6">organisations</Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "2px" },
            height: { xs: "2px", md: "100px" },
            backgroundColor: "#ccc",
            margin: { xs: 2, md: 0 },
          }}
        />

        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", flexWrap: "wrap", mb: 3 }}
        >
          {images.map((image, index) => (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  alignSelf: "center",
                }}
                src={image.src}
                alt={image.alt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsPage;
