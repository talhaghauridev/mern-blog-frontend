import { useLazyQuery } from "@apollo/client";
import { GET_LATEST_BLOGS } from "@graphql/queries/blog";
import { useMessage } from "@hooks/hooks";
import { useCallback } from "react";

const useFetchLatestBlogs = () => {
  const [fetchBlogs, { loading, error, refetch, data }] =
    useLazyQuery(GET_LATEST_BLOGS);

  const handleFetchLatestBlogs = useCallback((page = 1) => {
    fetchBlogs({
      variables: {
        input: { page },
      },
    });
  }, []);

  useMessage(null, error);

  return {
    loading,
    error,
    refetch,
    latestBlogs: data?.blogs,
    handleFetchLatestBlogs,
  };
};

export default useFetchLatestBlogs;
