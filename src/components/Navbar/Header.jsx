import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div style={{ color: "red", zIndex: "0" }}>
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
      </Box>
    </div>
  );
};

export default Header;
