import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs: getAllBlogs {
      title
      description
      _id
      image
      user {
        name
      }
    }
  }
`;

const GET_BLOG_DETIALS = gql`
  query GetBlogDetials($blogId: ID!) {
    blog: getBlogDetials(id: $blogId) {
      description
      title
      description
      image
      user {
        email
        name
      }
      comments {
        comment
        user {
          name
          email
        }
      }
      createdAt
    }
  }
`;

export { GET_ALL_BLOGS, GET_BLOG_DETIALS };
