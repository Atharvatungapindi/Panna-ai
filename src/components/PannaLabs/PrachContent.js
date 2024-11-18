import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PrachImg from "../../assets/Images/prach_logo.png";
import PrachVideo from "../../assets/Images/prach_video.mp4";

const PrachContent = () => {
  // Animation variants for the left and right grids
  const leftGridVariant = {
    hidden: { opacity: 0, y: -100 }, // Start hidden and shifted left
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Fade in and move to original position
  };

  const rightGridVariant = {
    hidden: { opacity: 0, y: 100 }, // Start hidden and shifted right
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Fade in and move to original position
  };

  // Refs for detecting scroll into view
  const leftGridRef = useRef(null);
  const rightGridRef = useRef(null);

  // Track if elements are fully in view
  const leftGridInView = useInView(leftGridRef, { amount: 0.25 });
  const rightGridInView = useInView(rightGridRef, { amount: 0.25 });

  return (
    <div>
      <Grid container>
        {/* Left Grid */}
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
          <motion.div
            ref={leftGridRef}
            initial="hidden"
            animate={leftGridInView ? "visible" : "hidden"} // Animate only when fully in view
            variants={leftGridVariant}
            style={{
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={PrachImg}
              alt="PrachImg"
              sx={{ maxWidth: { xs: "90px", lg: "180px" }, mt: "20px" }}
            />
            <Typography
              sx={{
                font: {
                  xs: "normal 600 12px/normal OpenSans",
                  sm: "normal 600 16px/normal OpenSans",
                  md: "normal 600 20px/normal OpenSans",
                  lg: "normal 600 24px/normal OpenSans",
                },
                color: "#000",
                letterSpacing: "0.024px",
                marginTop: "24px",
                marginBottom: "16px",
              }}
            >
              Just ask Prach your AI knowledge base Neurodiverse Autism support
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal OpenSans",
                  sm: "normal 400 14px/normal OpenSans",
                  md: "normal 400 16px/normal OpenSans",
                  lg: "normal 400 16px/normal OpenSans",
                },
                color: "#000",
                letterSpacing: "0.024px",
              }}
            >
              Prach uses AI to support neurodiverse individuals by providing
              daily routines, communication prompts, and behavioral insights. It
              personalizes assistance to promote independence and ease for both
              users and caregivers
            </Typography>
          </motion.div>
        </Grid>

        {/* Right Grid */}
        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#203B44",
            borderRadius: "20px",
            paddingLeft: "40px",
            paddingTop: { xs: "30px", md: "50px" },
            marginBottom: { xs: "25px", md: "50px", lg: "80px" },
          }}
        >
          <motion.div
            ref={rightGridRef}
            initial="hidden"
            animate={rightGridInView ? "visible" : "hidden"} // Animate only when fully in view
            variants={rightGridVariant}
            style={{
              flex: 1,
            }}
          >
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              controls={false}
              style={{ borderRadius: "20px" }}
            >
              <source src={PrachVideo} type="video/mp4" />
            </video>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PrachContent;
