import { Typography, Box, Stack, Button } from "@mui/material";
import image from "../images/pillarback2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = (props) => {
  const { subtitleState } = props;
  const navigate = useNavigate();

  return (
    <section
      id="uslugi"
      style={{
        padding: "4%",
        fontFamily: "Alegreya",
        fontWeight: "500",
        backgroundImage: `url(${image})`,
        backgroundPositionY: "12%",
        backgroundPositionX: "19%",
        borderRadius: "4%",
        marginTop: "-3%",
        border: "7px solid #547c88",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <Stack>
          <Box sx={{ paddingY: "3%", textShadow: "1px 1px 10px #547c88" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Alegreya",
                fontWeight: "800",
                fontSize: { md: "45px", xs: "30px" },
              }}
            >
              {subtitleState ? "УСЛУГИ" : "SERVICES"}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Alegreya", fontWeight: "800" }}
            >
              {subtitleState ? "(области на работа)" : " (areas of work)"}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "3%",

              marginTop: "3%",
            }}
          >
            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("registeragent")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Регистрационен агент" : "Register agent"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("criminalLaw")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Кривично право" : "Criminal law"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("offences")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Прекршоци" : "Offences"}
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "3%",
              fontSize: "14px",
              marginTop: "3%",
            }}
          >
            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("litigation")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Парнични постапки" : "Litigation proceedings"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("nonlitigation")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState
                  ? "Вонпарнични постапки"
                  : "Non-litigation proceedings"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("labordisputes")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Работни спорови" : "Labor disputes"}
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "3%",
              fontSize: "14px",
              marginTop: "3%",
              marginBottom: "4%",
            }}
          >
            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("bussinesdispute")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState
                  ? "Стопански спорови и стечај"
                  : "Business disputes and bankruptcy"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("contracts")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Видови на договори" : "Types of contracts"}
              </Typography>
            </Button>

            <Button
              sx={{
                border: "7px solid #547c88",
                padding: "5.1%",
                width: "26%",
                borderRadius: "4%",
                color: "black",
                ":hover": {
                  backgroundColor: "#547c88",
                  color: "white",
                },
              }}
              onClick={() => navigate("freeaid")}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", sm: "15px", xs: "8px" },
                }}
              >
                {subtitleState ? "Бесплатна правна помош" : "Free legal aid"}
              </Typography>
            </Button>
          </Box>
        </Stack>
      </motion.div>
    </section>
  );
};

export default Services;
