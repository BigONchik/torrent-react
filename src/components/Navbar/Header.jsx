import { Box, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  return (
    <div
      style={{
        color: "white",
        width: "40%",
        marginLeft: "25%",
        marginRight: "0",
      }}
    >
      <Box
        sx={{
          padding: "24px 0 24px 0",
          position: "relative",
          marginBottom: "5%",
          width: "996px",
          marginLeft: "5%",
        }}
      >
        <Link
          href="/"
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
        <Box
          sx={{
            width: "25%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            label="search..."
            variant="standard"
            color="primary"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
