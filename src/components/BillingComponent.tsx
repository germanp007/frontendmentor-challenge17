import { Box, Hidden, Typography } from "@mui/material";
import { boxStyles } from "../Theme/constants";
import ControlSwitch from "./ControlSwitch";

const BillingComponent = () => {
  return (
    <Box sx={boxStyles.three} paddingRight={{ sm: 8 }}>
      <Typography
        variant="body1"
        color="primary.lightText"
        fontSize={12}
        fontWeight={700}
      >
        Monthly Billing
      </Typography>
      <ControlSwitch />
      <Typography
        variant="body1"
        color="primary.lightText"
        fontSize={12}
        fontWeight={700}
      >
        Yearly Billing
      </Typography>

      <Typography
        fontSize={12}
        color="primary.discountText"
        textAlign={"center"}
        sx={{
          background: "hsl(14, 92%, 95%)",
          minWidth: 45,
          padding: "0 5px",
          borderRadius: 50,
        }}
      >
        <Hidden smDown>-25% discount</Hidden>

        <Hidden smUp implementation="css">
          -25%
        </Hidden>
      </Typography>
    </Box>
  );
};

export default BillingComponent;
