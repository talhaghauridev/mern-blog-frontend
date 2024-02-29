import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SERVER_URL: string = import.meta.env.VITE_SERVER_URL;

const FOOTER = {
  Links: [
    {
      name: "Products",
      list: ["Overview", "Solutions", " Pricing", "Customers"],
    },
    {
      name: "Category",
      list: ["About", "Investor Relations", " Jobs", "Press", "Blog"],
    },

    {
      name: "Support",
      list: ["Contact", "Documentation", " Chat", "FAQ"],
    },
    {
      name: "Legal",
      list: [
        "Terms of Service",
        "               Privacy Policy",
        "Cookie settings ",
      ],
    },
  ],

  Icons: [FaInstagram, FaGithub, FaXTwitter, FaLinkedinIn],
};


const USER_INFO_KEY = "userInfo"

export { SERVER_URL, FOOTER,USER_INFO_KEY };
