import { DefaultTheme } from "styled-components";

const MasterTheme = {
  colors: {
    primary: "#FFF" as "#FFF",
    darkText: "hsl(229, 25%, 31%)" as "hsl(229, 25%, 31%)",
    scoreText: "hsl(229, 64%, 46%)" as "hsl(229, 64%, 46%)",
    headerOutline: "hsl(217, 16%, 45%)" as "hsl(217, 16%, 45%)",
    lightWhite: "#EEE" as "#EEE",
    lighterWhite: "#DDD" as "#DDD",
    scissorsShadow: "hsl(40, 84%, 35%)" as "hsl(40, 84%, 35%)",
    rockShadow: "hsl(349, 70%, 35%)" as "hsl(349, 70%, 35%)",
    paperShadow: "hsl(230, 89%, 35%)" as "hsl(230, 89%, 35%)",
    lizardShadow: "hsl(261, 72%, 35%)" as "hsl(261, 72%, 35%)",
    spockShadow: "hsl(189, 58%, 35%)" as "hsl(189, 58%, 35%)",
  },
  gradients: {
    background: "radial-gradient(circle at top center, hsl(214, 47%, 23%), hsl(237, 49%, 15%))" as "radial-gradient(circle at top center, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    scissors: "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))" as "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    paper: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))" as "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    rock: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))" as "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    lizard: "radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))" as "radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
    spock: "radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))" as "radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))"
  },
  fonts: {
    fontFamily: "Barlow Semi Condensed" as "Barlow Semi Condensed",
    normalWeight: "600" as "600",
    bigWeight: "700" as "700",
  },
  mediaWidths: {
    shrinkWidth: "700px" as "700px",
  },
  positions: {
    userSelection: {
      top: 55 as 55,
      left: -90 as -90,
    },
    opponentSelection: {
      top: 55, 
      left: 300,
    },
    userSelectionMobile: {
      top: 55 as 55,
      left: 15 as 15,
    },
    opponentSelectionMobile: {
      top: 55 as 55, 
      left: 205 as 205,
    }
  }
};

export default MasterTheme;
