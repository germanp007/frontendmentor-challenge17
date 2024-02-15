import Switch from "@mui/material/Switch";
import { switchStyle } from "../Theme/constants";
import { theme } from "../Theme/theme";
import { myContext } from "../context/Context";
import { useContext } from "react";
export default function ControlSwitch() {
  const context = useContext(myContext);

  if (!context) {
    return null;
  }
  const { checked, handleChange } = context;
  return (
    <Switch
      sx={{
        ...switchStyle,
        "& .MuiSwitch-track": {
          ...switchStyle["& .MuiSwitch-track"],
          backgroundColor: checked
            ? theme.palette.secondary.sliderBackground
            : theme.palette.secondary.toggleBackground,
        },
      }}
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
