import { createGlobalStyle } from "styled-components";
//@ts-ignore
import font from "../assets/fonts/harryPotter.TTF";

const theme = {
  colors: {
    accent: "#0074CA",
    danger: "#E53935",
    dangerPale: "#ffecec",
    orange: "#FB762E",
    orangePale: "#fff4ec",
    green: "#2CB532",
    greenPale: "#edf9ee",
    black: "#000000",
    blue100: "#83b0e7",
    blue300: "#5393de",
    blue700: "#2F73D8",
    blue900: "#2C3E50",
    grey100: "#FAFAFA",
    grey200: "#E1E1E5",
    grey300: "#BCC6CC",
    grey400: "#A3A9B5",
    grey500: "#819098",
    grey700: "#9E9E9E",
    grey900: "#6E7A76",
    ReactBlue: "#2F73D9",
    white100: "#FFFFFF",
    white200: "#F5F5F5",
    white300: "#E5E5E5",
    white400: "#D4D4D4",
    white500: "#C4C4C4",
    white700: "#BCC6CC",
    // Original Colors from Harry Potter Film
    GriffindorRedDark: "#740001",
    GriffindorRed: "#ae0001",
    GriffindorYellow: "#eeba30",
    GriffindorGold: "#d3a625",
    SlytherinGreenDark: "#1a472a",
    SlytherinGreen: "#2a623d",
    SlytherinSilverDark: "#5d5d5d",
    SlytherinSilverLigth: "#aaaaaa",
    RavenclawBlueDark: "#0e1a40",
    RavenclawBlue: "#222f5b",
    RavenclawGreyLady: "#bebebe",
    RavenclawGold: "#946b2d",
    HufflepuffCanary: "#ecb939",
    HufflepuffLigthCanary: "#f0c75e",
    HufflepuffLigthBrown: "#726255",
    HufflepuffDarkBrown: "#372e29",
    DementorBlack: "#000000",
  },
  font: "MyFont",
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyFont';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default theme;
