import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import LaptopImg from "../../assets/Images/LaptopImg.png";

const ChoosePannaLab = () => {
  return (
    <div>
      <Grid
        container
        sx={{ background: "#FBE2F0", padding: {xs:"20px 30px 20px 30px",md:"50px 100px 50px 100px"} }}
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
              color: "#000",
              letterSpacing: "0.084px",
              marginBottom: "16px",
              marginRight: "",
            }}
          >
            Why choose Pannalabs?
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 400 12px/normal OpenSans",
                sm: "normal 400 14px/normal OpenSans",
                md: "normal 400 18px/normal OpenSans",
                lg: "normal 400 24px/normal OpenSans",
              },
              color: "#000",
            }}
          >
            From education to neurodiverse support, Pannalabs utilizes advanced
            AI technology to deliver precise, impactful results. Our innovative
            solutions are designed to empower users with accurate, tailored
            assistance, transforming experiences across various domains.
          </Typography>
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
