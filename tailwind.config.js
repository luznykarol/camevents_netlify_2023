module.exports = {
  purge: false,
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      "<md": { max: "767.99px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      dark: { raw: "(prefers-color-scheme: dark)" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#042428",
      "black-3": "#0C223F",
      "black-4": "#171A29",
      white: "#fff",
      green: "#69C681",
      grey: "#6F6F6F",
      "grey-200": "#E5E5E5",
      "grey-300": "#B1B4B9",
      "grey-500": "#5F7589",
      "grey-600": "#6F6F6F",
      "grey-700": "#07172D",
      "grey-800": "#FAFAFA",
      "grey-lightest": "#8898AF",
      body: "#6F6F6F",
      "body-dark": "#B1B4B9",
      blue: "#1383D3",
      "blue-600": "#20416F",
      "blue-500": "#1383D3",
      "blue-light": "#D6E6F4",
      "blue-300": "#E4F2FF",
      "blue-dark": "#20416F",
      "blue-darker": "#163662",
      "blue-800": "#173051",
      "blue-900": "#0C223F",
      "orange-500": "#FF512F",
      red: "#D34141",
      linkedin: "#0A66C2",
      input: "#D7D7D7",
      "cam-white": "#EBEBEB",
      "cam-purple-light": "rgba(240, 240, 240, 0.2)",
    },
    backgroundImage: {
      gradient: "linear-gradient(180deg, #8A388B 0%, #6331A2 100%)",
      "gradient-main-bg":
        "radial-gradient(50% 50% at 50% 50%, #260C3C 27.6%, #11133F 100%)",
      "gradient-button": "linear-gradient(180deg, #8A388B 0%, #6331A2 100%)",
      "gradient-button-secondary":
        "linear-gradient(180deg, #B64DB8 0%, #7840BF 100%)",
      "gradient-lightest":
        "linear-gradient(48.09deg, #FAFAFF 7.02%, #F3F8FE 93.99%)",
      "gradient-orange": "linear-gradient(90deg, #FF512F 0%, #F09819 100%)",
      "gradient-black":
        "linear-gradient(234.05deg, #0A1D37 9.54%, #0B1C33 86.19%)",
      "gradient-black-lighter":
        "linear-gradient(234.05deg, rgba(10, 29, 55, .5) 9.54%, rgba(11, 28, 51, .5) 86.19%)",
      "gradient-lighter":
        "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);",
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.875rem",
      8: "2rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      16: "4rem",
      18: "4.5rem",
      20: "5rem",
      22: "5.5rem",
      24: "6rem",
      26: "6.25rem",
      27: "7rem",
      28: "7.5rem",
      32: "8rem",
      34: "9.375rem",
      40: "10rem",
      48: "12rem",
      52: "12.5rem",
      53: "13rem",
      56: "14rem",
      64: "16rem",
      80: "20rem",
      86: "24rem",
    },
    backgroundColor: (theme) => theme("colors"),
    backgroundOpacity: (theme) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      default: theme("colors.gray.300", "currentColor"),
    }),
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      none: "0",
      button: "1.25rem",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      l: "1rem",
      xl: "1.688rem",
      full: "9999px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    boxShadow: {
      xs: "0px 2px 2px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default: "0px 4px 23px 4px rgba(126, 126, 126, 0.03)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      1: "0px 100px 80px rgba(0, 0, 0, 0.04), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0287542), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0238443), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.02), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0161557), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0112458)",
      3: "0px 2px 2px rgba(0, 0, 0, 0.05)",
      black: "2px 2px 20px 2px rgba(0, 0, 0, 0.15)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    container: {},
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    divideColor: (theme) => theme("borderColor"),
    divideOpacity: (theme) => theme("borderOpacity"),
    divideWidth: (theme) => theme("borderWidth"),
    fill: {
      current: "currentColor",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      default: "1",
    },
    flexShrink: {
      0: "0",
      default: "1",
    },
    fontFamily: {
      sans: [
        "Sen",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      xxs: "0.65rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      h6: "1.25rem",
      h5: "1.5rem",
      h4: "1.875rem",
      h3: "2.25rem",
      h2: "3rem",
      h1: "2.5rem",
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    height: (theme) => ({
      xxs: "7.5rem",
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      double: "200%",
      screen: "100vh",
    }),
    inset: {
      0: "0",
      auto: "auto",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.8rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      h2: "3.75rem",
      h1: "4.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      xxs: "7.5rem",
      s: "17.5rem",
      xs: "21rem",
      sm: "24rem",
      md: "29rem",
      lg: "32rem",
      xl: "34rem",
      xxl: "36rem",
      xxxl: "41rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "55rem",
      "5xl": "64rem",
      "6xl": "66rem",
      "7xl": "72rem",
      half: "49%",
      full: "100%",
      ...breakpoints(theme("screens")),
    }),
    minHeight: {
      0: "0",
      10: "2.5rem",
      28: "7.5rem",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      0: "0",
      full: "100%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    padding: (theme) => theme("spacing"),
    placeholderColor: (theme) => theme("colors"),
    placeholderOpacity: (theme) => theme("opacity"),
    space: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    stroke: {
      current: "currentColor",
    },
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2",
    },
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    zIndex: {
      minus: "-1",
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
    },
    gap: (theme) => theme("spacing"),
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundOpacity: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderOpacity: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    boxSizing: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive"],
    divideOpacity: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    clear: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    placeholderColor: ["responsive", "focus"],
    placeholderOpacity: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textOpacity: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
    gap: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnStart: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridRow: ["responsive"],
    gridRowStart: ["responsive"],
    gridRowEnd: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    scale: ["responsive", "hover", "focus"],
    rotate: ["responsive", "hover", "focus"],
    translate: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDuration: ["responsive"],
    transitionDelay: ["responsive"],
  },
  corePlugins: {},
  plugins: [],
};