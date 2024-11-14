import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../customComponents/CustomCard";
import Products from "../customComponents/Products";
import Frame from "../../assets/Images/Frame 900.svg";
import Circle1 from "../../assets/Images/circle.svg";
import Circle2 from "../../assets/Images/circle.svg";

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
            width: { xs: "200px", md: "300px", lg: "500px" },
            height: { xs: "200px", md: "300px", lg: "500px" },
          }}
        >
          <img
            src={Circle2}
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
        <Box
          // container
          // spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Card 1 - Top */}
          <Box
            // item
            sx={{
              position: "absolute",
              left: { md: "60%", lg: "72%" },
              bottom: { md: "77%", lg: "77%" },
              transform: "translateX(-50%)",
              width: "100%",
              // border: "2px solid red",
            }}
          >
            <CustomCard item={Products[0]} showLearnMore={true} />
          </Box>
          {/* Card 2 - Right */}
          <Box
            // item
            sx={{
              position: "absolute",
              top: "50%",
              left: "95%",
              transform: "translateY(-50%)",
              width: "100%",
              // border: "2px solid yellow",
            }}
          >
            <CustomCard item={Products[1]} showLearnMore={true} />
          </Box>
          {/* Card 3 - Bottom */}
          <Box
            // item
            sx={{
              position: "absolute",
              left: { md: "60%", lg: "72%" },
              top: { md: "77%", lg: "77%" },
              transform: "translateX(-50%)",
              width: "100%",
              // border: "2px solid green",
            }}
          >
            <CustomCard item={Products[2]} showLearnMore={true} />
          </Box>
          {/* Card 4 - Left */}
          <Box
            // item
            sx={{
              position: "absolute",
              top: { md: "50%", lg: "50%" },
              right: { md: "71%", lg: "55%" },
              transform: "translateY(-50%)",
              width: "100%",
              // border: "2px solid blue",
            }}
          >
            <CustomCard
              item={Products[3]}
              showLearnMore={true}
              sx={{ borderRadius: "80px" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FeaturedProduct;
