import {
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

import { useProducts } from "../../contexts/ProductContextProvider";

const Sidebar = () => {
  const { fetchByParams } = useProducts();

  return (
    <Grid item md={3}>
      <Paper
        elevation={3}
        sx={{ p: 2, boxShadow: 0, width: "100%", backgroundColor: "#313843" }}
      >
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: "#BCB6A4" }}
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
