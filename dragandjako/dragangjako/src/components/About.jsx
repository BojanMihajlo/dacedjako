import { Stack, ImageListItem, Typography, Box } from "@mui/material";
import image from "../images/dace1.jpg";
import { motion } from "framer-motion";
import image1 from "../images/scaleback.png";

const About = (props) => {
  const { subtitleState } = props;
  return (
    <section id="about">
      <Stack
        sx={{
          backgroundColor: "#b0bbc6",
          paddingTop: "8%",
          paddingBottom: "14%",
          borderTopRightRadius: "4%",
          borderTopLeftRadius: "4%",
          marginTop: { lg: "-3%", xs: "-7.5%" },
        }}
      >
        <Box
          sx={{
            display: { lg: "flex", xs: "block" },
            justifyContent: "center",
            gap: "8%",
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
            <Box
              sx={{
                display: { md: "block", sm: "none", xs: "none" },
                paddingLeft: { lg: "0%", md: "25%" },
              }}
            >
              <ImageListItem>
                <img
                  src={`${image}`}
                  style={{
                    borderRadius: "22px",
                    height: "480px",
                    width: "380px",
                    boxShadow: "0 4px 8px 0 black",
                  }}
                  alt="dace"
                />
              </ImageListItem>
            </Box>
            <Box
              sx={{
                display: { md: "none", sm: "block", xs: "none" },
                paddingLeft: "22%",
              }}
            >
              <ImageListItem>
                <img
                  src={`${image}`}
                  style={{
                    borderRadius: "22px",
                    height: "500px",
                    width: "400px",
                    boxShadow: "0 4px 8px 0 black",
                  }}
                  alt="dace"
                />
              </ImageListItem>
            </Box>
            <Box
              sx={{
                display: { md: "none", sm: "none", xs: "block" },
                paddingLeft: "15%",
              }}
            >
              <ImageListItem>
                <img
                  src={`${image}`}
                  style={{
                    borderRadius: "22px",
                    height: "400px",
                    width: "300px",
                    boxShadow: "0 4px 8px 0 black",
                  }}
                  alt="dace"
                />
              </ImageListItem>
            </Box>
          </motion.div>

          <Box
            sx={{
              backgroundImage: `url(${image1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: { lg: "36%" },
              paddingTop: { lg: "0px", xs: "2%" },
              marginTop: { lg: "0px", xs: "2%" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Alegreya",
                  fontWeight: "800",
                  fontSize: { md: "45px", sm: "40px", xs: "30px" },
                }}
              >
                {subtitleState ? "За мене" : "About Me"}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "20px", md: "20px", xs: "15px" },
                    textShadow: "1px 1px",
                    paddingTop: "2%",
                    paddingX: { lg: "0px", xs: "5%" },
                  }}
                >
                  {subtitleState
                    ? "Јас сум Драган Ѓаковски адвокат од Куманово.Имам дипломирано на Правниот факултет Јустинијан Први во Скопје.Адвокатската канцеларија Драган Ѓаковски е основана во јануари 2008 година.Мојот успех се базира на големата посветеност и истрајност во работата со тоа што сум и член на Адвокатска Комора на Република Северна Македонија.Од 2015 година сум назначен и како регистрационен агент.Од самиот почеток па до ден денес работам во полињата на: кривично право,прекршоци,парнични и вонпарнични постапки,работни спорови,стопански спорови и стечај како и посредување и правење на многу видови на договори.За сите клиенти сум на располагање за давање на бесплатна правна помош во рамки на можностите и како таков сум заведен во Адвокатската Комора. "
                    : "I am Dragan Djakovski, a lawyer from Kumanovo. I graduated from the Justinian I First Faculty of Law in Skopje. The Dragan Djakovski law office was founded in January 2008. My success is based on great dedication and perseverance in my work, as I am also a member of the Bar Association of Republic of North Macedonia. Since 2015, I have been appointed as a registration agent. From the beginning until today, I have been working in the fields of: criminal law, misdemeanors, litigation and non-litigation proceedings, labor disputes, commercial disputes and bankruptcy procesures(for legal entites), as well as mediation and doing many types of contracts. I am available for all clients to provide free legal assistance within the scope of the possibilities and as such I am registered in the Bar Association.."}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: { lg: "block", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "2%",
              borderRadius: "25px",
              width: "380px",
              backdropFilter: "blur(15px)",
              marginBottom: "-1.8%",
              marginLeft: "10%",
              position: "absolute",
              zIndex: "10",
              bottom: "0",
              left: "0",
              border: "1px solid black",
            }}
          >
            <Box>
              <Typography variant="h5">15+</Typography>

              <Typography variant="body2">
                {" "}
                {subtitleState ? "години искуство" : "years experience"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">2000+</Typography>

              <Typography variant="body2">
                {subtitleState ? "решени случаи" : "resolved cases"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">1мил.+</Typography>

              <Typography variant="body2">
                {" "}
                {subtitleState ? "повратени средства" : "recovered funds"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </section>
  );
};

export default About;
