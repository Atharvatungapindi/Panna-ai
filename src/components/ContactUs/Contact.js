import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box
      sx={{
        background: "#ADD8E6",
        margin: "80px",
        borderRadius: "10px",
        padding: "20px 50px",
        textAlign: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            font: {
              xs: "normal 400 20px/normal Inter",
              sm: "normal 400 26px/normal Inter",
              md: "normal 400 28px/normal Inter",
              lg: "normal 400 30px/normal Inter",
            },
            color: "#3730A3",
          }}
        >
          Contact us to implement it Today
        </Typography>
        <Typography
          sx={{
            font: {
              xs: "normal 600 12px/normal 'InterBold'",
              sm: "normal 600 14px/normal 'InterBold'",
              md: "normal 600 18px/normal 'InterBold'",
              lg: "normal 600 px/normal 'InterBold'",
            },
            color: "#3730A3",
          }}
        >
          Empower your Potential Customers with a Solution that Delivers
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="bookdemo"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="bookdemo"
                control={<Radio />}
                label="Book demo"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    font: {
                      xs: "normal 600 12px/normal 'InterBold'",
                      sm: "normal 600 14px/normal 'InterBold'",
                      md: "normal 600 18px/normal 'InterBold'",
                      lg: "normal 600 20px/normal 'InterBold'",
                    },

                    color: "#3730A3",
                  },
                }}
              />
              <FormControlLabel
                value="contactsales"
                control={<Radio />}
                label="Contact sales"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    font: {
                      xs: "normal 600 12px/normal 'InterBold'",
                      sm: "normal 600 14px/normal 'InterBold'",
                      md: "normal 600 18px/normal 'InterBold'",
                      lg: "normal 600 20px/normal 'InterBold'",
                    },
                    color: "#3730A3",
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <TextField
            placeholder="Your name"
            fullWidth
            style={{
              background: "white",
              borderRadius: "5px",
              border: "none",
            }}
          />
          <TextField
            placeholder="Your email address (required)"
            fullWidth
            style={{
              background: "white",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <Box>
          <textarea
            placeholder="message"
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </Box>
        <Box>
          <Button>Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
