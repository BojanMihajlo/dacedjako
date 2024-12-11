import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  MenuItem,
  Button,
  ImageListItem,
  Popper,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import image from "../images/logo1.png";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { subtitleState, setSubtitleState } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "#547c88",
          ":hover": {
            backgroundColor: "#dce4e6",
          },
        }}
        onMouseLeave={handleClose}
      >
        <ImageListItem
          sx={{
            width: "65px",
            height: "70px",
            padding: "8px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={`${image}`} alt="logo" />
        </ImageListItem>

        <Button
          onClick={() => setSubtitleState(false)}
          sx={{
            color: "white",
            backgroundColor: "#045c72",
            marginX: "1%",
            fontSize: "12px",
          }}
        >
          EN
        </Button>
        <Button
          onClick={() => setSubtitleState(true)}
          sx={{ color: "white", backgroundColor: "#045c72", fontSize: "12px" }}
        >
          MK
        </Button>

        {/* for mobile code  */}
        <Box
          sx={{
            flexGrow: 1,
            fontFamily: "Alegreya",
            fontWeight: "300",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <ImageListItem
              sx={{
                width: "65px",
                height: "70px",
                padding: "8px",
              }}
            >
              <img src={`${image}`} alt="herojustice" />
            </ImageListItem>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                }}
                to={"/#home"}
              >
                {subtitleState ? "ПОЧЕТНА" : "HOME"}
              </NavHashLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                }}
                to={"/#about"}
              >
                {subtitleState ? "ЗА МЕНЕ" : "ABOUT ME"}
              </NavHashLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                }}
                to={"/#uslugi"}
              >
                {subtitleState ? "УСЛУГИ" : "SERVICES"}
              </NavHashLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                }}
                to={"/#clients"}
              >
                {subtitleState ? "КЛИЕНТИ" : "CLIENTS"}
              </NavHashLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                }}
                to={"/#contact"}
              >
                {subtitleState ? "КОНТАКТ" : "CONTACT"}
              </NavHashLink>
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 0.9 }}></Box>
        <Stack direction="row">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <MenuItem>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                }}
                to={"/#home"}
              >
                {subtitleState ? "ПОЧЕТНА" : "HOME"}
              </NavHashLink>
            </MenuItem>
            <MenuItem>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                }}
                to={"/#about"}
              >
                {subtitleState ? "ЗА МЕНЕ" : "ABOUT ME"}
              </NavHashLink>
            </MenuItem>
            <MenuItem>
              <div>
                <Button
                  id="basic-button"
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  endIcon={
                    <KeyboardArrowDownIcon
                      style={{
                        color: "#073441",
                        fontSize: "20px",
                      }}
                    />
                  }
                >
                  <NavHashLink
                    to={"/#uslugi"}
                    style={{
                      color: "#073441",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontFamily: "Alegreya",
                      fontWeight: "500",
                    }}
                  >
                    {subtitleState ? "УСЛУГИ" : "SERVICES"}
                  </NavHashLink>
                </Button>
                <Popper
                  id="basic-button"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  onMouseLeave={handleClose}
                >
                  <Paper
                    sx={{
                      marginTop: "12%",
                      backgroundColor: "#547c88",
                      padding: "1%",
                      border: "3px solid black",
                      borderRadius: "2%",
                    }}
                  >
                    <MenuItem
                      component={Link}
                      to={"registeragent"}
                      onClick={handleClose}
                    >
                      {subtitleState
                        ? "Регистрационен агент"
                        : "Register agent"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"criminalLaw"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState ? "Кривично право" : "Criminal Law"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"offences"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState ? "Прекршоци" : "Offences"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"litigation"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState
                        ? "Парнични постапки"
                        : "Litigation proceedings"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"nonlitigation"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState
                        ? "Вонпарнични постапки"
                        : "Non-litigation proceedings"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"labordisputes"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState ? "Работни спорови" : "Labor disputes"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"bussinesdispute"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState
                        ? "Стопански спорови и стечај"
                        : "Business disputes and bankruptcy"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"contracts"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState
                        ? "Видови на договори"
                        : "Types of contracts"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={"freeaid"}
                      onClick={handleClose}
                    >
                      {" "}
                      {subtitleState
                        ? "Бесплатна правна помош"
                        : "Free legal aid"}
                    </MenuItem>
                  </Paper>
                </Popper>
              </div>
            </MenuItem>
            <MenuItem>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                }}
                to={"/#clients"}
              >
                {subtitleState ? "КЛИЕНТИ" : "CLIENTS"}
              </NavHashLink>
            </MenuItem>
            <MenuItem>
              <NavHashLink
                style={{
                  color: "#073441",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                }}
                to={"/#contact"}
              >
                {subtitleState ? "КОНТАКТ" : "CONTACT"}
              </NavHashLink>
            </MenuItem>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
