import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductSize from "./ProductSize";
import { useCart } from "../../contexts/CartContextProvider";

const ProductDetail = () => {
  const { getProductDetails, productDetails, recentlyWatched } = useProducts();
  const { id } = useParams();

  const { addProductToCart, checkProductCart } = useCart();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const [mainImages, setMainImages] = useState({});
  const navigate = useNavigate();

  const handleImageClick = (productId, image) => {
    setMainImages((prevMainImages) => ({
      ...prevMainImages,
      [productId]: image,
    }));
  };
  const MAX_RECENTLY_WATCHED = 2;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <CardMedia
            sx={{
              height: 300,
              width: 200,
            }}
            image={mainImages[productDetails?.id] || productDetails?.pic1}
            title="green iguana"
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "14px",
              justifyContent: "space-around",
              width: "70%",
            }}
          ></Box>
        </Box>

        <Box sx={{ width: "33%" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "gray", fontWeight: "bold", fontSize: "29px" }}
            >
              {productDetails?.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "gray", fontWeight: "bold", fontSize: "23px" }}
            >
              {productDetails?.price} KGS
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <ProductSize />
              </Grid>
            </Grid>
          </CardContent>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: checkProductCart(productDetails?.id)
                  ? "#632d2d"
                  : "#D2B48C",
                color: "#FFFFFF",
                borderRadius: 0,
                width: "30px",
                marginLeft: "65px",
                width: "60%",
              }}
              onClick={() => addProductToCart(productDetails)}
            >
              {checkProductCart(productDetails?.id)
                ? "Удалить из корзины"
                : "Добавить в корзину"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "14px",
          justifyContent: "space-around",

          width: "70%",
          margin: "0 auto", // Добавляем стиль для центрирования
        }}
      >
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic2}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic2)
          }
        />
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic3}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic3)
          }
        />
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic4}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic4)
          }
        />
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic5}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic5)
          }
        />
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic6}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic6)
          }
        />
        <CardMedia
          sx={{
            height: 180,
            width: 300,
          }}
          image={productDetails?.pic7}
          title="green iguana"
          onClick={() =>
            handleImageClick(productDetails?.id, productDetails?.pic7)
          }
        />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6">Просмотренные товары</Typography>
        <Grid container spacing={2}>
          {recentlyWatched.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card
                sx={{
                  maxWidth: 180,
                  border: "1px solid #ccc",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                <CardMedia
                  sx={{ width: 179, height: 140 }}
                  image={product.pic1}
                  title="green iguana"
                  onClick={() => navigate(`/details/${product.id}`)}
                />
                <CardContent>
                  <Typography
                    sx={{ fontSize: "14px" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#dedce7",
          padding: " 30px",
          marginTop: "50px",
        }}
      ></Box>
    </Box>
  );
};

export default ProductDetail;
