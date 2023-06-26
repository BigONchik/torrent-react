import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect({ product, setProduct }) {
  function handleChange(e) {
    setProduct({ ...product, category: e.target.value });
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        label="Category"
        value={product.category}
        onChange={handleChange}
      >
        <MenuItem value="Action">Action</MenuItem>
        <MenuItem value="Shooter">Shooter</MenuItem>
        <MenuItem value="Simulator">Simulator</MenuItem>
        <MenuItem value="Adventure">Adventure</MenuItem>
        <MenuItem value="Survival-horror">Survival-horror</MenuItem>
        <MenuItem value="Strategy">Strategy</MenuItem>
        <MenuItem value="Race">Race</MenuItem>
        <MenuItem value="Strategy">Strategy</MenuItem>
        <MenuItem value="Shooter">Shooter</MenuItem>
      </Select>
    </FormControl>
  );
}
