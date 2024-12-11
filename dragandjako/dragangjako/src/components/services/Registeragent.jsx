import { Typography, Stack, Box, ListItem, List } from "@mui/material";
import image from "../../images/backservice1.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Registeragent = () => {
  const [subtitleState] = useOutletContext();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Stack sx={{ paddingTop: "6%" }}>
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: { lg: "center", xs: "80% 20%" },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: { lg: "480px", xs: "450px" },
          }}
        ></Box>
        <Box
          sx={{
            padding: "5%",
            textAlign: "left",
            backgroundColor: "#a6acad",
            borderRadius: "4%",
            marginTop: { lg: "-1.3%", xs: "-3%" },
            border: "7px solid #547c88",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Alegreya",
                fontWeight: "700",
                paddingLeft: "5%",
                fontSize: { lg: "45px", xs: "30px" },
              }}
            >
              {subtitleState ? "Регистрационен агент" : "Register agent"}
            </Typography>
            <List
              sx={{
                paddingLeft: "6.5%",
                paddingTop: "2%",
                listStyleType: "disc",
                fontSize: { lg: "25px", xs: "18px" },
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState
                  ? "Основање на фирми"
                  : "Establishment of companies"}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState
                  ? "Отворање и бришење на подружници"
                  : "Opening and deleting subsidiaries"}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState
                  ? "Упис во регистар на вистински сопственици"
                  : "Entry in the register of real owners"}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState
                  ? "Промена на основач и седиште на фирма"
                  : "Change of founder and seat of company"}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState
                  ? "Упис на работно време"
                  : "Registration of working hours"}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {subtitleState ? "Ликвидација" : "Liquidation"}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Registeragent;
