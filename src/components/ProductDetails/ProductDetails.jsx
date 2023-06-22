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
              height: 467,
              width: 452,
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
          >
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic1}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic1)
              }
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic2}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic2)
              }
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic3}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic3)
              }
            />
          </Box>
        </Box>

        <Box sx={{ width: "33%" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "29px" }}
            >
              {productDetails?.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "23px" }}
            >
              {productDetails?.price} KGS
            </Typography>
            <Typography variant="body2">
              Цена вкл. 20% НДС / Артикул 52252801
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 3 }}>
              РАЗМЕР (ТАБЛИЦА РАЗМЕРОВ)
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
        <Box>
          <Typography>recently-watched</Typography>
          {recentlyWatched.map((product) => (
            <Card
              sx={{
                maxWidth: 180,
                border: "1px solid #ccc",
                marginTop: 5,
                textAlign: "center",
              }}
              key={product.id}
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
          ))}
        </Box>
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
