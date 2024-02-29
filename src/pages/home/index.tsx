import Hero from "@layout/Hero/Hero";
import React, { useEffect } from "react";
import Blogs from "./components/Blogs";
import { toast } from "react-toastify";
const Home = () => {
  useEffect(() => {
    toast.success("Helllo");
  }, []);
  return (
    <div>
      <Hero />
      <Blogs />
    </div>
  );
};

export default Home;
