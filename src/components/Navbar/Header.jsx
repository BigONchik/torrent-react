import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Здесь можно выполнить поиск или выполнить другую логику поиска
    console.log("Выполняется поиск:", searchTerm);
  };
  return (
    <div style={{ color: "white", zIndex: "0" }}>
      <Box
        sx={{
          padding: "24px 0 24px 0",
          position: "relative",
          margin: "0 auto",
          width: "996px",
        }}
      >
        <Link
          sx={{
            display: "inline-block",
            height: "70px",
            width: "275px",
            textDecoration: "none",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "block",
                margin: "0px 0px 0px 241px",
                fontSize: "13px",
                color: "lightgrey",
              }}
            >
              ORG
            </Typography>
            <Typography
              sx={{
                fontSize: "34px",
                margin: "-15px 0px 0px 0px",
                color: "lightgrey",
              }}
            >
              Торрент <span style={{ color: "#0092BE" }}>Игруха</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                margin: "0px 0px 3px -3px",
                color: "lightgrey",
              }}
            >
              Официальный сайт | Качай сколько влезет ;)
            </Typography>
          </Box>
        </Link>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Введите поисковый запрос"
          />
          <button type="submit">Найти</button>
        </form>
      </Box>
    </div>
  );
};

export default Header;
