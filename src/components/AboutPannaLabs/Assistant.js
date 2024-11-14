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
        gap={{ xs: 1, sm: 2, lg: 5 }}
        sx={{
          justifyContent: "center",
          paddingTop: { xs: "25px", md: "50px", lg: "80px" },
        }}
      >
        {AssistantContent.map((item, index) => {
          const backgroundColor = colors[index % colors.length];
          return (
            <Grid key={item.title}>
              <CustomCard
                item={item}
                showLearnMore={false}
                backgroundColor={backgroundColor}
                alignment={item.alignment}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Assistant;
