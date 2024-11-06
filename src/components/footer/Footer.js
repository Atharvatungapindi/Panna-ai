import {
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LogoImg from "../../assets/Images/Logo.png";
import FacebookIcon from "../../assets/Images/logos_facebook.svg";
import TwitterIcon from "../../assets/Images/prime_twitter.svg";
import GlassdoorIcon from "../../assets/Images/simple-icons_glassdoor.svg";
import LinkedInIcon from "../../assets/Images/skill-icons_linkedin.svg";
import InstagramIcon from "../../assets/Images/uil_instagram-alt.svg";
import YoutubeIcon from "../../assets/Images/uil_youtube.svg";
let footerItems = [
  {
    title: "Product",
    subtitle: {
      Prach: ["Neurodiverse community", "PrachAI Chatbot"],
      EduTechAI: ["AI MCQ Generator", "AI Question Generator", "AI Interview"],
      "24x7 intelligent AI Chatbot": [
        "Pranichealing AI Chatbot",
        "PrachAI Chatbot",
      ],
      "Voice Grid": [],
    },
  },
  {
    title: "Solutions",
    subtitle: {
      "By use cases": ["Customer Service", "Employee Experience"],
      "By Industry": ["Healthcare", "Education"],
    },
  },
  {
    title: "Resources",
    subtitle: {
      Blog: [],
      Community: [],
      Webinars: [],
      Events: [],
      "Help Centre": [],
      "Case Studies": [],
      "Case Studies & testimonials": [],
    },
  },
  {
    title: "About",
    subtitle: {
      Company: ["Who We Are", "Our Team", "Contact Us"],
      Partners: ["HlthTek Optimum Pvt Ltd"],
      Pricing: [],
      Careers: ["Open Jobs", "Working at Pannalabs"],
    },
  },
];

const Footer = () => {
  const textStyles = {
    font: "normal 400 14px/normal OpenSans",
    color: "#fff",
  };
  const btnStyles = {
    background: "#FFF",
    border: "1px solid #256D85",
    borderRadius: "20px",
    color: "#1B3139",
    font: "normal 600 14px/normal OpenSans",
    height: { xs: "40px", md: "50px" },
    width: { xs: "150px", md: "200px" },
    textTransform: "none",
  };
  return (
    <Box
      component="footer"
      sx={{ background: "#1B3139", padding: "0px 50px 50px 80px" }}
    >
      <Divider sx={{ mb: "50px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          marginBottom: "70px",
        }}
      >
        <Typography
          sx={{
            ...textStyles,
            fontSize: { xs: "32px", sm: "40px", md: "44px", lg: "48px" },
          }}
        >
          Get started today
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Button sx={btnStyles}>Get a demo</Button>
          <Button
            sx={{
              ...btnStyles,
              background: "#1B3139",
              border: "1px solid #FFF",
              color: "#FFF",
            }}
          >
            See product tour
          </Button>
        </div>
      </Box>
      <Grid container spacing={{ xs: 6, sm: 4 }} sx={{ marginTop: "20px" }}>
        <Grid
          size={{ xs: 6, sm: 3, md: 2 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {" "}
            <Stack direction="row" sx={{ maxWidth: "50%", maxHeight: "50%" }}>
              <Box component="img" src={LogoImg} />
            </Stack>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                font: {
                  xs: "normal 400 14px/normal OpenSans",
                  sm: "normal 400 16px/normal OpenSans",
                  md: "normal 400 18px/normal OpenSans",
                  lg: "normal 400 20px/normal OpenSans",
                },
                color: "#FFF",
              }}
            >
              Austin, Texas USA
            </Typography>
            <Box sx={{ mt: 3 }}>
              <IconButton href="#" color="primary">
                <img src={FacebookIcon} alt="Facebook icon" />
              </IconButton>
              <IconButton href="#" color="primary">
                <img src={TwitterIcon} alt="Twitter icon" />
              </IconButton>
              <IconButton href="#" color="primary">
                <img src={LinkedInIcon} alt="LinkedIn icon" />
              </IconButton>
              <IconButton href="#" color="primary">
                <img src={InstagramIcon} alt="Instagram icon" />
              </IconButton>
              <IconButton href="#" color="primary">
                <img src={YoutubeIcon} alt="Youtube icon" />
              </IconButton>
              <IconButton href="#" color="primary">
                <img src={GlassdoorIcon} alt="Glassdoor icon" />
              </IconButton>
            </Box>
          </div>
          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Typography sx={textStyles}>Terms of Service</Typography>
              <Typography sx={textStyles}>Privacy Policy</Typography>
              <Typography sx={textStyles}>Security</Typography>
            </div>
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{ font: "normal 400 14px/normal 'Inter'", color: "#fff" }}
              >
                @Pannalabs.ai
              </Typography>
              <Typography
                sx={{ font: "normal 400 14px/normal 'Inter'", color: "#fff" }}
              >
                All Rights reserved
              </Typography>
            </div>
          </div>
        </Grid>

        {footerItems.map((footerItem, i) => {
          return (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={footerItem.title + i}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  font: {
                    xs: "normal 600 16px/normal OpenSans",
                    sm: "normal 600 18px/normal OpenSans",
                    md: "normal 600 20px/normal OpenSans",
                    lg: "normal 600 24px/normal OpenSans",
                  },
                  color: "#3FE1E5",
                  mb: "40px",
                }}
              >
                {footerItem.title}
              </Typography>

              {footerItem.subtitle
                ? Object.entries(footerItem.subtitle).map(([key, values]) => (
                    <div key={key}>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                          font: {
                            xs: "normal 400 14px/normal OpenSans",
                            sm: "normal 400 16px/normal OpenSans",
                            md: "normal 400 18px/normal OpenSans",
                            lg: "normal 400 20px/normal OpenSans",
                          },
                          color: "#fff",
                          mb: "10px",
                        }}
                      >
                        {key}
                      </Typography>
                      {values.map((item, j) => (
                        <Link
                          key={`${footerItem.title}-${key}-${j}`}
                          href="#"
                          underline="none"
                          sx={{
                            display: "block",
                            mb: "15px",
                            font: {
                              xs: "normal 400 14px/normal OpenSans",
                              sm: "normal 400 16px/normal OpenSans",
                              md: "normal 400 18px/normal OpenSans",
                              lg: "normal 400 20px/normal OpenSans",
                            },
                            color: "#79A3AE",
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  ))
                : footerItem.items.map((item, j) => (
                    <Link
                      key={`${footerItem.title}-${j}`}
                      href="#"
                      underline="none"
                      sx={{
                        display: "block",
                        mt: 1,
                        font: {
                          xs: "normal 500 12px/normal 'Inter'",
                          sm: "normal 500 14px/normal 'Inter'",
                          md: "normal 500 16px/normal 'Inter'",
                          lg: "normal 500 19px/normal 'Inter'",
                        },
                        color: "#5A5C5F",
                      }}
                    >
                      {item}
                    </Link>
                  ))}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Footer;
