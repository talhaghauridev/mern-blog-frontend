import { blogBannerDark } from "@assets";
import Hello from "@components/Hello";
import { Image } from "@components/ui";
import useFetchLatestBlogs from "@hooks/blogs/useFetchLatestBlogs";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import GoogleLoginButton from "./components/GoogleLoginButton";
import useFetchTrendingBlogs from "@hooks/blogs/useFetchTrendingBlogs";

// const token =
//   "ya29.a0AXooCgs50d27AWd3zR2EDe49zS8PawkBBRur3oa6a1DtwPJRP_qs_cr4hzaGQljGkayaRabeTBD7ypoWdU7jepAcDdj-LccxzpCJzpmRByMXvb4DdrHDA8ANyzJPrcBq9Xh1wZ39V7aBJ472hVoPbZlIPhlbe2QUKMsaCgYKAYwSARASFQHGX2Mi2o4DxX97_oom3LuK7Nncug0170";
function App() {
  const { latestBlogs, handleFetchLatestBlogs, loading, refetch } =
    useFetchLatestBlogs();
  const { handleFetchTrendingBlogs, trendingBlogs } = useFetchTrendingBlogs();
  return (
    <>
      {loading ? "Loading...." : JSON.stringify(latestBlogs?.blogs)}
      {latestBlogs?.count}
      <button onClick={() => handleFetchLatestBlogs()}>Fetch</button>
      <button onClick={() => refetch({ input: { page: 2 } })}>Re-Fetch</button>

      {JSON.stringify(trendingBlogs)}
      <button onClick={handleFetchTrendingBlogs}>
        handleFetchTrendingBlogs
      </button>
      <Hello />
      <Image src={blogBannerDark} alt="hello" />
      <h1 className="text-black text-[29px]">Hello World</h1>
      <GoogleOAuthProvider clientId="291220345765-l2mpon6j2ol878skb7k1ptnvthkcr1og.apps.googleusercontent.com">
        <GoogleLoginButton />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
