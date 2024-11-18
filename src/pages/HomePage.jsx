import React from "react";
import MainPage from "../components/HomePage/MainPage";
import ProductsPage from "../components/HomePage/ProductsPage";
import { Box } from "@mui/material";
import FeaturedProduct from "../components/HomePage/FeaturedProduct";

const HomePage = () => {
  return (
    <Box>
      <MainPage />
      <ProductsPage />
      <FeaturedProduct />
    </Box>
  );
};

export default HomePage;
