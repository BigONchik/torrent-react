import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useCart } from "../../contexts/CartContextProvider";

export default function CartRightSide() {
  let { cart } = useCart();
  const radioStyles = {
    " .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
      color: "#ae946d",
    },
  };
  return (
    <Box sx={{ width: "35%" }}>
      <FormControl>
        <Typography>Имя Фамилия</Typography>
        <TextField sx={{ marginBottom: "4%" }}></TextField>

        <FormControl component="fieldset">
          <Typography sx={{ marginBottom: "1%" }}>Метод оплаты</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="VISA/MasterCard/Maestro/ЭЛКАРТ"
              control={<Radio />}
              label="VISA/MasterCard/Maestro/ЭЛКАРТ"
              sx={{ ...radioStyles }}
            />
            <FormControlLabel
              value="WebMoney"
              control={<Radio />}
              label="WebMoney"
              sx={{ ...radioStyles }}
            />
            <FormControlLabel
              value="BitCoin"
              control={<Radio />}
              label="BitCoin"
              sx={{ ...radioStyles }}
            />
            <FormControlLabel
              value="QIWI"
              control={<Radio />}
              label="QIWI"
              sx={{ marginBottom: "4%", ...radioStyles }}
            />
          </RadioGroup>
        </FormControl>

        <Typography sx={{ marginBottom: "1%" }}>E-mail</Typography>
        <TextField sx={{ marginBottom: "4%" }}></TextField>

        <Typography sx={{ marginBottom: "1%" }}>Телефон</Typography>
        <TextField sx={{ marginBottom: "4%" }}></TextField>

        <Typography sx={{ marginBottom: "1%" }}>Комментарий</Typography>
        <TextField sx={{ marginBottom: "4%" }}></TextField>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Прочитал и согласен с"
          />
        </FormGroup>
        <Typography sx={{ color: "#ae946d", width: "70%" }}>
          Соглашение на обработку персональных данных
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Прочитал и согласен с"
          />
        </FormGroup>
        <Typography sx={{ color: "#ae946d", marginBottom: "10%" }}>
          Условия использования
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ width: "60%", marginBottom: "10%" }}>
            ИТОГО
          </Typography>
          <Typography>{cart?.totalPrice} KGS</Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: "#ae946d",
            color: "#ffff",
            width: "40%",
            fontSize: "11px",
            height: "50%",
            marginBottom: "10%",
          }}
        >
          Подтвердить заказ
        </Button>
      </FormControl>
    </Box>
  );
}
