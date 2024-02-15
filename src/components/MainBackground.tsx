import { Box, Typography } from "@mui/material";
import { boxStyles } from "../Theme/constants";

const MainBackground = () => {
  return (
    <>
      <Box sx={{ position: "absolute", top: 60 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
          <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
            <circle cx="63" cy="82" r="62.5" />
            <circle cx="105" cy="41" r="40.5" />
          </g>
        </svg>
      </Box>
      <Box sx={boxStyles.four}>
        <Typography
          variant="h1"
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
    </>
  );
};

export default MainBackground;
