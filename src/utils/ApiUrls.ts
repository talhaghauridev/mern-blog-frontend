const DEV_API_URL = import.meta.env.VITE_DEV_API_URL;
const PROD_API_URL = import.meta.env.VITE_PROD_API_URL;

const API_BASE_URL =
  import.meta.env.MODE === "production" ? PROD_API_URL : DEV_API_URL;

export { API_BASE_URL };
