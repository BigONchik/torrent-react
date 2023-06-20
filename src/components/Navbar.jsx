import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#1E1E1E",
          display: "flex",
          justifyContent: "center",
          margin:0, padding:0
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
            color: "#909090",
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
            color: "#909090",
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
            color: "#909090",
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
            color: "#909090",
            margin: "1%",
          }}
        >
          По сети
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "#FF7D73",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
            },
            textDecoration: "none",
            color: "#FF7D73",
            margin: "1%",
          }}
        >
          Заказать игру
        </Link>
        <Link
          sx={{
            "&:hover": {
              color: "#FFC008",
              backgroundColor: "transparent",
              textDecorationLine: "overline",
            },
            textDecoration: "none",
            color: "#FFC008",
            margin: "1%",
          }}
        >
          Поддержать 💰
        </Link>
      </Box>
      <Box sx={{padding: '24px 0 24px 0',position: 'relative',
    margin: '0 auto',
    width: '996px'}}>
      
<div class="header-menu-buttons" style={{float: 'right', marginRight: '13px'}}>
<ul id="navbar2" style={{marginTop:'27px'}}>
<a href="#" class="new100" style={{margin:'24px 0 24px 0'}}>Топ 10 Онлайн игр</a> 
<a href="#" class="new100">Топ 100 игр</a>
<a href="#" class="new100">С русcкой озвучкой</a>
<a href="#" class="newvk">Репаки от Игрухи</a>
</ul></div> 
   
<Link sx={{display: 'inline-block',
    height: '70px',
    width: '275px',
    textDecoration: 'none'}}>
<Box>
<Typography sx={{display:'block',margin: '0px 0px 0px 241px',fontSize: '13px', color: 'lightgrey'}}>ORG</Typography>
<Typography sx={{fontSize: '34px',margin: '-15px 0px 0px 0px',color: 'lightgrey'}}>Торрент <span style={{color:"#0092BE"}}>Игруха</span></Typography>
<Typography sx={{fontSize: '13px',margin: '0px 0px 3px -3px',color: 'lightgrey'}}>Официальный сайт | Качай сколько влезет ;)</Typography>
</Box></Link><div class="btn-menu-wr"><div class="toggle btn-menu"><span class="toggle-icon"></span></div></div>
      </Box>
    </div>
  );
};

export default Navbar;
