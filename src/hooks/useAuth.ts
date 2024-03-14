import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user) {
  }
  return {
    user,
  };
};

export default useAuth;
