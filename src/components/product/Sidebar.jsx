import {
  Box,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; // Импортируем компонент Link для роутинга
import { useProducts } from "../../contexts/ProductContextProvider";

const Sidebar = () => {
  const { fetchByParams } = useProducts();

  return (
    <Grid item md={3}>
      <Box
        sx={{
          marginBottom: "45%",
          width: "100%",
          height: "100%",
          boxShadow: "0 0 10px green",
        }}
      >
        <Link to="/details/6">
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src="https://itorrents-igruha.org/uploads/posts/2023-02/1677002741_cover2.jpg"
              alt=""
              style={{ width: "200px", height: "278px" }} // Установите размеры картинки здесь
            />
          </CardContent>
        </Link>
      </Box>
      <Paper
        elevation={3}
        sx={{ p: 2, boxShadow: 0, width: "100%", backgroundColor: "#313843" }}
      >
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: "#BCB6A4", marginTop: "10%" }}
          >
            Категории
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel
              value="All"
              control={<Radio sx={{ display: "none" }} />}
              label="All"
              sx={{
                borderRadius: "15%",
                margin: "10%",
                backgroundColor: "#313843",

                "&:hover": {
                  color: "white",
                  backgroundColor: "#39424F",
                },
              }}
            />
            <FormControlLabel
              value="Clothes"
              control={<Radio sx={{ display: "none" }} />}
              label="Clothes"
              sx={{
                borderRadius: "15%",
                margin: "10%",
                backgroundColor: "#313843",

                "&:hover": {
                  color: "white",
                  backgroundColor: "#39424F",
                },
              }}
            />
            <FormControlLabel
              value="Shoes"
              control={<Radio sx={{ display: "none" }} />}
              label="Shoes"
              sx={{
                borderRadius: "15%",
                margin: "10%",
                backgroundColor: "#313843",

                "&:hover": {
                  color: "white",
                  backgroundColor: "#39424F",
                },
              }}
            />
            <FormControlLabel
              value="Accessories"
              control={<Radio sx={{ display: "none" }} />}
              label="Accessories"
              sx={{
                borderRadius: "15%",
                margin: "10%",
                backgroundColor: "#313843",

                "&:hover": {
                  color: "white",
                  backgroundColor: "#39424F",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
        <Divider />
      </Paper>
    </Grid>
  );
};

export default Sidebar;
