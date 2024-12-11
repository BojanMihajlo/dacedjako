import {
  Stack,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
  ImageListItem,
} from "@mui/material";
import { FaLocationDot, FaSquareThreads, FaAngleUp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";
import image from "../images/logo1.png";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import axios from "axios";

const Contact = (props) => {
  const { subtitleState } = props;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("https://dacedjako.mk/send-email", {
        email: email,
        name: name,
        message: message,
      });
      setStatus(response.data.message);
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact">
      <Stack
        sx={{
          paddingTop: { lg: "5%", xs: "8%" },
          paddingBottom: { lg: "1%", xs: "1%" },
          backgroundColor: "#bfc7c8",
          borderTopLeftRadius: "3%",
          borderTopRightRadius: "3%",
          marginTop: { lg: "-2.5%", xs: "-8%" },
        }}
      >
        <Box sx={{ paddingBottom: "3%" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Alegreya",
              fontWeight: "800",
              fontSize: { md: "45px", xs: "35px" },
              paddingTop: { md: "1%", xs: "5%" },
            }}
          >
            {subtitleState ? "КОНТАКТ" : "CONTACT"}
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "2%",
            display: { lg: "flex", xs: "block" },
            gap: { lg: "10%", xs: "0" },
            justifyContent: "center",
          }}
        >
          <Box>
            <Stack
              sx={{
                backgroundColor: "#045c72",
                padding: "10%",
                borderRadius: "4%",
                width: { md: "500px", sm: "500px", xs: "280px" },
                height: { md: "420px", sm: "430px", xs: "485px" },
                marginLeft: { lg: "0", md: "12%", sm: "6%", xs: "6%" },
                marginBottom: { lg: "0", xs: "6%" },
              }}
              alignItems="center"
              rowGap={3}
            >
              <Box sx={{ padding: "1%" }}>
                <Typography variant="h5" sx={{ color: "white" }}>
                  {subtitleState
                    ? "Потребна ви е правна помош?"
                    : " We need legal aid?"}
                </Typography>
              </Box>
              <Typography sx={{ display: "none" }}>{status}</Typography>
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Message"
                  name="message"
                  type="text"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Button
                  sx={{
                    backgroundColor: "#547c88",
                    color: "white",
                    ":hover": {
                      backgroundColor: "black",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  {subtitleState ? "Испрати" : "Send"}
                </Button>
              </FormControl>
            </Stack>
          </Box>

          <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.657214008985!2d21.71619049074534!3d42.136828077571295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544f0069798875%3A0x843382d7dc72d506!2z0JDQtNCy0L7QutCw0YIg0JTRgNCw0LPQsNC9INCD0LDQutC-0LLRgdC60Lg!5e0!3m2!1smk!2smk!4v1728836456252!5m2!1smk!2smk"
              width="600"
              height="520"
              allowFullScreen=""
              style={{ borderRadius: "4%", border: "none" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="mapa"
            ></iframe>
          </Box>
          <Box sx={{ display: { md: "none", sm: "block", xs: "none" } }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.657214008985!2d21.71619049074534!3d42.136828077571295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544f0069798875%3A0x843382d7dc72d506!2z0JDQtNCy0L7QutCw0YIg0JTRgNCw0LPQsNC9INCD0LDQutC-0LLRgdC60Lg!5e0!3m2!1smk!2smk!4v1728836456252!5m2!1smk!2smk"
              width="550"
              height="400"
              allowFullScreen=""
              style={{ borderRadius: "4%", border: "none" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="mapa"
            ></iframe>
          </Box>
          <Box sx={{ display: { md: "none", sm: "none", xs: "block" } }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.657214008985!2d21.71619049074534!3d42.136828077571295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544f0069798875%3A0x843382d7dc72d506!2z0JDQtNCy0L7QutCw0YIg0JTRgNCw0LPQsNC9INCD0LDQutC-0LLRgdC60Lg!5e0!3m2!1smk!2smk!4v1728836456252!5m2!1smk!2smk"
              width="330"
              height="300"
              allowFullScreen=""
              style={{ borderRadius: "4%", border: "none" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="mapa"
            ></iframe>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "2%",
            display: "flex",
            gap: { md: "18%", xs: "5%" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: { md: "5%", xs: "2%" },
              marginLeft: "5%",
            }}
          >
            <Box sx={{ display: { md: "block", sm: "flex", xs: "block" } }}>
              <Button
                sx={{ fontSize: { md: "50px", xs: "40px" }, margin: "0" }}
              >
                <a
                  href="https://www.facebook.com/djakovski?mibextid=kFxxJD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook
                    style={{
                      color: "#045c72",
                    }}
                  />
                </a>
              </Button>
              <Button sx={{ fontSize: { md: "50px", xs: "40px" } }}>
                <a
                  href="https://www.instagram.com/daceadv?igsh=dWJyZnRiMHlwZTc5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    style={{
                      color: "#045c72",
                    }}
                  />
                </a>
              </Button>
              <Button sx={{ fontSize: { md: "50px", xs: "40px" } }}>
                <a
                  href="https://www.threads.net/@daceadv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSquareThreads
                    style={{
                      color: "#045c72",
                    }}
                  />
                </a>
              </Button>
            </Box>

            <Box>
              <ImageListItem
                sx={{
                  width: { md: "190px", sm: "140px", xs: "80px" },
                  height: { md: "195px", sm: "145px", xs: "85px" },
                  paddingTop: "15%",
                }}
              >
                <img src={`${image}`} alt="logo" />
              </ImageListItem>
            </Box>
          </Box>

          <Box sx={{ paddingTop: "7%" }}>
            <Box sx={{ display: "flex" }}>
              <FaLocationDot
                style={{
                  fontSize: "55px",
                  color: "#045c72",
                  paddingLeft: "4%",
                }}
              />
              <Typography
                sx={{
                  marginTop: "2%",
                  fontSize: {
                    md: "18px",
                    sm: "17px",
                    xs: "11px",
                    fontWeight: "bold",
                  },
                }}
              >
                ул. 11ти Октомври бр.1 (Хотел Куманово) 1300 Куманово
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "5%" }}>
              <MdEmail
                style={{
                  fontSize: "55px",
                  color: "#045c72",
                  paddingLeft: "4%",
                }}
              />
              <Typography
                sx={{
                  paddingLeft: "5%",
                  marginTop: "2%",
                  fontSize: { md: "20px", xs: "13px", fontWeight: "bold" },
                }}
              >
                dacedjako@yahoo.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "5%" }}>
              <FaPhoneSquareAlt
                style={{
                  fontSize: "55px",
                  color: "#045c72",
                  paddingLeft: "4%",
                }}
              />
              <Typography
                variant="h5"
                sx={{ paddingLeft: "5%", marginTop: "2%", fontWeight: "bold" }}
              >
                071 260 178
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#547c88",
          padding: "1.8%",
          display: "flex",
          justifyContent: "flex-end",
          gap: { lg: "40%", md: "34%", sm: "28%", xs: "15%" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "black",
              fontSize: { lg: "18px" },
              fontWeight: "bold",
            }}
          >
            &copy;2024 All Right Reserved
          </Typography>
        </Box>
        <Box>
          <NavHashLink to={"/#"}>
            <Button
              sx={{
                backgroundColor: "#045c72",
                color: "black",
                fontSize: { lg: "22px", xs: "18px" },
                transition: "0.2 ease-out",
              }}
            >
              <FaAngleUp />
            </Button>
          </NavHashLink>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
