import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import Image1 from "../../assets/Images/XMLID_1.svg";
import Image2 from "../../assets/Images/XMLID_2.svg";
import Image3 from "../../assets/Images/XMLID_3.svg";
import Image4 from "../../assets/Images/XMLID_4.svg";
import { motion } from "framer-motion";
import { AppContext } from "../../App";

const MainPage = () => {
  const { mainHeight } = useContext(AppContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const MainTextStyle = {
    font: {
      xs: "normal 600 20px/normal Inter",
      sm: "normal 600 40px/normal Inter",
      md: "normal 600 60px/normal Inter",
      lg: "normal 600 80px/normal Inter",
    },
    color: "#0B2821",
    letterSpacing: "1px",
  };
  const subTextStyle = {
    font: {
      xs: "normal 700 10px/normal OpenSans",
      sm: "normal 700 18px/normal OpenSans",
      md: "normal 700 23px/normal OpenSans",
      lg: "normal 700 28px/normal OpenSans",
    },
    color: "#0B2821",
    letterSpacing: "0.4px",
  };

  return (
    <motion.div
      style={{
        background: "#F6F8F9",
        textAlign: "center",
        height: mainHeight,
      }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Box sx={{ position: "relative" }}>
        <motion.div variants={fadeInDown}>
          <Box
            component="img"
            src={Image1}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              maxWidth: "300px",
              width: { xs: "40%", md: "100%" },
            }}
          />
        </motion.div>
        <motion.div variants={fadeInDown}>
          <Box
            src={Image2}
            component="img"
            sx={{
              position: "absolute",
              top: 50,
              right: 0,
              maxWidth: "300px",
              width: { xs: "30%", md: "100%" },
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // Start fully transparent
          animate={{ opacity: 1 }} // Fade to fully visible
          transition={{ duration: 2 }} // Smooth fade-in over 1 second
        >
          <Box
            src={Image3}
            component="img"
            sx={{
              position: "absolute",
              bottom: "5vh",
              left: 0,
              maxWidth: "300px",
              width: { xs: "40%", md: "100%" },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} // Start fully transparent
          animate={{ opacity: 1 }} // Fade to fully visible
          transition={{ duration: 2 }} // Smooth fade-in over 1 second
        >
          <Box
            src={Image4}
            component="img"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              maxWidth: "250px",
              width: { xs: "28%", sm: "20%", md: "21%", lg: "100%" },
            }}
          />
        </motion.div>

        <motion.div
          style={{
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: mainHeight,
          }}
          variants={staggerContainer}
        >
          <motion.div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            variants={fadeInUp}
          >
            <Typography sx={MainTextStyle}>Innovate AI</Typography>
            <Typography sx={MainTextStyle}>Solutions for</Typography>
            <Typography sx={MainTextStyle}>Better Tomorrow</Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                marginTop: { xs: "20px", md: "32px" },
                marginBottom: { xs: "30px", md: "64px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={subTextStyle}>
                Explore AI Solutions that are transforming Healthcare,
              </Typography>
              <Typography sx={subTextStyle}>
                Education and Communication today
              </Typography>
            </Box>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <Button
                sx={{
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
                }}
              >
                Explore AI Solutions
              </Button>
              <Button
                sx={{
                  background: "#F6F8F9",
                  border: "1px solid #1B3139",
                  borderRadius: "20px",
                  font: {
                    xs: "normal 600 10px/normal OpenSans",
                    sm: "normal 600 12px/normal OpenSans",
                    md: "normal 600 14px/normal OpenSans",
                    lg: "normal 600 14px/normal OpenSans",
                  },
                  color: "#252525",
                  height: { xs: "40px", md: "50px" },
                  width: { xs: "150px", md: "200px" },
                }}
              >
                Request a demo
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default MainPage;
