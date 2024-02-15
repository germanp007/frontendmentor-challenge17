export const sectionMain: React.CSSProperties = {
  minHeight: "70vh",
  width: "100vw",
  backgroundImage: "url(/images/bg-pattern.svg)",
  backgroundSize: "cover",
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
    height: "36px",
    width: "36px",
    backgroundColor: "hsl(174, 86%, 45%)",
    backgroundImage: "url(/images/icon-slider.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "hsl(223, 50%, 87%)",
  },
};

export const switchStyle = {
  width: 55,
  height: 32,
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiSwitch-thumb": {
    height: 15,
    width: 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 50,
    backgroundColor: "#eaeefb",
    opacity: 1,
    border: 0,
  },
};

export const cardStyle = {
  position: "absolute",
  height: {
    xs: 450,
    sm: 350,
  },
  width: {
    xs: 320,
    sm: 550,
  },
  zIndex: 3,
  top: 250,
  borderRadius: 2,
};

export const boxStyles = {
  one: {
    height: {
      xs: 220,
      sm: 150,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  two: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
  },
  three: {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: ".5rem",
    padding: "0 .7rem",
    // marginBottom: "1.5rem",
  },
  four: {
    display: "grid",
    gap: "0.5rem",
    zIndex: "1",
    position: "absolute",
    top: 100,
  },
  five: {
    display: "flex",
    width: "80%",
    margin: {
      xs: "auto",
      sm: "20px auto",
    },
    padding: "1rem",
    gap: "1rem",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    justifyContent: {
      xs: "center",
      sm: "space-between",
    },
    alignItems: {
      xs: "center",
      sm: "center",
    },
  },
};

export const buttonStyle = {
  background: "hsl(227, 35%, 25%)",
  borderRadius: 50,
  color: "hsl(223, 50%, 87%)",
  fontWeight: 600,
  width: 150,
  height: "35px",
  outline: "none",
  border: "none",
  cursor: "pointer",
};
