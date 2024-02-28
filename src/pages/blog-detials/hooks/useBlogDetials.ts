import { useQuery } from "@apollo/client";
import { GET_BLOG_DETIALS } from "@graphql/queries/getAllBlogs";
import { useParams } from "react-router-dom";
import { IBlog } from "src/types";

const useBlogDetials = () => {
  const { blogId } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_DETIALS, {
    variables: { blogId },
  });
  console.log("blogId", blogId);
  console.log("Data", data);

  return {
    loading,
    blog: data?.blog,
  };
};

export default useBlogDetials;
