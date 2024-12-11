import { Typography, Stack, Box, ListItem, List } from "@mui/material";
import image from "../../images/backservice1.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Litigation = () => {
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
          <Typography
            sx={{
              fontFamily: "Alegreya",
              fontWeight: "700",
              paddingLeft: "5%",
              fontSize: { lg: "45px", xs: "30px" },
            }}
          >
            {subtitleState ? "Парнични постапки" : "Litigation proceedings"}
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
              {subtitleState ? "Развод на брак" : "Divorce of marriage"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Управување сопственост и поделба на имот стекнат во брак"
                : "Property management and division of property acquired in marriage"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Упис во регистар на вистински сопственици"
                : "Entry in the register of real owners"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Измена на одлука за старателство"
                : "Modification of a guardianship decision"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Измена на одлука за алиментација"
                : "Modification of alimony decision"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState ? "Надомест на штети" : "Compensation for damages"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Побарување на долг и состав на НПН"
                : "Debt claim and NPN composition"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Заштита на сопственост и предавање во владение"
                : "Protection of ownership and surrender"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Утврдување на право на сопственост"
                : "Determination of ownership right"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Смеќавање на владение"
                : "Acknowledgment of ownership"}
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default Litigation;
