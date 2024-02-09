import { Box, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { sectionMain } from "./Theme/constants";
import { useContext } from "react";
import { myContext } from "./context/Context";
import SliderComponent from "./components/SliderComponent";
export const App = () => {
  const { price } = useContext(myContext);
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <section style={sectionMain}>
          <Box sx={{ position: "absolute", top: 80 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
              <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
                <circle cx="63" cy="82" r="62.5" />
                <circle cx="105" cy="41" r="40.5" />
              </g>
            </svg>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: "0.5rem",
              zIndex: "1",
              position: "absolute",
              top: 120,
            }}
          >
            <Typography
              variant="h1"
              //fontSize="1.75rem"
              fontWeight={800}
              textAlign={"center"}
              color="primary.contrastText"
              sx={{
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.75rem",
                },
              }}
            >
              Simple, traffic-based pricing
            </Typography>
            <Typography
              variant="body1"
              fontWeight={700}
              color="primary.lightText"
              textAlign={"center"}
            >
              Sign-up for our 30-day trial. No credit card required.
            </Typography>
          </Box>
          <Card
            sx={{
              position: "absolute",
              height: 300,
              width: {
                xs: 320,
                sm: 400,
              },
              zIndex: 3,
              top: 250,
              borderRadius: 2,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                fontWeight={700}
                color="primary.lightText"
                textAlign={"center"}
              >
                750K PAGEVIEWS
              </Typography>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={800}
                  color="primary.contrastText"
                  textAlign={"center"}
                >
                  ${price}.00
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color="primary.lightText"
                  textAlign={"center"}
                >
                  / month
                </Typography>
              </Box>
            </Box>
            <SliderComponent />
          </Card>
        </section>
        <section></section>
      </main>
    </>
  );
};
