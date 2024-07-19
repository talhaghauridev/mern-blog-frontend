import { gql } from "@apollo/client";

const GET_MY_PROFILE = gql`
  query GetMyProfile {
    user: getMyProfile {
      blogs
      role
      profile_info {
        password
        username
        email
        profileImage {
          url
          public_id
        }
      }
      refreshToken
    }
  }
`;

const REFRESH_ACCESS_TOKEN = gql`
  mutation RefreshAccessToken($refreshToken: String!) {
    refreshAccessToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;

export { GET_MY_PROFILE, REFRESH_ACCESS_TOKEN };
