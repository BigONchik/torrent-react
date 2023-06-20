import { Box, Link } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          sx={{
            "&:hover": {
              color: "white",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "white",
            },
            textDecoration: "none",
            color: "lightgray",
            margin: "1%",
          }}
        >
          Главная
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "white",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "white",
            },
            textDecoration: "none",
            color: "lightgray",
            margin: "1%",
          }}
        >
          Новые игры
        </Link>

        <Link
          sx={{
            "&:hover": {
              color: "white",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "white",
            },
            textDecoration: "none",
            color: "lightgray",
            margin: "1%",
          }}
        >
          Репаки от Игрухи
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "white",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "white",
            },
            textDecoration: "none",
            color: "lightgray",
            margin: "1%",
          }}
        >
          По сети
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "red",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "red",
            },
            textDecoration: "none",
            color: "red",
            margin: "1%",
          }}
        >
          Заказать игру
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "gold",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
              textDecorationColor: "gold",
            },
            textDecoration: "none",
            color: "gold",
            margin: "1%",
          }}
        >
          Поддержать
        </Link>
      </Box>
    </div>
  );
};

export default Navbar;
