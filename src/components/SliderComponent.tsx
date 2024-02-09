import { Box, Slider } from "@mui/material";
import { myContext } from "../context/Context";
import { useContext } from "react";
import { sliderStyle } from "../Theme/constants";

const SliderComponent = () => {
  const { price, setPrice } = useContext(myContext);

  const priceOptions = [8, 12, 16, 24, 36];

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      const closestValue = priceOptions.reduce((prev, curr) =>
        Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
      );

      setPrice(closestValue);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Slider
        min={8}
        max={36}
        step={4}
        sx={sliderStyle}
        value={price}
        onChange={handleSliderChange}
      />
    </Box>
  );
};

export default SliderComponent;