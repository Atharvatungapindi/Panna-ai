import { Grid2 as Grid } from "@mui/material";
import React from "react";
import CustomCard from "../customComponents/CustomCard";
import AssistantContent from "./AssistantContent";

const Assistant = () => {
  const colors = ["#F1F1F1", "#EBF4FA", "#E1E6FA", "#F0E5F5"];
  return (
    <div>
      <Grid
        container
        gap={{ sm: 2, lg: 5 }}
        sx={{
          p: { md: "20px", lg: "35px 100px" },
          justifyContent: "center",
        }}
      >
        {AssistantContent.map((item, index) => {
          const backgroundColor = colors[index % colors.length]; // Cycle through colors
          return (
            <Grid sx={{ pt: "15px" }} key={item.title}>
              <CustomCard
                item={item}
                showLearnMore={false}
                backgroundColor={backgroundColor}
                alignment={item.alignment} // Pass the alignment prop
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Assistant;
