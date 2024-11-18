import {
  Box,
  Button,
  Card,
  CardContent,
  darken,
  emphasize,
  Typography,
} from "@mui/material";
import React from "react";

const CustomCard = (props) => {
  const { item, showLearnMore, backgroundColor, customStyle, hoverBackground } =
    props;
  return (
    <Card
      sx={{
        maxWidth: "280px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "none",
        border: "1px solid #E2E0E0",
        height: "100%",
        backgroundColor: backgroundColor,
        transition: "transform 0.3s ease, background-color 0.2s ease",
        transformOrigin: "top",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: hoverBackground,
          transform: "scale(1.01, 1.06)",
          color: "white",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        },
        ...customStyle,
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt=""
        sx={{ maxWidth: { xs: "90px", lg: "180px" }, mt: "20px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
          justifyContent: "center",
          flexGrow: 1,
          height: "100%",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            font: {
              xs: "normal 600 14px/normal OpenSans",
              sm: "normal 600 16px/normal OpenSans",
              md: "normal 600 18px/normal OpenSans",
              lg: "normal 600 20px/normal OpenSans",
            },
            textAlign: "center",
            color: "inherit",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            font: {
              xs: "normal 400 10px/normal OpenSans",
              sm: "normal 400 12px/normal OpenSans",
              md: "normal 400 14px/normal OpenSans",
              lg: "normal 400 14px/normal OpenSans",
            },
            textAlign: "center",
          }}
        >
          {item.text}
        </Typography>
        {showLearnMore && (
          <Box>
            <Button
              sx={{
                p: 0,
                textTransform: "none",
                color: "#165041",
              }}
              endIcon={<img src={item.icon} alt="right arrow" />}
            >
              {item.learn}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
