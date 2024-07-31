const blogCategories = [
  "tech",
  "programming",
  "linux",
  "kde plasma",
  "github",
  "new dev",
  "hello",
  "test",
  "card",
] as const;

const THEME_TYPES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

const THEME_KEY = "theme";

export type BlogCategoriesType = (typeof blogCategories)[number];
export { blogCategories, THEME_TYPES, THEME_KEY };
