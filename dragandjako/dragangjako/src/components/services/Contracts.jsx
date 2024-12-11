import { Typography, Stack, Box, ListItem, List } from "@mui/material";
import image from "../../images/backservice1.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contracts = () => {
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
            {subtitleState ? "Видови на договори" : "Types of contracts"}
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
              {subtitleState ? "Договор за подарок" : "Gift Agreement"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Договор за продажба,закуп,залог"
                : "Agreement for sale, lease, pledge"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Соинвеститорски договор за градење"
                : "Co-investor construction agreement"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Хипотека и други договори"
                : "Mortgage and other contracts"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Договор за доживотна издршка"
                : "Lifetime alimony agreement"}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {subtitleState
                ? "Договор за распределба на имот за време на живот"
                : "Lifetime Property Distribution Agreement"}
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default Contracts;
