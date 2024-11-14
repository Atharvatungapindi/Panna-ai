import React from "react";
import MainPage from "../components/HomePage/MainPage";
import ProductsPage from "../components/HomePage/ProductsPage";
// import FeaturedProduct from "../components/HomePage/FeaturedProduct";

const HomePage = () => {
  return (
    <div>
      <MainPage />
      <ProductsPage />
      {/* <FeaturedProduct /> */}
    </div>
  );
};

export default HomePage;
