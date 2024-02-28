import React from "react";
import useBlogDetials from "./hooks/useBlogDetials";
import Detials from "./components/Detials";

const BlogDetials = () => {
  const { blog, loading } = useBlogDetials();
  return (
    <div>
      <Detials {...blog} />
    </div>
  );
};

export default BlogDetials;
