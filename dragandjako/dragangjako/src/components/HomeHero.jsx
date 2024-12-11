import { Stack, Typography, Box, ImageListItem, Button } from "@mui/material";
import { motion } from "framer-motion";
import image from "../images/ladyjustice5.png";
import { NavHashLink } from "react-router-hash-link";

const HomeHero = (props) => {
  const { subtitleState } = props;
  return (
    <section id="home">
      <Stack
        sx={{
          backgroundImage: "linear-gradient(#034254,#a6acad)",
          height: { lg: "650px", md: "650px", sm: "450px", xs: "300px" },
          paddingTop: { lg: "5%", md: "12%", sm: "20%", xs: "40%" },
          paddingBottom: "2%",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Box
            sx={{
              padding: "6%",
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
              <Typography
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: "500",
                  paddingBottom: { md: "4%", sm: "2%", xs: "0" },
                  fontSize: { lg: "45px", md: "45px", sm: "35px", xs: "30px" },
                }}
              >
                {subtitleState ? "АДВОКАТ" : "LAWYER"}
              </Typography>
            </motion.div>

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
              <Typography
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: "800",
                  fontSize: { lg: "72px", md: "72px", sm: "45px", xs: "35px" },
                }}
              >
                Драган Ѓаковски
              </Typography>
              <NavHashLink
                to={"#contact"}
                style={{
                  color: "white",
                }}
              >
                <Button
                  sx={{
                    color: "#dce4e6",
                    backgroundColor: "#045c72",
                    marginTop: { md: "6%" },
                    paddingX: { md: "8%" },
                    paddingY: { md: "2%" },
                    fontSize: { lg: "15px", sm: "17px", xs: "12px" },

                    ":hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  {subtitleState ? "ПРАВНА ПОМОШ" : "LEGAL AID"}
                </Button>
              </NavHashLink>
            </motion.div>
          </Box>

          <Box sx={{ display: { lg: "block", xs: "none" } }}>
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
                delay: 0.7,
              }}
            >
              <ImageListItem sx={{ width: "680px", height: "900px" }}>
                <img src={`${image}`} alt="justicelady" />
              </ImageListItem>
            </motion.div>
          </Box>
        </Box>
      </Stack>
    </section>
  );
};

export default HomeHero;
