import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EduTechAiVideo from "../../assets/Images/EduTechAI_Video.mp4";

const EduTechAi = () => {
  // Animation variants for grids
  const leftGridVariant = {
    hidden: { opacity: 0, y: -100 }, // Start hidden and shifted left
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Fade in and move to position
  };

  const rightGridVariant = {
    hidden: { opacity: 0, y: 100 }, // Start hidden and shifted right
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Fade in and move to position
  };

  // Refs to track visibility
  const leftGridRef = useRef(null);
  const rightGridRef = useRef(null);

  // Detect when grids are fully in view
  const leftGridInView = useInView(leftGridRef);
  const rightGridInView = useInView(rightGridRef);

  return (
    <div>
      <Grid
        container
        sx={{
          marginBottom: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 5, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#203B44",
            borderRadius: "20px",
            paddingLeft: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
            paddingTop: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },

            paddingRight: { xs: "20px", sm: "30px", md: "40px", lg: "40px" },
          }}
          order={{ xs: 2, lg: 1 }}
        >
          <motion.div
            ref={leftGridRef}
            initial="hidden"
            animate={leftGridInView ? "visible" : "hidden"} // Animate when fully in view
            variants={leftGridVariant}
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
              <source src={EduTechAiVideo} type="video/mp4" />
            </video>
          </motion.div>
        </Grid>

        <Grid
          container
          size={{ xs: 12, sm: 12, md: 7, lg: 6 }}
          justifyContent="center"
          alignItems="center"
          order={{ xs: 1, md: 2 }}
        >
          <motion.div
            ref={rightGridRef}
            initial="hidden"
            animate={rightGridInView ? "visible" : "hidden"} // Animate when fully in view
            variants={rightGridVariant}
            style={{
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingLeft: { xs: "0", md: "77px" },
                paddingTop: { xs: "30px", md: "0" },
                paddingBottom: { xs: "20px", md: "0px" },
              }}
            >
              <Stack direction="row">
                <Typography
                  sx={{
                    color: "#4a4b4c",
                    font: {
                      md: 'normal 700 24px / normal "MontserratBold"',
                      lg: 'normal 700 33px / normal "MontserratBold"',
                    },
                  }}
                >
                  EduTech
                </Typography>
                <Typography
                  sx={{
                    color: "#19467e",
                    font: {
                      md: 'normal 700 26px / normal "MontserratBold"',
                      lg: 'normal 700 33px / normal "MontserratBold"',
                    },
                  }}
                >
                  AI
                </Typography>
              </Stack>
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
                Generate MCQs, get solutions to any questions, with your
                advanced cutting edge AI technology
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
                EduTech harnesses AI to generate tailored questions, simulate
                interviews, and recommend resources, creating a personalized and
                interactive learning experience. It streamlines content creation
                and supports educators in engaging students effectively.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EduTechAi;
