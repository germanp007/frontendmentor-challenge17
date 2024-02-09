import React from "react";

export const sectionMain: React.CSSProperties = {
  minHeight: "70vh",
  width: "100vw",
  backgroundImage: "url(/images/bg-pattern.svg)",
  backgroundSize: "cover",
  backgroundColor: "hsl(230, 100%, 99%)",
  backgroundRepeat: "no-repeat ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1.5rem",
};

export const sliderStyle = {
  width: "80%",
  height: "10px",
  color: "hsl(174, 77%, 80%)",
  "& .MuiSlider-thumb": {
    height: "32px",
    width: "32px",
    backgroundColor: "hsl(174, 86%, 45%)",
    backgroundImage: "url(/images/icon-slider.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#eaeefb",
  },
};
