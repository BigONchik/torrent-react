// ProductList.jsx

import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "../../contexts/ProductContextProvider";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 20; // 4 cards per row and 3 rows
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // pagination

  return (
    <Grid container sx={{ width: "100%", marginLeft: "25%" }}>
      <Grid item md={8}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            overflowX: "auto",
            paddingRight: "20px",
          }}
        >
          {currentData().map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              sx={{ marginBottom: "20px" }}
            />
          ))}
        </Box>
        <Grid container justifyContent="center">
          <Pagination
            color="primary"
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default ProductList;
