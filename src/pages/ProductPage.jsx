import React from "react";
import ProductList from "../components/product/ProductList";

import { Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <div>
      <Grid container>
        <ProductList />
      </Grid>
    </div>
  );
};

export default ProductPage;
