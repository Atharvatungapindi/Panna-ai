import {
  Box,
  Button,
  Card,
  Grid2 as Grid,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import PrachContactImg from "../../assets/Images/Prach_contact_img.png";
import VoiceContactImg from "../../assets/Images/Voice_contact_img.png";
import EduTechContact from "../../assets/Images/EduTechImg.png";
import VoiceIcon from "../../assets/Images/VoiceGrid_logo.png";
import PrachIcon from "../../assets/Images/prach_logo.png";
import playIconImg from "../../assets/Images/icon play.svg";

const Logo = ({ xs, md }) => {
  return (
    <Stack
      direction="row"
      className="logo"
      sx={{
        display: {
          xs: xs,
          md: md,
          flexGrow: 1,
          letterSpacing: "0.083px",
        },
      }}
    >
      <Typography
        sx={{
          color: "#4a4b4c",
          font: {
            md: 'normal 700 26px / normal "MontserratBold"',
            lg: 'normal 700 33px / normal "MontserratBold"',
          },
        }}
      >
        EduTech
      </Typography>
      <Typography
        sx={{
          color: "#19467e",
          font: {
            md: 'normal 700 26px / normal "MontserratBold"',
            lg: 'normal 700 33px / normal "MontserratBold"',
          },
        }}
      >
        AI
      </Typography>
    </Stack>
  );
};

const Contact = () => {
  const btnStyles = {
    background: "#203B44",
    borderRadius: "20px",
    font: {
      xs: "normal 600 10px/normal OpenSans",
      sm: "normal 600 12px/normal OpenSans",
      md: "normal 600 14px/normal OpenSans",
      lg: "normal 600 14px/normal OpenSans",
    },
    color: "#fff",
    height: { xs: "40px", md: "50px" },
    width: { xs: "150px", md: "315px" },
    overflow: "hidden",
  };
  const contactContent = [
    {
      image: PrachContactImg,
      icon: PrachIcon,
      playIcon: playIconImg,
      text: `Redefines autism support with AI-powered tools that adapt to
                  each user’s unique needs, fostering independence and social
                  confidence in a soothing, sensory-friendly environment.
                  Discover a tailored experience that empowers neurodiverse
                  lives like never before.`,
      button1: "EXPLORE FEATURES",
      button2: "WATCH NOW",
    },
    {
      image: EduTechContact,
      playIcon: playIconImg,
      text: `Unlock a new era of education where every learner’s potential is realized. Introducing Edutech, your AI personalized learning platform, adapting to each student’s pace and style for maximum engagement and growth.`,
      button1: "EXPLORE FEATURES",
      button2: "WATCH NOW",
    },
    {
      image: VoiceContactImg,
      icon: VoiceIcon,
      playIcon: playIconImg,
      text: `Voice Grid leverages cutting-edge AI to transform voice interactions, delivering seamless, responsive communication across any platform. Empower your brand with voice technology that’s intuitive, fast, and effortlessly scalable.`,
      button1: "EXPLORE FEATURES",
      button2: "WATCH NOW",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {contactContent.map((item, index) => (
        <Grid item key={index}>
          <Card
            style={{
              width: "400px",
              height: "660px",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <Box
              sx={{
                background: "#fff",
                margin: "20px",
                maxWidth: "339px",
                maxHeight: "392px",
                width: "100%",
                height: "100%",
                padding: "20px",
                marginTop: "auto",
                marginBottom: "20px",
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center", 
                alignItems: "center",
              }}
            >
              {index === 1 ? (
                <Logo xs="none" md="flex" />
              ) : (
                <Box
                  component="img"
                  src={item.icon}
                  alt="icon"
                  sx={{ width: "50px", height: "50px" }}
                />
              )}
              <Typography
                sx={{
                  font: {
                    xs: "normal 400 10px/normal OpenSans",
                    sm: "normal 400 12px/normal OpenSans",
                    md: "normal 400 14px/normal OpenSans",
                    lg: "normal 400 14px/normal OpenSans",
                  },
                  color: "#000",
                  my: "24px",
                }}
              >
                {item.text}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ ...btnStyles, marginTop: "10px" }}
                >
                  {item.button1}
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ ...btnStyles, marginTop: "10px" }}
                  >
                    <Box
                      component="img"
                      src={item.playIcon}
                      alt="play icon"
                      sx={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                    />
                    {item.button2}
                  </Button>
                </div>
              </div>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Contact;
