import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductCart } = useCart();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  return (
    <Card sx={{ maxHeight: 330, maxWidth: 161, backgroundColor: "#313843" }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "150%", // Set the paddingTop to 100% for full image display
          cursor: "pointer",
          maxWidth: "100%",
        }}
        image={item.pic1}
        title="green iguana"
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <CardContent
        sx={{ backgroundColor: "#313843", padding: "0", textAlign: "center" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "lightgray", fontSize: "15px" }}
        >
          {item.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h10"
            color="text.secondary"
            sx={{ color: "lightgray", fontSize: "12px" }}
          >
            {item.price} $
          </Typography>
          {email === ADMIN ? (
            <>
              <Button size="small" onClick={() => deleteProduct(item.id)}>
                Delete
              </Button>
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                Edit
              </Button>
            </>
          ) : (
            <IconButton
              sx={{
                color: checkProductCart(item.id) ? "red" : "inherit",
              }}
              onClick={() => addProductToCart(item)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>

      {/* CardActions, if needed */}
    </Card>
  );
}
