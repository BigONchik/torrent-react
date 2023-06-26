import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    pic7: "",
    price: 0,
    category: "",
  });

  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box
      sx={{
        paddingBottom: "3%",
      }}
    >
      <Typography
        sx={{
          paddingTop: "2%",
          color: "white",
          WebkitTextStroke: "3px black",
          fontWeight: "900",
          fontSize: "44px",
        }}
        variant="h4"
        align="center"
      >
        EDIT PAGE
      </Typography>
      <Box
        sx={{
          borderRadius: "30px",
          width: "60vw",
          margin: "10px auto",
          backgroundColor: "#2F426E",
          padding: "5% 5%",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="title"
          variant="outlined"
          value={product.title}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic1"
          label="pic1"
          variant="outlined"
          value={product.pic1}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic2"
          label="pic2"
          variant="outlined"
          value={product.pic2}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic3"
          label="pic3"
          variant="outlined"
          value={product.pic3}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic4"
          label="pic4"
          variant="outlined"
          value={product.pic4}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic5"
          label="pic5"
          variant="outlined"
          value={product.pic5}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic6"
          label="pic6"
          variant="outlined"
          value={product.pic6}
        />
        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic7"
          label="pic7"
          variant="outlined"
          value={product.pic7}
        />

        <TextField
          sx={{
            backgroundColor: "#0092BE",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="price"
          variant="outlined"
          value={product.price}
        />

        <CategorySelect product={product} setProduct={setProduct} />

        <Box sx={{ borderRadius: "5px" }}>
          <Button
            sx={{
              backgroundColor: "#0092BE",
              borderRadius: "5px",
              color: "black",
              fontSize: "22px",
              fontWeight: "900",
              fontFamily: "segoe ui",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={() => saveEditedProduct(product)}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button"
          >
            SAVE CHANGES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
