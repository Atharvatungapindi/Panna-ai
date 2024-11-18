import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import LaptopImg from "../../assets/Images/LaptopImg.png";

const ChoosePannaLab = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          background: "#FBE2F0",
          padding: { xs: "20px 30px 20px 30px", md: "50px 100px 50px 100px" },
          position: "relative",
          transition: "transform 0.3s ease, background-color 0.2s ease", // Smooth zoom-in animation
          transformOrigin: "top", // Ensure the scaling is from the center
          "&:hover": {
            background: "#e2469d",
            transform: "scale(1.01, 1.07)",
            color: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          },
          "&:hover .hoverText": {
            opacity: 1, // Show the text on hover
            paddingTop: "20px",
            transform: "translateY(0)", // Animate the text into view
          },
        }}
        spacing={{ xs: 4, md: 8 }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 5, lg: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingRight: { xs: "0", md: "23px" },
            paddingBottom: { xs: "23px", md: "0" },
          }}
        >
          <Typography
            sx={{
              font: {
                xs: "normal 600 12px/normal OpenSans",
                sm: "normal 600 16px/normal OpenSans",
                md: "normal 600 24px/normal OpenSans",
                lg: "normal 600 34px/normal OpenSans",
              },
              color: "inherit",
              letterSpacing: "0.084px",
              marginBottom: "16px",
              marginRight: "",
            }}
          >
            Why choose Pannalabs?
          </Typography>
          <Box>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal OpenSans",
                  sm: "normal 400 14px/normal OpenSans",
                  md: "normal 400 18px/normal OpenSans",
                  lg: "normal 400 24px/normal OpenSans",
                },
                color: "inherit",
              }}
            >
              From education to neurodiverse support, Pannalabs utilizes
              advanced AI technology to deliver precise, impactful results. Our
              innovative solutions are designed to empower users with accurate,
              tailored assistance, transforming experiences across various
              domains.
            </Typography>
            <Typography
              className="hoverText"
              sx={{
                opacity: 0,
                font: {
                  xs: "normal 400 12px/normal OpenSans",
                  sm: "normal 400 14px/normal OpenSans",
                  md: "normal 400 18px/normal OpenSans",
                  lg: "normal 400 20px/normal OpenSans",
                },
              }}
            >
              ACCESS TO DEMO
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              MaxWidth: "560px",
              width: "100%",
              maxHeight: "376px",
              height: "auto",
            }}
            src={LaptopImg}
            alt="LaptopImg"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChoosePannaLab;
