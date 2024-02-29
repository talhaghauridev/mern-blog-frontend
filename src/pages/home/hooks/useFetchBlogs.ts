import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "@graphql/queries/blogQuery";

const useFetchBlogs = () => {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);

  return {
    loading,
    blogs: data?.blogs,
  };
};

export default  useFetchBlogs ;
