import { gql } from "@apollo/client";

const GET_LATEST_BLOGS = gql`
  query LatestBlogs($input: LatestBlogsInput) {
    blogs: latestBlogs(input: $input) {
      blogs {
        _id
        activity {
          total_likes
        }
        author {
          joinedAt
          profile_info {
            fullName
          }
        }
      }
      count
    }
  }
`;

const GET_TRENDING_BLOGS = gql`
  query TrendingBlogs {
    blogs: trendingBlogs {
      banner
      blog_id
      author {
        profile_info {
          profileImage {
            url
          }
        }
      }
    }
  }
`;

// const GET_BLOGS_BY_CATEGORY = gql``;
export { GET_LATEST_BLOGS, GET_TRENDING_BLOGS };
