import { Box, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";
import up_Arrow from "../../assets/Images/UpArrow.svg";
import down_arrow from "../../assets/Images/DownArrow.svg";

const MeasurableResults = () => {
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
    width: { xs: "150px", md: "200px" },
    overflow: "hidden",
    textTransform: "none",
    letterSpacing: "0.175px",
  };
  const percentageContent = [
    {
      icon: up_Arrow,
      prcnt: "25%",
      text: "Lift in sales conversions",
    },
    {
      icon: up_Arrow,
      prcnt: "10%",
      text: "Improvement in compliance adherence",
    },
    {
      icon: up_Arrow,
      prcnt: "50%",
      text: "Customer sentiment improvement",
    },
    {
      icon: down_arrow,
      prcnt: "16%",
      text: "Reduction in AHT",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "80px",
          textAlign: "center",
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
            letterSpacing: "0.088px",
          }}
        >
          Measurable results that impact your entire business
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {percentageContent.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.text}
                sx={{ paddingRight: "20px" }}
              />
              <Stack
                direction="column"
                alignItems="flex-start"
                sx={{ gap: "20px" }}
              >
                <Typography
                  sx={{
                    color: "#256D85",
                    font: {
                      xs: "normal 800 28px/normal 'InterBold'",
                      sm: "normal 800 32px/normal 'InterBold'",
                      md: "normal 800 40px/normal 'InterBold'",
                      lg: "normal 800 48px/normal 'InterBold'",
                    },
                    letterSpacing: "0.12px",
                  }}
                >
                  {item.prcnt}
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    font: {
                      xs: "normal 600 12px/normal 'Inter'",
                      sm: "normal 600 18px/normal 'Inter'",
                      md: "normal 600 18px/normal 'Inter'",
                      lg: "normal 600 20px/normal 'Inter'",
                    },
                    letterSpacing: "0.03px",
                  }}
                >
                  {item.text}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          font: {
            xs: "normal 600 12px/normal OpenSans",
            sm: "normal 600 16px/normal OpenSans",
            md: "normal 600 24px/normal OpenSans",
            lg: "normal 600 34px/normal OpenSans",
          },
          color: "#000",
          letterSpacing: "0.088px",
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        <Button sx={btnStyles}>See Customer Stories</Button>
      </Box>
    </div>
  );
};

export default MeasurableResults;
