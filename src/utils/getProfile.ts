import axios from "axios";
import { REFRESH_ACCESS_TOKEN } from "../graphql/queries/user";
import client from "../graphql/client";

async function getGoogleProfile(access_token: string) {
  try {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        {
          headers: {
            authorization: `Bearer ${access_token}`,
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  } catch (err) {
    console.error(err);
    return null;
  }
}
interface RefreshTokenResponse {
  refreshAccessToken: {
    accessToken: string;
    refreshToken: string;
  };
}

export const refreshAccessToken = async (): Promise<RefreshTokenResponse> => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const { data } = await client.mutate<RefreshTokenResponse>({
    mutation: REFRESH_ACCESS_TOKEN,
    variables: { refreshToken },
  });

  return data!;
};

export default getGoogleProfile;
