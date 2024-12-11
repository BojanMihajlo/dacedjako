import { Stack, Typography, Box, ImageListItem } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { FaQuoteLeft } from "react-icons/fa6";
import image from "../images/advkomora.png";
import { motion } from "framer-motion";
import image1 from "../images/crlogomk.png";

const Clients = (props) => {
  const { subtitleState } = props;
  return (
    <section id="clients">
      <Stack
        sx={{
          padding: "6%",
          backgroundImage: "linear-gradient(white,#034254)",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Alegreya",
              fontWeight: "800",
              fontSize: { md: "45px", xs: "28px" },
            }}
          >
            {subtitleState ? "КЛИЕНТИ" : "CLIENTS"}
          </Typography>
        </Box>

        <Box sx={{ padding: "6.5%" }}>
          <FaQuoteLeft
            style={{
              fontSize: "70px",
              color: "#045c72",
            }}
          />

          <Carousel
            indicators={false}
            sx={{
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  padding: "1%",
                  fontSize: { md: "40px", sm: "35px", xs: "20px" },
                }}
              >
                {subtitleState
                  ? "Секогаш професионален..."
                  : " Always profesional..."}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  padding: "0.3%",
                  fontSize: { md: "30px", sm: "28px", xs: "18px" },
                }}
              >
                {subtitleState
                  ? "Драган со своето трпение и искуство докажува дека е на врвот во адвокатскта фела.Во било кое поле секогаш е професионален и брз."
                  : " With his patience and experience, Dragan proves that he is at the top of the legal profession. In any field, he is always professional and fast."}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", paddingTop: "1%" }}
              >
                -Бојан Михајловски
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  padding: "1%",
                  fontSize: { md: "40px", sm: "35px", xs: "20px" },
                }}
              >
                {subtitleState
                  ? "Посветен,вреден,брз..."
                  : " Dedicated,hardworking,fast..."}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  padding: "0.3%",
                  fontSize: { md: "30px", sm: "28px", xs: "18px" },
                }}
              >
                {subtitleState
                  ? "Неговата посветеност,чесност и искреност го прави еден од најдобрите адвокати"
                  : "His dedication, honesty and sincerity make him one of the best lawyers"}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", paddingTop: "1%" }}
              >
                -Маја Михајловска
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  padding: "1%",
                  fontSize: { md: "40px", sm: "35px", xs: "20px" },
                }}
              >
                {subtitleState ? "Адвокат на врвот..." : "Lawyer at the top..."}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  padding: "0.3%",
                  fontSize: { md: "30px", sm: "28px", xs: "18px" },
                }}
              >
                {subtitleState
                  ? "Драган е еден од најдобрите адвокати во градот би го препорачал на секој"
                  : "Dragan is one of the best lawyers in town I would recommend him to anyone"}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", paddingTop: "1%" }}
              >
                -Роберт Цветковски
              </Typography>
            </Box>
          </Carousel>
        </Box>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#61686f",
          borderTopLeftRadius: "10%",
          borderTopRightRadius: "10%",
          marginTop: "-3%",
          paddingBottom: "3%",
          display: { lg: "block", xs: "none" },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "4%",
              gap: "5%",
            }}
          >
            <a
              href="https://www.mba.org.mk/index.php/mk/"
              rel="noreferrer"
              target="_blank"
            >
              <ImageListItem>
                <img
                  src={`${image}`}
                  alt="advkomora"
                  style={{ height: "150px" }}
                />
              </ImageListItem>
            </a>

            <a href="https://crm.com.mk/" rel="noreferrer" target="_blank">
              <ImageListItem>
                <img
                  src={`${image1}`}
                  alt="crm"
                  style={{
                    height: "150px",
                    paddingTop: "3%",
                  }}
                />
              </ImageListItem>
            </a>
          </Box>
        </motion.div>
      </Stack>
    </section>
  );
};

export default Clients;
