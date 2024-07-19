import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

function GoogleLoginButton() {
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>({});

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse as any),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user?.access_token) {
      console.log({ accessToken: user.access_token });

      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  // const loginWithGoogle = () => {
  //   // Customize the URL or use the OAuth library's method to open in a new tab
  //   window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=${encodeURIComponent(
  //     window.location.origin
  //   )}&response_type=token&scope=openid%20profile%20email`;
  // };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          {profile?.picture && <img src={profile?.picture} alt="user image" />}
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )}
    </div>
  );
}

export default GoogleLoginButton;
