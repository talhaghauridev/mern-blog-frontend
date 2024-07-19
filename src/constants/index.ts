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

export type BlogCategoriesType = (typeof blogCategories)[number];
export { blogCategories };
