import { useLazyQuery } from "@apollo/client";
import { GET_TRENDING_BLOGS } from "@graphql/queries/blog";
import { useMessage } from "@/hooks/hooks";
import { useCallback } from "react";

const useFetchTrendingBlogs = () => {
  const [fetchBlogs, { loading, error, refetch, data }] =
    useLazyQuery<any>(GET_TRENDING_BLOGS);

  const handleFetchTrendingBlogs = useCallback(() => fetchBlogs(), []);

  useMessage(null, error);

  return {
    loading,
    error,
    refetch,
    trendingBlogs: data?.blogs,
    handleFetchTrendingBlogs,
  };
};

export default useFetchTrendingBlogs;
