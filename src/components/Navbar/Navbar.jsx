import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "Заказать игру", link: "/support", id: 5 },
  {
    name: "Поддежать 💰",
    link: "https://vk.com/torrent_igruha?w=app6471849_-126357200",
    id: 6,
  },
  { name: "ADMIN", link: "/admin", id: 7 },
];
const settings = ["Profile", "Settings", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#171a21",
        height: "70px",
        width: "100%",
        padding: "0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "18%",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, width: "70%" }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      color: "white",
                      backgroundColor: "transparent",
                    },
                    color: "#8A8A8A",
                    display: "block",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "flex-end",
                width: "3%",
                marginLeft: "6%",
              }}
            >
              <Button
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "transparent",
                  },
                  color: "#8A8A8A",
                  display: "block",
                }}
              >
                Войти
              </Button>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
