import { THEME_TYPES } from "@/constants";

const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return THEME_TYPES.DARK;
  } else {
    return THEME_TYPES.LIGHT;
  }
};

export default getSystemTheme;
