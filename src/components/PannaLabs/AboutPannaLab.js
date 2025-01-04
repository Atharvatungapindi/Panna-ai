import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutPannaLab = () => {
  const textStyle = {
    font: {
      xs: "normal 600 12px/normal OpenSans",
      sm: "normal 600 16px/normal OpenSans",
      md: "normal 600 24px/normal OpenSans",
      lg: "normal 600 34px/normal OpenSans",
    },
    color: "#9FA5A7",
    letterSpacing: "0.088px",
  };

  const subTextStyle = {
    color: "#252525",
    font: {
      xs: "normal 600 12px/normal OpenSans",
      sm: "normal 600 16px/normal OpenSans",
      md: "normal 600 24px/normal OpenSans",
      lg: "normal 600 32px/normal OpenSans",
    },
    letterSpacing: "0.085px",
  };

  const containerRef = useRef(null); // Ref for scrolling detection
  const isInView = useInView(containerRef, { amount: 0.5 }); // Trigger once when in view

  // Animation variants for fade-in
  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Fade in and move to original position
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Button
          sx={{
            border: "1px solid #1B3139",
            color: "#000000",
            borderRadius: "20px",
            width: { xs: "150px", sm: "200px" },
            height: { xs: "40px", sm: "50px" },
            marginTop: { xs: "30px", md: "60px", lg: "80px" },
            textTransform: "none",
          }}
        >
          How it works
        </Button>
      </Box>
      <Box
        ref={containerRef} // Attach ref for scroll detection
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "32px",
          marginBottom: "8px",
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          variants={fadeInVariant}
        >
          <Typography sx={textStyle}>
            Pannalabs, your expert solution provider in Education and
            Neurodiverse and your intelligent 24X7 chatbot support provider by
            harnessing advanced AI technology
          </Typography>
        </motion.div>
        {/* <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          variants={fadeInVariant}
        >
          <Typography sx={textStyle}>
            and your intelligent 24X7 chatbot support provider by harnessing
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          variants={fadeInVariant}
        >
          <Typography sx={textStyle}>advanced AI technology</Typography>
        </motion.div> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          variants={fadeInVariant}
        >
          <Typography sx={subTextStyle}>Find what you need,</Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
          variants={fadeInVariant}
        >
          <Typography sx={subTextStyle}>when you need it</Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutPannaLab;
