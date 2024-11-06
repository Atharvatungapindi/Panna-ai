import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import AI_chatBot_img from "../../assets/Images/AI Chatbot 1.png";
import PrachVideo1 from "../../assets/Images/Prach_video_1.mp4";
import PHVideo from "../../assets/Images/PH_video.mp4";

const Chatbot = () => {
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
            paddingBottom: { xs: "30px", md: "0" },
          }}
        >
          <Box
            component="img"
            src={AI_chatBot_img}
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
            Get support with our 24x7 intelligent AI Chatbot
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
            Our AI Chatbot offers real-time, personalized responses to user
            queries, automating support and enhancing user engagement. It
            leverages natural language processing to understand intent,
            providing accurate and efficient assistance.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 6 }}
          container
          spacing={2}
          sx={{
            borderRadius: "20px",
            background: "#203B44",
            minHeight: { xs: "340px", sm: "465px" },
            marginBottom: { xs: "50px", md: "80px", lg: "120px" },
          }}
        >
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Box sx={{ maxWidth: "284px", maxHeight: "398px" }}>
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                controls={false}
                style={{ borderRadius: "20px" }}
              >
                <source src={PrachVideo1} type="video/mp4" />
              </video>
            </Box>
          </Grid>
          <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ maxWidth: "284px", maxHeight: "398px" }}>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                controls={false}
                style={{ borderRadius: "20px" }}
              >
                <source src={PHVideo} type="video/mp4" />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chatbot;
