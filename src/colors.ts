// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#EFF1F4",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: "#F5F6F8",
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: "#F55858",
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primaryDefault: "#FF7D01",
  primary50: "#FEF3E2",
  primary100: "#FDE0B8",
  primary200: "#FCCD8A",
  primary300: "#FBB95D",
  primary400: "#FAA940",
  primary500: "#F99C2F",
  primary600: "#F4902C",
  primary700: "#ED8129",
  primary800: "#E67326",
  primary900: "#DC5B20",
  gray50: "#FAFAFA",
  gray100: "#F7FAFC",
  gray200: "#EDF2F7",
  gray300: "#E2E8F0",
  gray400: "#CBD5E0",
  gray500: "#A0AEC0",
  gray600: "#718096",
  gray700: "#4A5568",
  gray800: "#2D3748",
  gray900: "#1A202C",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
  successDefault: "#49C57A",
  warningDefault: "#FAA940",
  dangerDefault: "#F16063",
  white: "#FFFFFF",
  female: "#FF92AE",
  male: "#40ACFF",
  disable: "#9FABB6",
  infor: "#35ABFF",
  successSoft: "#DEFFEE",
  textDark: "#234361",
  line: "#EFF1F4",
  indicator: "#E6E6E6",
}

export const colorsAvatar = ["#40ACFF", "#4970E6", "#2FB388", "#FAA940", "#FF3D9A", "#4C6FFF"]
export const colorBG = ["#ECF7FF", "#EDF1FF", "#EAF8F4", "#FFF6EC", "#FFECF5", "#EDF1FF"]
