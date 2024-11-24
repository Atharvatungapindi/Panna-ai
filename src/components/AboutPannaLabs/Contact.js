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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Logo = () => {
  return (
    <Stack
      direction="row"
      className="logo"
      sx={{
        display: {
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
    height: { xs: "25px", sm: "40px", lg: "50px" },
    width: { xs: "180px", sm: "240px", lg: "315px" },
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#203B44",
      border: "1px solid #203B44",
    },
  };
  const contactContent = [
    {
      image: PrachContactImg,
      icon: PrachIcon,
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
      text: `Unlock a new era of education where every learner’s potential is realized. Introducing Edutech, your AI personalized learning platform, adapting to each student’s pace and style for maximum engagement and growth.`,
      button1: "EXPLORE FEATURES",
      button2: "WATCH NOW",
    },
    {
      image: VoiceContactImg,
      icon: VoiceIcon,
      text: `Voice Grid leverages cutting-edge AI to transform voice interactions, delivering seamless, responsive communication across any platform. Empower your brand with voice technology that’s intuitive, fast, and effortlessly scalable.`,
      button1: "EXPLORE FEATURES",
      button2: "WATCH NOW",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: { xs: "25px", md: "50px", lg: "80px" } }}
    >
      {contactContent.map((item, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              width: { xs: "260px", sm: "300px", md: "350px", lg: "400px" },
              height: { xs: "360px", sm: "500px", md: "550px", lg: "660px" },
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#fff",
              position: "relative",  
              overflow: "hidden", 
              transition: "background-size 1s ease", // Transition only the background size
              "&:hover": {
                backgroundSize: "110%", // Zoom in effect by increasing the background-size
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: adding shadow on hover
              },
            }}
          >
            <Box
              sx={{
                background: "#fff",
                maxWidth: "339px",
                maxHeight: "392px",
                width: { xs: "85%", lg: "100%" },
                height: { xs: "60%", lg: "100%" },
                padding: "20px",
                marginTop: "auto",
                marginBottom: { xs: "10px", lg: "20px" },
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
                  sx={{
                    width: { xs: "35px", sm: "50px" },
                    height: { xs: "35px", sm: "50px" },
                  }}
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
                  marginTop: { xs: "5px", sm: "10px", lg: "20px" },
                  marginBottom: { xs: "5px", sm: "10px", lg: "20px" },
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
                <Button variant="contained" sx={{ ...btnStyles }}>
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
                    sx={{
                      ...btnStyles,
                      marginTop: { xs: "3px", sm: "8px", lg: "10px" },
                    }}
                  >
                    <PlayCircleOutlineIcon
                      sx={{
                        width: { xs: "15px", sm: "20px" },
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
