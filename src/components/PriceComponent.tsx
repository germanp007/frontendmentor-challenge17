import { Box, Typography } from "@mui/material";
import { boxStyles } from "../Theme/constants";
import { myContext } from "../context/Context";
import { useContext } from "react";
const PriceComponent = () => {
  const context = useContext(myContext);

  if (!context) {
    // Manejar el caso donde context es undefined
    return null;
  }

  const { price } = context;

  return (
    <Box sx={boxStyles.two}>
      <Typography
        variant="body1"
        fontWeight={800}
        color="primary.contrastText"
        textAlign={"center"}
        fontSize={"1.85rem"}
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
  );
};

export default PriceComponent;
