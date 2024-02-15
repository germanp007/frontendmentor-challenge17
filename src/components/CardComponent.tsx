import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import { boxStyles, buttonStyle, cardStyle } from "../Theme/constants";
import SliderComponent from "./SliderComponent";
import BenefitsComponent from "./BenefitsComponent";
import PriceComponent from "./PriceComponent";
import BillingComponent from "./BillingComponent";
import { myContext } from "../context/Context";
import { useContext } from "react";
const CardComponent = () => {
  const context = useContext(myContext);

  if (!context) {
    return null;
  }
  const { price, handleViews } = context;
  const views = handleViews(price);
  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyles.one}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} order={{ xs: 0, sm: 0 }}>
            <Typography
              variant="body1"
              fontWeight={800}
              letterSpacing={2}
              color="primary.lightText"
              textAlign={"center"}
              sx={{
                fontSize: {
                  xs: ".7rem",
                  sm: ".9rem",
                },
              }}
            >
              {`${views} PAGEVIEWS`}
            </Typography>
          </Grid>
          <Grid item xs={12} order={{ xs: 1, sm: 3 }}>
            <SliderComponent />
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 3, sm: 1 }}>
            <PriceComponent />
          </Grid>
        </Grid>
      </Box>
      <BillingComponent />
      <Divider />
      <Box sx={boxStyles.five}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BenefitsComponent title="Unlimited websites" />
          <BenefitsComponent title="100% data ownership" />
          <BenefitsComponent title="Email reports" />
        </Box>

        <button style={buttonStyle}>Start my Trial</button>
      </Box>
    </Card>
  );
};

export default CardComponent;
