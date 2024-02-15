import { PaletteOptions, createTheme } from "@mui/material";

interface MyPaletteOptions extends PaletteOptions {
  mainBackground: string;
  lightText: string;
  darkText: string;
  contrastText: string;
  discountText: string;
  priceBackground: string;
  emptySlider: string;
  toggleBackground: string;
  sliderBackground: string;
  sliderBar: string;
  discountBackground: string;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#44124",
      mainBackground: "hsl(230, 100%, 99%)", //(Main Background)
      lightText: "hsl(225, 20%, 60%)", //(Text)
      darkText: "hsl(226, 100%, 87%)", //(CTA Text)
      contrastText: "hsl(227, 35%, 25%)", //(Text & CTA Background)
      discountText: "hsl(15, 100%, 70%)", // (Discount Text)
      priceBackground: "hsl (0, 0%, 100%)", //(Pricing Component Background)
    },
    secondary: {
      main: "#D80800",
      emptySlider: "hsl(224, 65%, 95%)", //(Empty Slider Bar)
      toggleBackground: "hsl(223, 50%, 87%)", //(Toggle Background)
      sliderBackground: "hsl(174, 86%, 45%)", //(Slider Backround):
      sliderBar: "hsl(174, 77%, 80%)", // (Full Slider Bar)
      discountBackground: "hsl(14, 92%, 95%)", // (Discount Background)
    },
  } as unknown as MyPaletteOptions,
  typography: {
    fontFamily: "Manrope",
  },
});
