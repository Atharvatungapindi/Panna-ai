import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomCard from "../customComponents/CustomCard";
import Products from "../customComponents/Products";
import Frame from "../../assets/Images/Frame 900.svg";
import Circle1 from "../../assets/Images/circle.svg";

const FeaturedProduct = () => {
  const textStyle = {
    font: {
      xs: "normal 400 12px/normal OpenSans",
      sm: "normal 400 14px/normal OpenSans",
      md: "normal 400 18px/normal OpenSans",
      lg: "normal 400 24px/normal OpenSans",
    },
    color: "#000",
  };

  const cardStyle = {
    borderRadius: "24px",
    background: "#FCFDFD",
    boxShadow:
      "0px 616.182px 173.711px 0px rgba(0, 0, 0, 0.00), 0px 393.308px 157.323px 0px rgba(0, 0, 0, 0.01), 0px 222.874px 134.38px 0px rgba(0, 0, 0, 0.05), 0px 98.327px 98.327px 0px rgba(0, 0, 0, 0.09), 0px 26.221px 55.719px 0px rgba(0, 0, 0, 0.10)",
    transformOrigin: "top",
    "&:hover": {
      backgroundColor: "#cee5ec94",
      transform: "scale(1.05)",
      color: "black",
      boxShadow: "none",
      backdropFilter: "blur(10px)",
    },
  };

  const isScreenLarge = useMediaQuery("(min-width: 900px)");

  // Don't render the component if the screen is below 900px
  if (!isScreenLarge) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 50px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <Typography
          sx={{
            font: {
              xs: "normal 600 30px/normal OpenSans",
              sm: "normal 600 40px/normal OpenSans",
              md: "normal 600 44px/normal OpenSans",
              lg: "normal 600 48px/normal OpenSans",
            },
            color: "#0B2821",
            letterSpacing: "0.072px",
            marginBottom: "16px",
          }}
        >
          Featured Products
        </Typography>
        <Typography sx={textStyle}>
          Explore our suite of innovative AI-powered tools designed to enhance
          teaching and learning. Each product is
        </Typography>
        <Typography sx={textStyle}>
          crafted to provide educators and students with the resources they need
          to succeed in a dynamic
        </Typography>
        <Typography sx={textStyle}>educational landscape.</Typography>
      </Box>

      {/* Positioning container */}
      <Box
        sx={{
          position: "relative",
          marginBottom: "320px",
          marginTop: "280px",
        }}
      >
        {/* Circle 2 */}
        <Box
          sx={{
            width: { xs: "200px", md: "400px", lg: "500px" },
            height: { xs: "200px", md: "400px", lg: "500px" },
          }}
        >
          <img
            src={Circle1}
            alt="Circle 2"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120%",
              height: "auto",
            }}
          />
          {/* Circle 1 */}
          <img
            src={Circle1}
            alt="Circle 1"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "auto",
            }}
          />
          {/* Frame */}
          <img
            src={Frame}
            alt="Frame"
            style={{
              position: "absolute",
              top: "47%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              width: "50%",
              height: "auto",
            }}
          />
        </Box>

        {/* Card grid: Place cards around the circle with gaps */}
        {/* Card 1 - Top */}
        <Box
          // item
          sx={{
            minWidth: "318px",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: {
              md: "translate(-50%, -82%)",
              lg: "translate(-50%, -70%)",
            },
            display: "flex",
            justifyContent: "center",
            transformOrigin: "center",
          }}
        >
          <CustomCard
            item={Products[0]}
            showLearnMore={true}
            customStyle={cardStyle}
          />
        </Box>
        {/* Card 2 - Right */}
        <Box
          // item
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: { md: "translate(83%,-56%)", lg: "translate(70%,-58%)" },
            minWidth: { lg: "318px" },
            display: "flex",
            justifyContent: "center",
            transformOrigin: "center",
          }}
        >
          <CustomCard
            item={Products[1]}
            showLearnMore={true}
            customStyle={cardStyle}
          />
        </Box>
        {/* Card 3 - Bottom */}
        <Box
          // item
          sx={{
            position: "absolute",
            transform: { md: "translate(15%,-45%)", lg: "translate(30%,-47%)" },
            minWidth: "318px",
            display: "flex",
            justifyContent: "center",
            transformOrigin: "center",
          }}
        >
          <CustomCard
            item={Products[2]}
            showLearnMore={true}
            customStyle={cardStyle}
          />
        </Box>
        <Box
          // item
          sx={{
            position: "absolute",
            transform: {
              md: "translate(-75%, -120%)",
              lg: "translate(-70%, -140%)",
            },
            minWidth: "318px",
            display: "flex",
            justifyContent: "center",
            transformOrigin: "center",
          }}
        >
          <CustomCard
            item={Products[3]}
            showLearnMore={true}
            customStyle={cardStyle}
          />
        </Box>
      </Box>
    </div>
  );
};

export default FeaturedProduct;
