import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import PrachImg from "../../assets/Images/prach_logo.png";
import PrachVideo from "../../assets/Images/prach_video.mp4";

const PrachContent = () => {
  return (
    <div>
      <Grid container>
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
          <Box
            component="img"
            src={PrachImg}
            alt="PrachImg"
            sx={{ maxWidth: { xs: "90px", lg: "180px" }, mt: "20px" }}
          />
          <Typography
            sx={{
              font: {
                xs: "normal 600 12px/normal OpenSans",
                sm: "normal 600 16px/normal OpenSans",
                md: "normal 600 20px/normal OpenSans",
                lg: "normal 600 24px/normal OpenSans",
              },
              color: "#000",
              letterSpacing: "0.024px",
              marginTop: "24px",
              marginBottom: "16px",
            }}
          >
            Just ask Prach your AI knowledge base Neurodiverse Austism support
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 400 12px/normal OpenSans",
                sm: "normal 400 14px/normal OpenSans",
                md: "normal 400 16px/normal OpenSans",
                lg: "normal 400 16px/normal OpenSans",
              },
              color: "#000",
              letterSpacing: "0.024px",
            }}
          >
            Prach uses AI to support neurodiverse individuals by providing daily
            routines, communication prompts, and behavioral insights. It
            personalizes assistance to promote independence and ease for both
            users and caregivers
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#203B44",
            borderRadius: "20px",
            paddingLeft: "40px",
            paddingTop: { xs: "30px", md: "50px" },
            marginBottom: { xs: "25px", md: "50px", lg: "80px" },
          }}
        >
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            controls={false}
            style={{ borderRadius: "20px" }}
          >
            <source src={PrachVideo} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </div>
  );
};

export default PrachContent;
