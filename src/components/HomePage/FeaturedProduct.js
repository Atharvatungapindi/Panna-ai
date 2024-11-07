import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../customComponents/CustomCard";
import Products from "../customComponents/Products";
// import Frame from "../../assets/Images/Frame 900.svg";
// import Circle1 from "../../assets/Images/circle.svg";
// import Circle2 from "../../assets/Images/circle.svg";

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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 50px",
        textAlign: "center",
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

      {/* Container for circles and frame */}
      {/* <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "20px 0",
        }}
      >
        <img
          src={Circle2}
          alt="Circle 2"
          style={{
            position: "absolute",
            top: "12%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        />
        <img
          src={Circle1}
          alt="Circle 1"
          style={{
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        />
        <img
          src={Frame}
          alt="Frame"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            width: "50%",
            height: "auto",
          }}
        />
      </div> */}

      <Grid
        container
        gap={{ sm: 2, lg: 5 }}
        sx={{
          // p: { md: "20px", lg: "35px 100px" },
          justifyContent: "center",
        }}
      >
        {Products.map((item) => {
          return (
            <Grid sx={{ pt: "15px" }} key={item.title}>
              <CustomCard item={item} showLearnMore={true} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeaturedProduct;
