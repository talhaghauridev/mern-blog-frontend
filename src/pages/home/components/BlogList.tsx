import React from "react";
import BlogCard from "./BlogCard";
import useFetchBlogs from "../hooks/useFetchBlogs";

const BlogList = () => {
  const { blogs, loading } = useFetchBlogs();
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      <BlogCard
        title="First"
        description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text. "
        _id="1"
        createdAt="April 20,2024"
        image="hello"
      />

      {!loading && blogs && blogs?.map((item: any) => <BlogCard {...item} />)}
    </div>
  );
};

export default BlogList;
